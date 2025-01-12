import format from "../../styles/modules/gallery.module.scss";
import formatting from "../../styles/modules/akStickerGallery.module.scss";
import style from "../../styles/modules/main.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../pageFormat/ThemeContext";

/**
 * Component for displaying an Arknights sticker pack and associated information
 * @param {*} packData - data of a sticker pack
 * @returns 
 */
export default function AKStickerGallery({packData}){
	const theme = useContext(ThemeContext);
	let themeClass;

	switch (theme) {
		case 'ri':
			themeClass = format.ri;
			break;
		case 'mond':
		default:
			themeClass = format.mond;
	}
	
	return (
		<>
			<h2>{packData["fullname"]}</h2>

			<div className={formatting.container}>
				<div className={formatting.info}>
					<ReleaseDate
						region="CN"
						date={new Date(packData["cn-date"])}
						src={packData["cn-src"]}
					/>
					<ReleaseDate
						region="EN"
						date={packData["en-date"] != null ? new Date(packData["en-date"]) : null}
						src={packData["en-src"]}
					/>
					{/* { packData["cn-src"] ? null : <Weibo/>} */}
					{ packData["tumblr-source1"] != null ? <TumblrArchive link1={packData["tumblr-source1"]} link2={packData["tumblr-source2"]}/> : <OtherSrc link={packData["src"]} text={packData["src-text"]} />}

					{ packData["pack"] == "set1" ? <TumblrPart3 link3="https://arknights-archive.tumblr.com/post/726394540041371648/sticker-pack-1-33"/> : null}
					
					{ packData["en-edit"] ? <ENEdit/> : null}
				</div>
				
				<StickerSheet pack={packData}/>
			</div>
			

			<div className={`${formatting.gallery} ${themeClass}`}>
				{ packData["stickers"] ? packData["stickers"].map((sticker) => <StickerEntry sticker={sticker}/>) : "Stickers not found." }
			</div>
		</>
	); // end return
} // end Component

/**
 * Component for a single sticker within AKStickerGallery
 * @param {*} sticker - data of a sticker to be displayed 
 * @returns 
 */
function StickerEntry({sticker}){
	// console.log(sticker);
	return(
		<div className={formatting.entry}>
			<img
				src={sticker["href"]}
				alt={sticker["alt"]}
				key={sticker["key"]}
				title={sticker["name"]}/>
			{ sticker["caption"] ? <div className={formatting.caption}>{sticker["caption"]}</div> : null}
		</div>
	);
}

/**
 * Componet for the image of a sticker pack's sticker sheet
 * @param {*} pack - the sticker pack associated with the sheet
 * @returns 
 */
function StickerSheet({pack}){
	// Concatenate image source url
	let substring = pack["stickers"][0]["href"].substring(39);//39
	let list = substring.split("/");

	const HEAD = "https://noktalis.github.io/ak-stickers/";
	const URL = HEAD + list[0] + "/" + list[1] + "/sheet.png";

	// console.log(URL)

	return(
		<img className={formatting.sheet} 
			src={URL}
			alt={"Sticker sheet for the sticker pack: " + pack["fullname"]}/>
	);
}

/**
 * Component for a recurring paragraph that explains that the sticker pack's sheet and CN release date was retrieved from Weibo by Xue
 * @returns 
 */
function Weibo(){
	return(
		<p>
			Sticker sheet and CN release date retrieved from <a href="https://weibo.com/u/6441489862" target="_blank">
			Arknights Choearth Weibo blog</a> by <span className={style.xue}>
				<a href="https://sincerelyandyourstruly.neocities.org/" target="_blank">Xue</a></span>
		</p>
	);
}

/**
 * Component for a paragraph with links to the (arknights-archive) Tumblr source of stickers
 * @param {String} link1	- link to part 1 
 * @param {String} link2	- link to part 2
 * @returns 
 */
function TumblrArchive({link1, link2}){
	return(
		<p>
			Stickers are from <a href="https://arknights-archive.tumblr.com/" target="_blank">@arknights-archive</a> on Tumblr: <a href={link1} target="_blank">Part 1</a> & <a href={link2} target="_blank">Part 2</a>
		</p>
	);
}

/**
 * Component for special cases where (arknights-archive) Tumblr source has a 3rd part
 * @param {String} link3 
 * @returns 
 */
function TumblrPart3({link3}){
	/* For Set 1 */
	return(
		<p>
			Gifs from <a href={link3} target="_blank">Part 3</a>
		</p>
	);
}

/**
 * Generic component for link to sticker source
 * @param {*} param0 
 * @returns 
 */
function OtherSrc({link,text}){
	return(
		<p>
			Stickers are from <a href={link} target="_blank">{text}</a>
		</p>
	);
}

/**
 * Component for a paragraph indicating that some stickers of a pack were edited by me to recreate the English version
 * @returns 
 */
function ENEdit(){
	return(
		<p>
			Some stickers are modified from the <a href="https://www.arknights.global/fankit" target="_blank">official EN version</a> by me
		</p>
	);
}

/**
 * Component for a paragraph element detailing a sticker pack's release date in a region
 * @param {String} region 	- "CN" or "EN" to be inserted
 * @param {Date} date		- Date object of release date
 * @param {String} src		- String that contains the path/link 
 * @returns 
 */
function ReleaseDate({region, date, src}) {
	let releaseStr = "Released to " + region + ":"
	let dateStr;

	// Handle null date first
	if (date == null){
		dateStr = "Unknown"
		if (src == null && region == "EN")
			return	// Never released to EN
	} else {
		dateStr = dateToString(date);
	}

	// Implement link into <p>
	if (src) {
		return (
			<p>
				{releaseStr} <a href={src} target="_blank">{dateStr}</a>
			</p>
		);
	} else {
		return (
			<p>
				{releaseStr} {dateStr}
			</p>
		);
	}
}

/**
 * Converts a Date object to DD Mon YYYY string format
 * @param {Date} date - a Date object
 * 
 * @returns date string in DD Mon YYYY format
 */
function dateToString(date) {
	return date.toUTCString().substring(5,16);
}
