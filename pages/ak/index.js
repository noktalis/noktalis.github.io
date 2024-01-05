import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import Nav2Col from '../../components/nav2Col';
import StickerButtonLink from '../../components/stickerbtnlink';
import style from '../../styles/modules/main.module.scss';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Home(){
	return (
		<FandomContext.Provider value='ak'>
		<ThemeContext.Provider value='ri'>
			<Head>
				<title>Home | Arknights</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout><Content/></Layout>
		</ThemeContext.Provider>
		</FandomContext.Provider>
		
	); // end return
} // end Component

/**
 * Contents uniquely defined on each page
 * @returns 
 */
function Content() {
	return (
		<div>
			<h1 style={{textAlign:"center"}}>Arknights</h1>
			<h3 style={{textAlign:"center"}}>The gacha game I've been married to the longest and also has such good skins</h3>

			<p>Arknights used to be my main gacha! But then I got burnt out from hyperfixation and started taking it casually heheh...</p>

			<p>It's a lot less time-intensive than Genshin to play, since most days I just let it run on my phone while I do other things, so I call it my "side hoe" gacha. I'm still pretty dedicated to logging in everyday though! I love my Genshin blorbos, but in terms of gacha games as a whole I'd always choose Arknights over Genshin for a variety of reasons... most of which are because Hypergryph is a lot more generous to F2P players.</p>

			<Nav2Col>
				<StickerButtonLink
					href={"/ak/friend_id/"}
					btnTitle={"Friend ID"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"/images/ak/stickers/saileach_pat.png"}
					imgAlt={"Saileach patting a rainbow dragon on the head"}>
						Friend ID
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/skins/"}
					btnTitle={"Arknights Skins Tier List"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"/images/ak/stickers/elysium_think.png"}
					imgAlt={"Elysium pondering mischief"}>
						Skins Tier List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/wishlist/"}
					btnTitle={"Operator Wishlist"}
					imgSide={"left"}
					imgSize={"big"}
					imgSrc={"/images/ak/stickers/liskarm_tired.png"}
					imgAlt={"Liskarm having none of Franka's mischief"}>
						Wishlist
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/ships/"}
					btnTitle={"Arknights Ships"}
					imgSide={"right"}
					imgSize={"big"}
					imgSrc={"/images/ak/stickers/franka_heart.png"}
					imgAlt={"Franka winking at Liskarm with finger guns"}>
						Ships
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/waifu/"}
					btnTitle={"Arknights Waifus"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"/images/ak/stickers/phantom_boop.png"}
					imgAlt={"Miss Christine bopping Phantom on the eyes"}>
						Waifus
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/vigna/"}
					btnTitle={"Xue's Vigna Shrine"}
					imgSide={"righter"}
					imgSize={"big"}
					imgSrc={"/images/ak/stickers/vigna_nom.png"}
					imgAlt={"Vigna going nom"}>
						<span className={style.xue}>Xue's</span> Vigna Shrine
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/story/"}
					btnTitle={"Story Highlights"}
					imgSide={"left"}
					imgSize={""}
					imgSrc={"/images/ak/stickers/zima_judge.png"}
					imgAlt={"Zima inspecting a Clue 4"}>
						Story Highlights
				</StickerButtonLink>
			</Nav2Col>
		</div>
	);
}

