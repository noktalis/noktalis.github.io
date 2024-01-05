import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";
import style from "../styles/modules/detailsList.module.scss";

/**A list of details elements
 * 		Data can be automatically loaded from a JSON or manually determined with
 * 		as the children attribute in the prop
 * 
 * @param {*} param0 
 * @returns 
 */
export default function DetailsList({path, arrayKey, children}) {
	const [list, setList] = useState([{name:"",text:""}]);
	const [jsonStatus, setJSONStatus] = useState(false);
	const theme = useContext(ThemeContext);
	let themeClass;

	/* Figure out which theme to appear with */
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

	/* Fetch the data */
	if (path){
		useEffect(() => {
			const fetchData = async() => {
				/* Fetch request */
				const response = await fetch(path);
				const obj = await response.json();
				const data = obj[arrayKey];	// array of data
				setJSONStatus(obj.mode);

				console.log(obj);
				setList(data);
			}
			fetchData()
			.catch(console.error);
		},[])
	}
		

	return (
		<div className={`${style.container} ${themeClass}`}>
			{/* If loading from json, use data from json */}
			{jsonStatus == "char" ? <CharDetailsList jsonStatus={jsonStatus} list={list}/> : ""}

			{/* No matter what, load manually added entries */}
			{children}
		</div>
	);
}

/**A version of the list mapping for characters
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
		</>
	);
}

/**A details element meant to be an entry in a details list
 * 
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
			<hr/>
			<div className={style.textContainer}>
				{details}
			</div>
		</details>
	);
}