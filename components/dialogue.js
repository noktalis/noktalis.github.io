import format from "../styles/modules/dialogue.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";

/**Container that holds dialogue bubbles
 * 
 * @param {Bubble} children - Content to appear within container. Can be anything,
 * 								but Bubble elements are expected
 * @returns 
 */
export default function Dialogue({children}){
	const theme = useContext(ThemeContext);
	let themeClass;

	switch (theme) {
		case "lyt":
			themeClass = format.lyt;
			break;
		case "mond":
		default:
			themeClass = format.mond;
	}

	return (
		<div className={`${format.container} ${themeClass}`}>
			{children}
		</div>
	);
}

/**A paragraph element styled to look like a text bubble
 * 
 * @param {*} children 		- Text to appear within the text bubble
 * @param {String} side		- Indicates which side of the container the bubble should stick to
 * 								"right" or "left" expected, "left" by default if unrecognized
 * @param {String} speaker 	- Determines the font used based on who the speaker is
 * 								Uses the font for nat by default
 * @returns 
 */
export function Bubble({children, side, speaker}){

	/* Defines which side of the container the bubble should stick to */
	let sideClass;
	switch(side){
		case "right":
			sideClass = format.right;
			break;
		case "left":
		default:
			sideClass = format.left;
	}

	/* Defines what font should be used in the bubble */
	let speakerClass;
	switch(speaker){
		case "xue":
			speakerClass = format.xue;
			break;
		default:
			speakerClass = format.nat;
	}

	return(
		<p className={`${format.bubble} ${sideClass} ${speakerClass}`}>
			{children}
		</p>
	);
}