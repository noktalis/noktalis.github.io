import LinkButton from "../linkbtn";
import sidenav from "../../styles/modules/sidenav.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FandomContext } from "./FandomContext";
import navLinks from "/public/json/nav_links.json";

/**
 * Side navigation menu
 * 		Content changes based on the fandom
 * @returns 
 */
export default function SideNav({extra_menu_src}){
	const theme = useContext(ThemeContext);
	const fandomContext = useContext(FandomContext);

	let fandom;
	let mainTitle;
	let themeClass;
	let link;

	let bottom_extra;

	/* Figure out which theme to appear with */
	switch(theme){
		case "ri":
			themeClass = sidenav.ri;
			break;
		case "lyt":
			themeClass = sidenav.lyt;
			break;
		case "fra":
			themeClass = sidenav.fra;
			break;
		case "express":
			themeClass = sidenav.ae;
			break;
		case "mond":
		default:
			themeClass = sidenav.mond;
			bottom_extra = <img className={sidenav.bottom_extra} src="/images/genshin/windwheel_asters.svg" title="Windwheels Asters from Xue :)"></img>;
	}
	
	/* Figure out which header link to use at top of side nav */
	switch(fandomContext){
		case "ak":
			fandom = "Arknights";
			mainTitle = "Arknights Home";
			link = "/ak/";
			break;
		case "genshin":
			fandom = "Genshin";
			mainTitle = "Genshin Impact Home";
			link = "/genshin/";
			break;
		case "hsr":
			fandom = "Star\u00A0Rail";
			mainTitle = "Star Rail Home";
			link = "/star_rail/";
			break;
		case "misc":
			fandom = "Misc.";
			mainTitle = "Miscellaneous";
			link = "/misc/";
			break;
		default:
			fandom = "Navigation";
			mainTitle = "Home";
			link = "/";
	}

	return(
		<div className={`${sidenav.nav} ${themeClass}`}>
			<div className={`${sidenav.container} ${sidenav.top}`}>
				{/* Changes based on fandom */}
				<a href={link} title={mainTitle}> 
					<h1>{fandom}</h1>
				</a>
			</div>

			<div className={`${sidenav.container} ${sidenav.bottom}`}>
				<Divider/>

				{/* Changes based on fandom */}
				<Menu extra_menu_src={extra_menu_src}/>

				{themeClass == sidenav.mond ? bottom_extra : ""}
			</div>
		</div>
	);
}

// TODO: investigate conditional render of Divider

/**
 * Divider between the top and bottom containers of the navigation menu
 * @returns 
 */
function Divider(){
	const theme = useContext(ThemeContext);
	let path;

	switch(theme) {
		case "lyt":
			path = "/images/genshin/lynette_teacup_segment.png";
			break;
		default:
			path = ""; // maybe null?
	}

	return(
		<div className={sidenav.divider}>
			<img src={path}></img>
		</div>
	);
}

/**Navigation buttons in the bottom container of the navigation menu
 * 	Changes the set of buttons based on fandom
 * 
 * @param {String} extra_menu_src - the key to the array of extra menu links
 * 
 * @returns 
 */
function Menu({extra_menu_src}){
	let fandom = useContext(FandomContext);
	let mainLinks;
	let extraLinks;
	
	// Base main links on current page's fandom
	switch(fandom){
		case "genshin":
			mainLinks = navLinks["gi"]
			break;
		case "ak":
			mainLinks = navLinks["ak"]
			break;
		default:
			mainLinks = navLinks["default"];
	}

	// Extra menu links
	if (extra_menu_src) {
		extraLinks = navLinks[extra_menu_src];
	}

	return (
		<div className={sidenav.menu}>
			{/* Conditionally render extra menu buttons */}
			{extraLinks ? extraLinks.map(({title, text, href, key}) => <LinkButton path={href} title={title} key={key}>{text}</LinkButton>) : ""}

			{extraLinks ? <hr/> : ""}

			{/* Map each button's data to a LinkButton element */}
			{mainLinks.map(({title, text, href, key}) => <LinkButton path={href} title={title} key={key}>{text}</LinkButton>)}
		</div>
	);
}

/* References:
	https://www.reddit.com/r/reactjs/comments/pknouj/comment/hc4wv8m/?utm_source=share&utm_medium=web2x&context=3
	https://legacy.reactjs.org/docs/conditional-rendering.html
*/