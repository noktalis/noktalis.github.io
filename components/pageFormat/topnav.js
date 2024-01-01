import Image from 'next/image';
import LinkButton from '../linkbtn';
import topnav from "../../styles/modules/topnav.module.scss";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FandomContext } from './FandomContext';

/**Top navigation bar of a page
 * Includes Indicator component and 6 navigation buttons between fandom pages
 * @returns  */
export default function TopNav() {
	const theme = useContext(ThemeContext);
	let themeClass;

	switch(theme){
		case "lyt":
			themeClass = topnav.lyt;
			break;
		case "ri":
			themeClass = topnav.ri;
			break;
		case "fra":
			themeClass = topnav.fra;
			break;
		case "mond":
		default:
			themeClass = topnav.mond;
	}

	return (
		<div className={`${topnav.nav} ${themeClass}`}
			id='nav'>
			
			<Indicator></Indicator>
			<div className={topnav.buttons}
				id='navBtns'>

				<LinkButton
					path={"/"}
					title={"Home"}>
						Home
				</LinkButton>

				<LinkButton
					path={"/ak/"}
					title={"Arknights"}>
						Arknights
				</LinkButton>

				<LinkButton
					path={"/genshin/"}
					title={"Genshin Impact"}>
						Genshin
				</LinkButton>

				<LinkButton
					path={"/star_rail/"}
					title={"Honkai: Star Rail"}>
						Star&nbsp;Rail
				</LinkButton>
				
				<LinkButton
					path={"/webring/"}
					title={"Webring"}>
						Webring
				</LinkButton>

				<LinkButton
					path={"/misc/"}
					title={"Miscellaneous"}>
						Misc.
				</LinkButton>
			</div>
		</div>
	);
}

/**Image in the left corner of the top navigation bar INDICATING theme of the page
 * @returns  */
function Indicator() {
	const fandom = useContext(FandomContext);

	let path = "/images/";
	let altText;

	/* Determines which image to use as indicator */
	switch(fandom){
		case "ak":
			path += "ak/stickers/bagpipe_potatoes.png";
			altText += "Bagpipe with potatoes";
			break;
		case "genshin":
			path += "genshin/emotes/lynette_sip.png";
			altText += "Lynette sipping tea";
			break;
		case "hsr":
			path = "https://64.media.tumblr.com/c6084b85a6c9949935cc323f4bab7642/c5a5a3383c4c5c89-73/s540x810/04c17256455d5697f857132543afb1180d195033.png";
			altText += "Yanqing being smug";
			break;
		default:
			path += "genshin/anemo.svg";
			altText = "Symbol of Anemo from Genshin Impact"
	}

	/* Toggles the presence of the buttons in the top navigation bar */
	function toggleMenu() {
		let nav = document.getElementById("nav");
		let menu = document.getElementById("navBtns");

		// Hide menu
		if (menu.style.display == 'grid') {
			menu.style.display = 'none';
			nav.style.gap = "0"; //removes funny gap under indicator
		} 
		//Show menu
		else {
			menu.style.display = 'grid';
			nav.style.gap = "1vh"; //returns room between indicator and buttons
		}
	}

	return (
		<img
			className={topnav.indicator}
			id='indicator'

			src={path}
			alt={altText}
			title="Toggle Menu"

			onClick={toggleMenu}
		/>
	);
}
