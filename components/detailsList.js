import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";
import style from "../styles/modules/detailsList.module.scss";

/**
 * A list of details elements
 * 		Data can be automatically loaded from a JSON or manually determined with
 * 		as the children attribute in the prop
 * 
 * @param {String} path 	- path to the JSON containing data
 * @param {String} arrayKey - name/key of array containing relevant data in JSON
 * @param {*} children 		- child elements (manually added)
 * @returns 
 */
export default function DetailsList({path, arrayKey, children}) {
	const [list, setList] = useState([{name:"",text:""}]);
	const [jsonStatus, setJSONStatus] = useState(false);
	const theme = useContext(ThemeContext);
	let themeClass;

	switch(theme){
		case "ri":
			themeClass = style.ri;
			break;
		case "lyt":
			themeClass = style.lyt;
			break;
		case "mond":
		default:
			themeClass = style.mond;
	}

	// If given path, fetch data
	if (path){
		useEffect(() => {
			const fetchData = async() => {
				/* Fetch request */
				const response = await fetch(path);
				const obj = await response.json();
				const data = obj[arrayKey];	// array of data
				setJSONStatus(obj.mode);	// set type of list

				console.log(obj);
				setList(data);
			}
			fetchData()
			.catch(console.error);
		},[])
	}
		
	// TODO: other types aside from CharDetailsList
	return (
		<div className={`${style.container} ${themeClass}`}>
			{/* If loading from json, use data from json */}
			{jsonStatus == "char" ? <CharDetailsList jsonStatus={jsonStatus} list={list}/> : ""}

			{/* No matter what, load manually added entries */}
			{children}
		</div>
	);
}

/**
 * A version of the list mapping for characters
 * 
 * @param {*} list	- List to load character data from
 */
function CharDetailsList({list}){
	return(
		<>{list.map(({name, text, img}) => 
				<DetailsListEntry
					title={name}
					summaryText={name}
					details={text}
					summaryImg={img}/>)}
			{children}
		</>
	);
}

/**
 * A details element meant to be an entry in a DetailsList
 * 
 * @param {*} title - title of details container when mouse hovers over
 * 
 * @param {*} summary 			- manually determined content in summary
 * @param {*} summaryText 		- header text in summary
 * @param {*} summaryImg 		- source path of image in summary
 * @param {*} summaryImgTitle 	- title for image
 * 
 * @param {*} details 
 */
export function DetailsListEntry({
		title,
		summary, summaryText, summaryImg, summaryImgTitle,
		details}){
	return (
		<details title={title}>
			<summary>
				<div className={style.summaryContainer}>
					{summaryText ? <h2>{summaryText}</h2> : ""}
					{summaryImg ? <img
						src={summaryImg}
						title={summaryImgTitle}/>
					: ""}
					{summary}
				</div>
			</summary>
			{/* dropdown divide */}
			<hr/>
			<div className={style.textContainer}>
				{details}
			</div>
		</details>
	);
}