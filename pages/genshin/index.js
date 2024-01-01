import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import Nav2Col from '../../components/nav2Col';
import StickerButtonLink from '../../components/stickerbtnlink';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Home(){
	return (
		<FandomContext.Provider value='genshin'>
		<ThemeContext.Provider value='mond'>
			<Head>
				<title>Genshin Home</title>
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
			<h1 style={{textAlign:"center"}}>Genshin Impact</h1>
			<h3 style={{textAlign:"center"}}>The weeaboo game that's been holding my serotonin hostage for two years, yippee!!</h3>

			<p>
				If it was not already clear, yes, my favorite element is anemo.  
			</p>
			<p>
				Yes I love all the anemo characters.
			</p>
			<p>
				No I do not love them all equally LMAO.
			</p>

			<p>
				I'd put a picture here, but those take a lot of storage space so I'll put it in later.
			</p>

			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/"}
					btnTitle={"Genshin Blorbos"}
					imgSide={"lefter"}
					imgSize={"big"}
					imgSrc={"/images/genshin/emotes/venti_whoa.png"}
					imgAlt={"Venti, amazed"}>
						Blorbos
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/ships/"}
					btnTitle={"Genshin Ships"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/xiao_nom.png"}
					imgAlt={"Xiao eating almond tofu"}>
						Ship List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/wish/"}
					btnTitle={"My Primogem Savings"}
					imgSide={"left"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/lynette_clap.png"}
					imgAlt={"Lynette clapping"}>
						Wishlist
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/haterism/"}
					btnTitle={"Genshin Haterisms"}
					imgSide={"right"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/scara_meanblep.png"}
					imgAlt={"Wanderer pulling his eyelid down and sticking his tongue out in a taunt"}>
						Shit List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/vo_rank/"}
					btnTitle={"Genshin Voiceover Rankings"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/faruzan_hear.png"}
					imgAlt={""}>
						Voiceover Rankings
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/au/"}
					btnTitle={"Genshin AU Ideas"}
					imgSide={"righter"}
					imgSize={"small"}
					imgSrc={"/images/genshin/emotes/layla_page.png"}
					imgAlt={"Empty page held by Layla"}>
						AU Ideas
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/coop/"}
					btnTitle={"Genshin Coop Stories"}
					imgSide={"left"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/kazuha_nom.png"}
					imgAlt={"Kazuha sweatdropping as he eats Taiyaki"}>
						Coop Stories
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/takes/"}
					btnTitle={"Genshin Cold Takes"}
					imgSide={"right"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/heizou_smug.png"}
					imgAlt={"Heizou looking smug"}>
						Hot (Cold) Takes
				</StickerButtonLink>
			</Nav2Col>
		</div>
	);
}

