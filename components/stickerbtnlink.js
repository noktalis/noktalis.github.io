import Link from "next/link";
import StickerButton from "./stickerbtn";

/**A button that functions as a link when clicked and has a sticker on the side
 * 
 * @param {*} prop 	- holds data needed for element attributes
 * 
 * @param href		- url the link should redirect to
 * @param btnTitle	- button title
 * @param imgSide	- which side of the button the Sticker should be
 * @param imgSrc	- the source the Sticker should get its image from
 * @param imgSize	- determines how the Sticker's size should be scaled
 * @param imgAlt	- alternative text for the Sticker
 * @param children	- elements that should be within the button alongside the Sticker
 * 
 * @returns 
 */
export default function StickerButtonLink({href, btnTitle, imgSide, imgSrc, imgAlt, imgSize, children}){	
	
	return (
		<Link href={href}>
			<StickerButton
				btnTitle={btnTitle}
				imgSide={imgSide}
				imgSize={imgSize}
				imgSrc={imgSrc}
				imgAlt={imgAlt}>
					{children}
			</StickerButton>
		</Link>
	);
}
