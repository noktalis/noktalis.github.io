import format from "/styles/modules/farmChart.module.scss";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";

export default function FarmChart({children}){
	return(
		<div className={format.chart}>
			{children}
		</div>
	)
}

export function FarmChartRow({name, icon, desc2, desc4, children}){
	// TODO: json
	return(
		<div className={format.row}>
			<div className={format.set}>
				<button>
					<img src={icon}/>
					{name}
				</button>
				<p><b>2pc: </b><small>{desc2}</small></p>
				<p><b>4pc: </b><small>{desc4}</small></p>
			</div>
			<div className={format.chars}>
				{children}
			</div>
		</div>
	);
}

function toggleRow(setName){
	// TODO
	//use setname to identify row
	// within row, toggle all children elements' descriptions
}

export function HSRChar({src, name, body, feet, rope, sphere, substats, children}) {
	if (substats == undefined)
		substats = []
	
	return(
		<div className={format.character}>
			<div className={format.icon}>
				<img src={src}
					alt={name}
					title={name}/>
				<span>{name}</span>
			</div>
			<div className={format.mainstats}>
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
			<div className={format.substatsContainer}>
				{children} 
				{substats.map(stat => <span key={stat}>{stat}</span>)}
				{/* {substats} */}
			</div>
		</div>
	);
}