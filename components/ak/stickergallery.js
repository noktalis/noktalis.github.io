import format from "../../styles/modules/gallery.module.scss";
import { ThemeContext } from "../pageFormat/ThemeContext";


/**
 * Component for displaying an Arknights sticker pack, the pack's data stored in a map
 * @returns 
 */
export default function AKStickerGallery({pack}){
	let cnDate;

	if (pack) {
		console.log("The pack isn't empty!");
		console.log(pack);

		cnDate = dateStringReformat(pack["cn-date"]);
	} else {
		console.log("Pack name wasn't found.");
	}
	
	

	// cnDateStr = pack["cn-date"]

	
	
	return (
		<>
			<p>
				Released to CN: <a href='' target="_blank">{cnDate ? cnDate : ""}</a>
			</p>
		</>
	); // end return
} // end Component

/**
 * Converts a data string from YYYY-MM-DD (ISO) format to Mon DD YYYY format
 * @param {String} string - a date in ISO format
 * 
 * @returns date string in Mon DD YYYY format
 */
function dateStringReformat(string) {
	let date = new Date(string);
	let newStr = date.toDateString().substring(4);	// Removes day of week at start of string

	return newStr;
}
