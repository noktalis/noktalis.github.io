import format from "../styles/modules/navmenu.module.scss";

/**Arranges elements of a menu into two columns
 * 	Only intended for use in the Main element
 * 
 * @param {*} prop
 * 		children - children elements that make up a menu
 * @returns 
 * 
 * Reminder: Theme is handled within the children, by the children
 */
export default function Nav2Col({children}){
	return(
		<div className={format.twoCol}>
			{children}
		</div>
	);
}