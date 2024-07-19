import format from "/styles/modules/farmChart.module.scss";
import { useState } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";
import React from "react";
import hsr_char_data from "/public/json/hsr/char_relics.json";
import gi_char_data from "/public/json/genshin/char_artifacts.json"

// TODO: genshin version

/**
 * A container for FarmChartRow elements
 * 
 * @param {*} children - child elements to be placed within container
 * @returns 
 */
export default function FarmChart({children}){
	return(
		<div className={format.chart}>
			{children}
		</div>
	)
}

export function GIRow({id, name, icon, chars, children}){
	return(
		<div className={format.row} id={id}>
			<div className={format.set}>
			<button	title={name} onClick={() => toggleRow(id)}>
					<img src={icon}
					alt={"Icon for "+name+" relic set."}/>
					{name}
				</button>

				<div className={[format.portraits, "portraits"].join(' ')}>
					{chars.map((char) => <img src={gi_char_data[char]["img"]} alt={"Portrait of " + gi_char_data[char]["name"]}></img>)}
				</div>				
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
	 * 		- Hiding character information except for their portraits/icons
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
			<div className={format.set}>
				<button	title={name} onClick={() => toggleRow(id)}>
					<img src={icon}
					alt={"Icon for "+name+" relic set."}/>
					{name}
				</button>
				{desc2 ? <p className="description"><b>2pc: </b><small>{desc2}</small></p> : null}
				{desc4 ? <p className="description"><b>4pc: </b><small>{desc4}</small></p> : null}
				
			</div>
			<div className={format.charGroups}>
				{children}
			</div>
		</div>
	);
}

/**
 * Component that represents a use case of an HSR relic set
 * 	Ex: 2pc, 4pc
 */
export function RelicGroup({usecase, characters, children}){
	if (characters == undefined)
		characters = []
	console.log(usecase);
	console.log(characters);

	return(
		<div className={`${format.charGroup}`}>
			<p>
				{usecase}
			</p>
			<div className={format.chars}>
				{characters.map(char => <HSRChar {...hsr_char_data[char]} key={char}/>)}	
			</div>
			{children}
		</div>
	);
}

/**
 * Component for displaying a character within a FarmChartRow's chars div
 * 
 * @param {String} src	- path for character icon image
 * @param {String} name	- name of character
 * 
 * Parameters to indicate character's preferred relic stats
 * @param {String} body		- main stat of body/chest piece
 * @param {String} feet		- main stat of feet/boots piece
 * @param {String} rope		- main stat of rope piece
 * @param {String} sphere	- main stat of sphere piece
 * @param {list[String]} substats	- list of substats
 * 
 * @param {String} children - child elements in substats container
 * @returns 
 */
export function HSRChar({src, name, body, feet, rope, sphere, substats, children}) {
	if (substats == undefined)
		substats = []

	return(
		<div className={[format.character, "character"].join(' ')}>
			<div className={format.icon}>
				<img src={src}
					alt={name}
					title={name}/>
				<span>{name}</span>
			</div>
			<div className={[format.mainstats, "mainstats"].join(' ')}>
				<img src="/images/hsr/relicBody.png"
					alt="The icon for the body piece of a Star Rail relic set."
					title="Body"/>
				<p>{body}</p>
				<img src="/images/hsr/relicFeet.png"
					alt="The icon for the feet piece of a Star Rail relic set."
					title="Feet"/>
				<p>{feet}</p>

				<img src="/images/hsr/relicRope.png"
					alt="The icon for the rope piece of a Star Rail ornament set."
					title="Rope"/>
				<p>{rope}</p>
				<img src="/images/hsr/relicSphere.png"
					alt="The icon for the sphere piece of a Star Rail ornament set."
					title="Sphere"/>
				<p>{sphere}</p>
			</div>
			<div className={[format.substatsContainer, "substats"].join(' ')}>
				{children} 
				{substats.map(stat => <span key={stat}>{stat}</span>)}
			</div>
		</div>
	);
}
