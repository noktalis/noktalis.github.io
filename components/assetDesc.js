import format from "../styles/modules/assetDesc.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";

/**
 * A component that holds an image and a description of the image on the side
 * @param {*} prop 
 * @returns 
 */
export default function AssetDescription({align, imgSrc, children}){
	const theme = useContext(ThemeContext);
	let themeClass;

	switch (theme) {
		case "mond":
		default:
			themeClass = format.mond;
	}

	if (align == "left") {
		return(<LeftDescription imgSrc={imgSrc} themeClass={themeClass}>{children}</LeftDescription>);
	} else {
		return(<RightDescription imgSrc={imgSrc} themeClass={themeClass}>{children}</RightDescription>);
	}
}

/**
 * The image is on the left and the description is on the right.
 * @param {*} children - description to be placed inside the component
 */
export function LeftDescription({imgSrc, children, themeClass}){
	return(
		<div className={`${format.container} ${themeClass}`}>
			<img src={imgSrc}/>
			<div>
				{children}
			</div>
		</div>
	);
}

/**
 * The image is on the right and the description is on the left.
 * @param {*} children - description to be placed inside the component
 */
export function RightDescription({imgSrc, children, themeClass}){
	return (
		<div className={`${format.container} ${themeClass}`}>
			<div>
				{children}
			</div>
			<img src={imgSrc}/>
		</div>
	);
}

