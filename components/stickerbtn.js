import style from "../styles/modules/stickerBtn.module.scss";
import { ThemeContext } from "./pageFormat/ThemeContext";
import { useContext } from "react";

/**
 * A button with a Sticker on the side
 * 
 * @param {*} prop	- holds data needed for attributes
 * 
 * @param btnTitle	- button title
 * @param imgSide	- which side of the button the Sticker should be
 * @param imgSrc	- the source the Sticker should get its image from
 * @param imgSize	- determines how the Sticker's size should be scaled
 * @param imgAlt	- alternative text for the Sticker
 * @param children	- elements that should be within the button alongside the Sticker
 *  
 * @returns 
 */
export default function StickerButton({btnTitle, imgSide, imgSrc, imgAlt, imgSize, children}){	
	const theme = useContext(ThemeContext);
	let themeClass;

	/* Theme determines the button and sticker's appearance */
	switch(theme){
		case "lyt":
			themeClass = style.lyt;
			break;
		case "ri":
			themeClass = style.ri;
			break;
		case "express":
			themeClass = style.ae;
			break;
		case "mond":
		default:
			themeClass = style.mond;
	}
	
	return (
		<button role='link' 
			className={`${style.button} ${themeClass}`} 
			title={btnTitle}>
			<Sticker
				size={imgSize}
				side={imgSide}
				src={imgSrc}
				alt={imgAlt}/>
			{children}
		</button>
	);
}

/**
 * A image that will stick out of its container a bit on one side
 * 
 * @param {*} prop - holds data needed for attributes
 * 
 * @param imgSide	- which side of the button the Sticker should be
 * @param imgSrc	- the source the Sticker should get its image from
 * @param imgSize	- determines how the Sticker's size should be scaled
 * @param imgAlt	- alternative text for the Sticker
 * @returns 
 */
function Sticker({side, src, alt, size}){
	let sideClass;
	let sizeClass;

	/* Determines which side of the container the Sticker should stick to */
	switch(side){
		case "right":
			sideClass = style.right;
			break;
		case "righter":
			sideClass = style.righter;
			break;
		case "lefter":
			sideClass = style.lefter;
			break;
		case "left":
		default:
			sideClass = style.left;
	}

	/* Determines how big the img should scale */
	switch(size){
		case "big":
			sizeClass = style.big;
			break;
		case "bigger":
			sizeClass = style.bigger;
			break;
		case "small":
			sizeClass = style.small;
			break;
		case "smaller":
			sizeClass = style.samller;
			break;
		default:
			sizeClass = "";
	}

	return(
		<img
			className={`${style.sticker} ${sideClass} ${sizeClass}`}
			src={src}
			alt={alt}/>
	);
}