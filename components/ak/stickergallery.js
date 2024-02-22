import format from "../../styles/modules/gallery.module.scss";
import {StickerMapHelper} from '@/components/ak/stickermap';

/**
 * Component for displaying an Arknights sticker pack, the pack's data stored in a map
 * @returns 
 */
export default function AKStickerGallery({children, ...data}){
	let pack = data['pack'];
	let stickermap = new Map();	// TODO: use map to fetch sticker data
	
	console.log(stickermap);
	console.log()

	let cnDate;
	let enDate;

	try {
		cnDate = dateStringReformat(pack["cn-date"]);
		enDate = dateStringReformat(pack["en-date"]);
		// console.log(cnDate);
		console.log("Dates set");
	} catch (error) {
		console.log("Could not set dates");
	}
	
	return (
		<>
		{ pack ? 	
			<>
				<h2>{pack["name"]}</h2>
				<CNDate src={pack["cn-src"]} dateStr={cnDate}/>
				<ENDate src={pack["en-src"]} dateStr={enDate}/>
				{children}
			</>
			: <></>
		}
		</>
	); // end return
} // end Component

function ENDate({dateStr, src}) {
	if (src) {
		return (
			<p>
				Released to EN: <a href={src} target="_blank">{dateStr}</a>
			</p>
		);
	} else if (dateStr) {
		return (
			<p>
				Released to EN: {dateStr}
			</p>
		);
	} else {
		return (
			<p>
				Released to EN: Unknown
			</p>
		);
	}
}

function CNDate({dateStr, src}) {
	if (src) {
		return (
			<p>
				Released to CN: <a href={src} target="_blank">{dateStr}</a>
			</p>
		);
	} else if (dateStr) {
		return (
			<p>
				Released to CN: {dateStr}
			</p>
		);
	} else {
		return (
			<p>
				Released to CN: Unknown
			</p>
		);
	}
}

/**
 * Converts a data string from YYYY-MM-DD (ISO) format to DD Mon YYYY format
 * @param {String} string - a date in ISO format
 * 
 * @returns date string in DD Mon YYYY format
 */
function dateStringReformat(string) {
	let date = new Date(string);
	let newStr = date.toUTCString().substring(5,16);

	return newStr;
}

const stickermap = new Map();

function getStickerMap() {
	let map = new Map([
		["chen_smacked",[
			"/images/ak/stickers/all-chen/chen_smacked.png",
			"Chibi Ch'en doing a spit-take as Swire, in the form of a cat, smacks her head"
		]],
		["chen_scold",[
			"/images/ak/stickers/all-chen/chen_scold.png",
			"Ch'en pointing an accusing finger as a black bar censors her eyes. She's scolding someone in Chinese to not 'talk back to your boss.'"
		]],
		["chen_scold_en",[
			"/images/ak/stickers/all-chen/chen_scold_en.png",
			"Ch'en pointing an accusing finger as a black bar censors her eyes. She's scolding someone in Englishm \"Don't talk back to your boss!\""
		]],
		["chen_banish",[
			"/images/ak/stickers/all-chen/chen_banish.png",
			"Ch'en's leg is seen sticking out on the side, indicating that she had just kicked out Swire and Hoshiguma, both in the form of cats."
		]],
		["chen_annoy",[
			"/images/ak/stickers/all-chen/chen_annoy.png",
			"Ch'en is annoyed by Hoshiguma (in cat form) smacking her head while trying to do paperwork."
		]],
		["chen_astonish",[
			"/images/ak/stickers/all-chen/chen_astonish.png",
			"Ch'en is taken aback by something, her hand rising halfway in a gesture of shock."
		]]
	]);
}