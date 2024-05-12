import { useContext, useState, useEffect } from "react";
import style from "../styles/modules/tierlist.module.scss";
import { ThemeContext } from "./pageFormat/ThemeContext";

/**
 * Creates a tier list based on data from a given JSON file
 * 
 * @param {String} path - absolute path to the JSON file holding tier list data
 * @returns 
 */
export default function TierList({path}){
	const theme = useContext(ThemeContext);
	let themeClass;

	switch (theme) {
		case "mond":	
		default:
			themeClass = style.mond;
	}

	/* Initial state before asyncronously fetching data */
	const [data, setData] = useState( 
		{	type:"vo",
			tiers:[{
				tier:"S",
				content:[{
					attributes: {
						character:"Placeholder",
						lang:"JP"
					}
				}]
			}]
		}
	);
	let type = data.type;

	/* Fetch the data */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const format = obj.format;

			/* Check that data is for a tier list */
			if(format == "tierlist"){
				type = obj.type;
				console.log(obj);
				setData(obj);	
			} else {
				throw new Error ("JSON data is invalid for tierlist format.");
			}
		}
		fetchData()
		.catch(console.error);
	},[])

	return (
		<div className={`${style.container} ${themeClass}`}>
			{data.tiers.map(({tier,content}) => <Tier type={type} letter={tier} list={content}/>)}
		</div>
	);
}

/**
 * A tier within the tierlist
 * 
 * @param {String} type 	- the type of items being ranked
 * @param {String} letter 	- the letter representing the tier
 * @param {Object[]} list	- a list of items ranked into the tier
 * @returns 
 */
export function Tier({type, letter, list}){
	// Select item Component type based on @param type
	const ItemTypes = {
		"vo": VO
	};
	let Item = ItemTypes[type];

	return(
		<div className={`${style.tierContainer}`}>
			<div className={`${style.tierLetter}`}>
				{letter}
			</div>
			<div className={`${style.tierContent}`}>
				{list.map(({attributes}) => <Item attributes={attributes}/>)}
			</div>
		</div>
	);
}

/**
 * An item to represent a Voice Over being ranked in the tierlist
 * 
 * @param {Object} attributes 	- holds the necessary data for the component 
 * @param {String} character	- the character of the voice over
 * @param {String} lang			- the language of the voice over
 * 
 * @returns 
 */
function VO({attributes}){
	// Extract data from attributes
	const char = attributes.character;
	const lang = attributes.lang;

	// Image source
	let src = char.split(" ").join("");
	src = `/images/genshin/icons/${src}.png`

	const alt = char + "'s Portrait";	// Image alternative text
	const title = char + " " + lang;	// Item title
	
	return(
		<div className={style.vo} title={title}>
			<img src={src} alt={alt}/>
			<div className={style.lang}>
				{lang}
			</div>
		</div>
	);
}

