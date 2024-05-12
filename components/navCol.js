import format from "../styles/modules/navmenu.module.scss";

/**
 * Arranges elements of a menu into a single column
 * 	Only intended for use in the Main element
 * 
 * @param {*} prop
 * 		children - children elements
 * @returns 
 * 
 * Reminder: Theme is handled within the children via ThemeContext
 */
export default function NavCol({children}){
	return(
		<div className={format.oneCol}>
			{children}
		</div>
	);
}