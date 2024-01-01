import Link from "next/link";

/**
 * A button that acts like a link. Redirect user triggered when clicked.
 * @param {*} prop - Object that contains necessary data
 * 		path 	- Path for where user should be redirected to
 * 		title 	- Title attribute of button, appears when mouse hovers over button
 * 		text	- Text that appears on the button
 * @returns 
 */
export default function LinkButton({path, title, children}){
	return(
		<Link href={path}>
			<button role="link" title={title}>
				{children}
			</button>
		</Link>
	);
}