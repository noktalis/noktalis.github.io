

export default class StickerMapHelper {

	// constructor() {
	// 	// StickerMap.#addAllChen()
	// }


	static #addSticker(name, href, alt) {
		this.stickers.set(name, [href, alt]);
	}

	// static stickers = new Map([
	// 	// ["chen_smacked",[
	// 	// 	"/images/ak/stickers/all-chen/chen_smacked.png",
	// 	// 	"Chibi Ch'en doing a spit-take as Swire, in the form of a cat, smacks her head"
	// 	// ]],
	// 	["chen_scold",[
	// 		"/images/ak/stickers/all-chen/chen_scold.png",
	// 		"Ch'en pointing an accusing finger as a black bar censors her eyes. She's scolding someone in Chinese to not 'talk back to your boss.'"
	// 	]],
	// 	["chen_scold_en",[
	// 		"/images/ak/stickers/all-chen/chen_scold_en.png",
	// 		"Ch'en pointing an accusing finger as a black bar censors her eyes. She's scolding someone in Englishm \"Don't talk back to your boss!\""
	// 	]],
	// 	["chen_banish",[
	// 		"/images/ak/stickers/all-chen/chen_banish.png",
	// 		"Ch'en's leg is seen sticking out on the side, indicating that she had just kicked out Swire and Hoshiguma, both in the form of cats."
	// 	]],
	// 	["chen_annoy",[
	// 		"/images/ak/stickers/all-chen/chen_annoy.png",
	// 		"Ch'en is annoyed by Hoshiguma (in cat form) smacking her head while trying to do paperwork."
	// 	]],
	// 	["chen_astonish",[
	// 		"/images/ak/stickers/all-chen/chen_astonish.png",
	// 		"Ch'en is taken aback by something, her hand rising halfway in a gesture of shock."
	// 	]]
	// ]);

	

	static #addAllChen() {
		this.#addSticker("chen_smacked","/images/ak/stickers/all-chen/chen_smacked.png","Chibi Ch'en doing a spit-take as Swire, in the form of a cat, smacks her head")
	}

}
