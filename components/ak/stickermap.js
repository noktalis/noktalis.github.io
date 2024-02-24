

export default class StickerInfo {

	#stickerinfo = new Map();

	constructor() {
		this.#fillMap();
	}

	/**Returns the information of a single, specified sticker by name
	 * 
	 * @param {*} name - name of the sticker
	 * @returns - href and alt text of the sticker within an array
	 */
	get(name) {
		return this.#stickerinfo[name];
	}

	/**Fills the stickermap with information from all sticker packs
	 * 
	 */
	#fillMap() {
		this.#addAllChen();
	}

	/**Adds a sticker to the sticker map
	 * 
	 * @param {*} name - name of the sticker
	 * @param {*} href - link/path to the sticker
	 * @param {*} alt  - alternate text of the sticker
	 */
	#addSticker(name, href, alt) {
		this.stickers.set(name, [href, alt]);
	}

	#addAllChen() {
		this.#addSticker("chen_smacked",
			"/images/ak/stickers/all-chen/chen_smacked.png",
			"Chibi Ch'en doing a spit-take as Swire, in the form of a cat, smacks her head.")
		this.#addSticker("chen_scold",
			"/images/ak/stickers/all-chen/chen_scold.png",
			"Ch'en pointing an accusing finger as a black bar censors her eyes. She's scolding someone in Chinese to not 'talk back to your boss.'");
		this.#addSticker("chen_scold_en",
			"/images/ak/stickers/all-chen/chen_scold_en.png",
			"Ch'en pointing an accusing finger as a black bar censors her eyes. She's scolding someone in English \"Don't talk back to your boss!\"");
		this.#addSticker("chen_banish",
			"/images/ak/stickers/all-chen/chen_banish.png",
			"Ch'en's leg is seen sticking out from the side of the frame, indicating that she had just kicked out Swire and Hoshiguma, both in the form of cats.");
		this.#addSticker("chen_annoy",
			"/images/ak/stickers/all-chen/chen_annoy.png",
			"Ch'en is annoyed by Hoshiguma (in cat form) smacking her head while trying to do paperwork.");
		this.#addSticker("chen_astonish",
			"/images/ak/stickers/all-chen/chen_astonish.png",
			"Ch'en is taken aback by something, her hand rising halfway in a gesture of shock.");
		this.#addSticker("chen_punish",
			"/images/ak/stickers/all-chen/chen_punish.png",
			"Ch'en angrily holding up Mephisto by the hair. Mephisto smiles, looking rather unbothered.");
		this.#addSticker("chen_shades",
			"/images/ak/stickers/all-chen/chen_shades.png",
			"Tourist C (Ch'en's vacation disguise) happily holding shades.");
		this.#addSticker("chen_noproblem",
			"/images/ak/stickers/all-chen/chen_noproblem.png",
			"Ch'en saluting as she says 'No problem' in Chinese.");
		this.#addSticker("chen_noproblem_en",
			"/images/ak/stickers/all-chen/chen_noproblem_en.png",
			"Ch'en saluting as she says 'No problem' in romanized Cantonese.");
		this.#addSticker("chen_wrath",
			"/images/ak/stickers/all-chen/chen_wrath.png",
			"Ch'en, face darkened with wrath, drags forward a panicking Swire and Hoshiguma.");
		this.#addSticker("chen_huff",
			"/images/ak/stickers/all-chen/chen_huff.png",
			"Ch'en huffing disapprovingly.");
		this.#addSticker("chen_delicious",
			"/images/ak/stickers/all-chen/chen_delicious.png",
			"Ch'en drooling as she zones out and eats delicious food.");
		this.#addSticker("chen_cheer",
			"/images/ak/stickers/all-chen/chen_cheer.png",
			"Ch'en happily holding up a canned drink.");
		this.#addSticker("chen_rush",
			"/images/ak/stickers/all-chen/chen_rush.png",
			"Ch'en shouting at someone to hurry up in Chinese.");
		this.#addSticker("chen_rush_en",
			"/images/ak/stickers/all-chen/chen_rush_en.png",
			"Ch'en shouting at someone to hurry up in English.");
		this.#addSticker("chen_soup",
			"/images/ak/stickers/all-chen/chen_soup.png",
			"Ch'en holding up a bowl of steaming soup.");
		this.#addSticker("chen_nom",
			"/images/ak/stickers/all-chen/chen_nom.png",
			"Ch'en happily stuffing her cheeks with a bun.");
		this.#addSticker("chen_angry",
			"/images/ak/stickers/all-chen/chen_angry.png",
			"Ch'en, face darkened with anger, about to snap.");
	}


	

}
