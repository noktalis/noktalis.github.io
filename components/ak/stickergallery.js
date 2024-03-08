import format from "../../styles/modules/gallery.module.scss";
import formatting from "../../styles/modules/akStickerGallery.module.scss";
import style from "../../styles/modules/main.module.scss";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../pageFormat/ThemeContext";

/**
 * Component for displaying an Arknights sticker pack, the pack's data stored in a map
 * @returns 
 */
export default function AKStickerGallery({packData}){
	// const [packData, setPackData] = useState({});
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

	// console.log(packData["pack"]);
	
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
					{ packData["cn-src"] ? null : <WeiboCropped/>}
					{ packData["tumblr-source1"] != null ? <TumblrArchive link1={packData["tumblr-source1"]} link2={packData["tumblr-source2"]}/> : null}

					{ packData["pack"] == "set1" ? <TumblrPart3 link3="https://arknights-archive.tumblr.com/post/726394540041371648/sticker-pack-1-33"/> : null}
					
					{ packData["en-edit"] ? <ENEdit/> : null}
				</div>
				
				<StickerSheet pack={packData}/>
			</div>
			

			<div className={`${formatting.gallery} ${themeClass}`}>
				{/* { packData["stickers"] ? packData["stickers"].map(({href,alt,key,name}) => <img src={href} alt={alt} key={key} title={name}/>) : "Stickers not found." } */}

				{ packData["stickers"] ? packData["stickers"].map((sticker) => <StickerEntry sticker={sticker}/>) : "Stickers not found." }
			</div>
		</>
	); // end return
} // end Component

function StickerEntry({sticker}){
	console.log(sticker);
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

function StickerSheet({pack}){
	let substring = pack["stickers"][0]["href"].substring(39);//39
	let list = substring.split("/");

	const HEAD = "https://noktalis.github.io/ak-stickers/";
	const URL = HEAD + list[0] + "/" + list[1] + "/sheet.png";

	console.log(URL)

	return(
		<img className={formatting.sheet} 
			src={URL}
			alt={"Sticker sheet for the sticker pack: " + pack["fullname"]}/>
	);
}

/**
 * A component for a recurring paragraph that explains that the sticker pack's sheet and CN release date was retrieved from Weibo by Xue
 * @returns 
 */
function WeiboCropped(){
	return(
		<p>
			Sticker sheet and CN release date retrieved from <a href="https://weibo.com/u/6441489862" target="_blank">
			Arknights Choearth Weibo blog</a> by <span className={style.xue}>
				<a href="https://sincerelyandyourstruly.neocities.org/" target="_blank">Xue</a></span>
		</p>
	);
}

function TumblrArchive({link1, link2}){
	return(
		<p>
			Stickers are from <a href="https://arknights-archive.tumblr.com/">@arknights-archive</a> on Tumblr: <a href={link1} target="_blank">Part 1</a> & <a href={link2} target="_blank">Part 2</a>
		</p>
	);
}

function TumblrPart3({link3}){
	/* For Set 1 */
	return(
		<p>
			Gifs from <a href={link3} target="_blank">Part 3</a>
		</p>
	);
}

function ENEdit(){
	return(
		<p>
			Some stickers are modified from the <a href="https://www.arknights.global/fankit" target="_blank">official EN version</a> by me
		</p>
	);
}

/**
 * 
 * @param {String} region 	- "CN" or "EN" to be inserted
 * @param {Date} date		- Date object of release date
 * @param {String} src		- String that contains the path/link 
 * @returns 
 */
function ReleaseDate({region, date, src}) {
	let releaseStr = "Released to " + region + ":"
	let dateStr;

	if (date == null){
		if (region == "CN")
			dateStr = "Unknown"
		else	// Never released to EN
			return
	} else {
		dateStr = dateToString(date);
	}

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

// from ISO string
function getYear(string) {
	return string.substring(0,4);
}