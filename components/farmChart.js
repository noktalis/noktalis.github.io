
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";

export default function FarmChart(){
	return(
		<div>
		
		</div>
	)
}

export function FarmChartRow({}){
	// TODO: row container css class
	// TODO: see prop spreading
	return(
		<div>
			<button>
				<img/>
			</button>
		</div>
	)
}

function toggleRow(setName){
	// TODO
	//use setname to identify row
	// within row, toggle all children elements' descriptions
}