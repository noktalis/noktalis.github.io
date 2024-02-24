import format from "../../styles/modules/gallery.module.scss";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../pageFormat/ThemeContext";
import {StickerMap} from '@/components/ak/stickermap';

/**
 * Component for displaying an Arknights sticker pack, the pack's data stored in a map
 * @returns 
 */
export default function AKStickerGallery({children, path}){
	const [packData, setPackData] = useState({});
	const theme = useContext(ThemeContext);
	let themeClass;

	switch (theme) {
		case 'mond':
		default:
			themeClass = format.mond;
	}

	let cnDate;
	let cnSrc;
	let enDate;
	let enSrc;

	/* Fetch the data for array */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const data = obj["stickers"];	// array of sticker data

			cnDate =  new Date(obj["cn-date"]);
			
			cnSrc = obj["cn-src"];
			enDate = new Date(obj["en-date"]);
			enSrc = obj["en-src"];



			console.log(obj);
			setPackData(obj);
		}
		fetchData()
		.catch(console.error);
	},[])
	
	return (
		<>
			<h2>{packData["fullname"]}</h2>
			<ReleaseDate
				region="CN"
				date={new Date(packData["cn-date"])}
				src={packData["cn-src"]}
			/>
			<ReleaseDate
				region="EN"
				date={new Date(packData["en-date"])}
				src={packData["en-src"]}
			/>
			{ packData["cn-src"] ? null : <WeiboCropped/>}

			{children}

			<div className={`${format.container} ${themeClass}`}>
				{packData["stickers"].map(({href,alt,key}) => <img src={href} alt={alt} key={key}/>)}
			</div>
		</>
	); // end return
} // end Component

function WeiboCropped(){
	return(
		<p>
			Sticker sheet and CN release date retrieved from Weibo by Xue.
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
	let dateStr = dateToString(date);

	if (src) {
		return (
			<p>
				{releaseStr} <a href={src} target="_blank">{dateStr}</a>
			</p>
		);
	} else if (date) {
		return (
			<p>
				{releaseStr} {dateStr}
			</p>
		);
	} else {
		return (
			<p>
				{releaseStr} Unknown
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