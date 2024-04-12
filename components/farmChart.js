import format from "/styles/modules/farmChart.module.scss";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";
import React from "react";

export default function FarmChart({children}){
	return(
		<div className={format.chart}>
			{children}
		</div>
	)
}

export function FarmChartRow({id, name, icon, desc2, desc4, children}){
	const [visible, setVisibility] = useState(true);

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
				<p className="description"><b>2pc: </b><small>{desc2}</small></p>
				{desc4 ? <p className="description"><b>4pc: </b><small>{desc4}</small></p> : null}
				
			</div>
			<div className={format.chars}>
				{children}
			</div>
		</div>
	);
}




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