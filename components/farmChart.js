import format from "/styles/modules/farmChart.module.scss";
import { useState } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";
import React from "react";
import hsr_char_data from "/public/json/hsr/char_relics.json";
import gi_char_data from "/public/json/genshin/char_artifacts.json"

/**A container for FarmChartRow elements
 * 
 * @param {*} children - child elements to be placed within container
 * @returns 
 */
export default function FarmChart({children}){
	return(
		<div className={format.chart}>
			{children}
		</div>
	);
}

/**Represents a relic/artifact set
 * 
 * @param {*} type - specifies which set of data to use, genshin or hsr
 * @param {*} id - id of the relic/artifact set
 * @param {*} name - name of the relic/artifact set
 * @param {*} icon - image that represents the relic/artifact set
 * @param {list[Object]} useGroups - data of use cases and characters under them
 * @returns 
 */
export function FarmChartRow({type, id, name, icon, desc2, desc4, useGroups, children}){

	// Specify which json to pull data from
	let data;
	switch (type){
		case "gi":
			data = gi_char_data;
			break;
		case "hsr":
			data = hsr_char_data;
	}

	// List of all characters that want this set
	let chars = [];
	for(let usecase of useGroups){
		for(let charID of usecase["characters"]){
			if(!(charID in chars)){
				chars.push(charID)
			}
		}
	}

	// HSR-specific set type preparation
	let setType = (type == "hsr" && desc4) ? "" : "planar"

	return(
		<div className={format.row} id={id}>

			<div className={format.left}>

				{/* Button; Toggles information in row */}
				<button	title={name} onClick={() => toggleRow(id)}>
					{/* Icon of arti/relic set */}
					<img src={icon}
					alt={"Icon for "+name+" relic set."}/>
					{name}
				</button>

				{/* Set effect descriptions */}
				{desc2 ? <p className="description"><b>2pc: </b><small>{desc2}</small></p> : null}
				{desc4 ? <p className="description"><b>4pc: </b><small>{desc4}</small></p> : null}

				{/* Portraits of characters that want the set, separated by use case */}
				<div className={format.userDisplay}>
					{useGroups.map((usecase) => 
						<>
							<p>{usecase["usecase"]}</p>
							<PortraitGrid data={data} chars={usecase["characters"]} key={usecase["usecase"]}/>
						</>
					)}					
				</div>

			</div>
			{/* end left */}

			{/* right side */}
			{type == "gi" ? <GIArtifacts chars={chars}/> : null}
			{type == "hsr" ? <HSRRelics chars={chars} setType={setType}/> : null}
			{children}
		</div>
	);
}

/**A grid of character portraits
 * 
 * @param {*} data - character data, including image source path and proper names
 * @param {*} chars - list of character codes/ids/keys 
 * @returns 
 */
function PortraitGrid({data, chars}){
	return(
		<div className={[format.portraits, "portraits"].join(' ')}>
			{chars.map((char) => <img src={data[char]["img"]} alt={"Portrait of " + data[char]["name"]} key={data[char]["name"]}></img>)}
		</div>
	);
}

/**Represents all artifact set pieces (with variable main stats, which excludes the flower and feather)
 * 
 * @param {*} chars - codes/IDs of characters that want the current set 
 * @returns 
 */
function GIArtifacts({chars}){
	return(
		<div className={`${format.right} ${format.pieces}`}>
			<ArtiPieceSection piece="sands" chars={chars}/>
			<ArtiPieceSection piece="goblet" chars={chars}/>
			<ArtiPieceSection piece="circlet" chars={chars}/>
		</div>
	);
}

/**Represents a relic/artifact piece of a set and contains data on corresponding possible main stats
 * 
 * @param {*} pieceName - the name of the piece: sands, boots, etc.
 * @param {*} pieceIcon - path to image to represent set
 * @param {*} children - children elements 
 * @returns 
 */
function PieceSection({pieceName, pieceIcon, children}){
	return(
		<details>
			<summary>
				<img src={pieceIcon} title={pieceName} alt={"Symbol for the " + {pieceName} + " set piece"}/>
			</summary>

			{children}

			<hr/>
		</details>
	);
}

/**Represents an artifact piece of a set. Genshin version of Piece Section.
 * Shows data for all wanted main stats on the piece and corresponding character data
 * 
 * @param {*} piece - name of the piece
 * @param {*} chars - codes/ids of all characters that want the set
 * @returns 
 */
function ArtiPieceSection({piece, chars}){
	// Info for which artifact piece
	let icon = ""
	let name = ""
	switch (piece) {
		case "sands":
			icon = "/images/genshin/sands.png"
			name = "Sands"
			break;
		case "goblet":
			icon = "/images/genshin/goblet.png"
			name = "Goblet"
			break;
		case "circlet":
			icon = "/images/genshin/circlet.png"
			name = "Circlet"
	}

	// take info from char data json, turns it into hashmap based on piece and main stats
	let statGroups = {};	// data of all wanted main stats and the characters that want each one
	for(let char of chars){							// using list of char array keys
		let mainStats = gi_char_data[char][piece]	// get character's wanted main stats
		console.log(mainStats)

		for(let stat of mainStats){					// add character names as list under main stat in statGroups list
			
			if(statGroups[stat] === undefined){
				statGroups[stat] = []
				console.log("new array")
			}
			statGroups[stat].push(char)
		}
	}

	let mainStats = Object.keys(statGroups)

	// For each main stat, render a segment showing all characters that want that main stat and their ideal substats
	return(
		<PieceSection pieceName={name} pieceIcon={icon}>
			{mainStats.map((stat) => 
				<GIMainStat stat={stat} chars={statGroups[stat]} key={stat}></GIMainStat>
			)}
		</PieceSection>
	);
}

/**Represents a certain main stat on an artifact piece
 * 
 * @param {*} stat - name of the main stat
 * @param {*} chars - codes/IDs of all characters that want this main stat on this piece 
 * @returns 
 */
function GIMainStat({stat, chars}){
	return(
		<div className={format.mainStatGroup}>
			<h3>{stat}</h3>
			<div className={format.chars}>
				{chars.map((char) => 
					<GIChar {...gi_char_data[char]} key={char}></GIChar>
					)}
			</div>
		</div>
	);
}

/**Represents a character and their wanted substats
 * 
 * @param {String} src	- path for character icon image
 * @param {String} name	- name of character
 * 
 * Parameters to indicate character's preferred artifact substats
 * @param {list[String]} substats	- list of substats
 * 
 * @param {String} children - child elements in substats container
 * @returns 
 */
export function GIChar({img, name, substats, note, children}) {
	if (substats == undefined)
		substats = []

	return(
		<div className={[format.character, "character"].join(' ')}>
			<div className={format.icon}>
				<img src={img}
					alt={name}
					title={name}/>
				<span>{name}</span>
			</div>
			{note ? note : null}
			{children} 
			<div className={[format.substatsContainer, "substats"].join(' ')}>
				{substats.map(stat => <span key={stat}>{stat}</span>)}
			</div>
		</div>
	);
}

/**Represents all relic set pieces (with variable main stats, which excludes the head and hands)
 * 
 * @param {*} chars - codes/IDs of characters that want the current set 
 * @returns 
 */
function HSRRelics({chars, setType}){
	let type = {};
	switch (setType){
		case "planar":
			type[0] = "sphere";
			type[1] = "rope";
			break;
		default:
			type[0] = "body";
			type[1] = "feet";
	}

	return(
		<div className={`${format.right} ${format.pieces}`}>
			<RelicPieceSection piece={type[0]} chars={chars}/>
			<RelicPieceSection piece={type[1]} chars={chars}/>
		</div>
	);
}

/**Represents a relic piece of a set. HSR version of Piece Section.
 * Shows data for all wanted main stats on the piece and corresponding character data
 * 
 * @param {*} piece - name of the piece
 * @param {*} chars - codes/ids of all characters that want the set
 * @returns 
 */
function RelicPieceSection({piece, chars}){
	// Info for which relic piece
	let icon = ""
	let name = ""
	switch (piece) {
		case "body":
			icon = "/images/hsr/relicBody.png"
			name = "Chest"
			break;
		case "feet":
			icon = "/images/hsr/relicFeet.png"
			name = "Feet"
			break;
		case "sphere":
			icon = "/images/hsr/relicSphere.png"
			name = "Sphere"
			break;
		case "rope":
			icon = "/images/hsr/relicRope.png"
			name = "Rope"
	}

	// take info from char data json, turns it into hashmap based on piece and main stats
	let statGroups = {};	// data of all wanted main stats and the characters that want each one
	for(let char of chars){							// using list of char array keys
		let mainStats = hsr_char_data[char][piece]	// get character's wanted main stats
		console.log(mainStats)

		for(let stat of mainStats){					// add character names as list under main stat in statGroups list
			
			if(statGroups[stat] === undefined){
				statGroups[stat] = []
				console.log("new array")
			}
			statGroups[stat].push(char)
		}
	}

	let mainStats = Object.keys(statGroups)

	// For each main stat, render a segment showing all characters that want that main stat and their ideal substats
	return(
		<PieceSection pieceName={name} pieceIcon={icon}>
			{mainStats.map((stat) => 
				<HSRMainStat stat={stat} chars={statGroups[stat]} key={stat}></HSRMainStat>
			)}
		</PieceSection>
	);
}

/**Represents a certain main stat on a relic piece
 * 
 * @param {*} stat - name of the main stat
 * @param {*} chars - codes/IDs of all characters that want this main stat on this piece 
 * @returns 
 */
function HSRMainStat({stat, chars}){
	return(
		<div className={format.mainStatGroup}>
			<h3>{stat}</h3>
			<div className={format.chars}>
				{chars.map((char) => 
					<HSRChar {...hsr_char_data[char]} key={char}></HSRChar>
					)}
			</div>
		</div>
	);
}

/**
 * A container for a row within the FarmChart. Represents a relic set. 
 * 
 * @param {*} children 
 * @returns 
 */
export function HSRRow({id, name, icon, desc2, desc4, children}){
	const [visible, setVisibility] = useState(true);

	/**
	 * Minimizes the display of the row by:
	 * 		- Hiding the set effect descriptions
	 * 		- Hiding character wanted substats except for their portraits/icons
	 * 
	 * @param {*} setID - identifies the row
	 */
	function hideRow(setID){
		// use setname to identify row
		let row = document.getElementById(setID);

		// within row, hide all children elements' descriptions
		let elements = row.querySelectorAll(".description, .mainstats, .substats");
		elements.forEach((element) => {
			element.style.display = "none";
			// console.log(element);
		});

		// fix spacing & appearance
		let items = row.querySelectorAll(".character");
		items.forEach((item) => {
			item.style.gridGap = 0;
			item.style.maxWidth = "150px";
			item.style.width = "fit-content";
			item.style.height = "fit-content";
		});
		// console.log(test);
		setVisibility(false);
	}

	/**
	 * Expands the display of the row by:
	 * 		- Showing the set effect descriptions
	 * 		- Showing all character information
	 * 
	 * @param {*} setID - identifies the row
	 */
	function showRow(setID){
		// use setname to identify row
		let row = document.getElementById(setID);

		// within row, show all details
		let elements = row.querySelectorAll(".description");
		elements.forEach((element) => {
			element.style.display = "block";
		});

		elements = row.querySelectorAll(".substats");
		elements.forEach((element) => {
			element.style.display = "flex";
		});

		elements = row.querySelectorAll(".mainstats");
		elements.forEach((element) => {
			element.style.display = "grid";
		});

		// fix spacing & appearance
		let items = row.querySelectorAll(".character");
		items.forEach((item) => {
			item.style.gap = "6px";
			item.style.maxWidth = "33%";
			item.style.width = "33%";
			item.style.height = "auto";
		});

		setVisibility(true);
	}

	/**
	 * Toggles the between hiding and showing extra information within a given row
	 * 
	 * @param {*} setID - identifies the row
	 */
	function toggleRow(setID){
		visible ? hideRow(setID) : showRow(setID)
	}

	return(
		<div className={format.row} id={id}>
			<div className={format.left}>
				<button	title={name} onClick={() => toggleRow(id)}>
					<img src={icon}
					alt={"Icon for "+name+" relic set."}/>
					{name}
				</button>
				{desc2 ? <p className="description"><b>2pc: </b><small>{desc2}</small></p> : null}
				{desc4 ? <p className="description"><b>4pc: </b><small>{desc4}</small></p> : null}
				
			</div>
			<div className={format.right}>
				{children}
			</div>
		</div>
	);
}

/**Represents a character and their wanted substats
 * 
 * @param {String} src	- path for character icon image
 * @param {String} name	- name of character
 * 
 * Parameters to indicate character's preferred relic stats
 * @param {list[String]} substats	- list of substats
 * 
 * @param {String} children - child elements in substats container
 * @returns 
 */
export function HSRChar({img, name, substats, note, children}) {
	if (substats == undefined)
		substats = []

	return(
		<div className={[format.character, "character"].join(' ')}>
			<div className={format.icon}>
				<img src={img}
					alt={name}
					title={name}/>
				<span>{name}</span>
			</div>
			{note ? note : null}
			{children} 
			<div className={[format.substatsContainer, "substats"].join(' ')}>
				{children} 
				{substats.map(stat => <span key={stat}>{stat}</span>)}
			</div>
		</div>
	);
}


