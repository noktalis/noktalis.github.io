import Head from 'next/head';
import Layout from '../../../components/pageFormat/layout';
import { ThemeContext } from '../../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../../components/pageFormat/FandomContext';
import Nav2Col from '../../../components/nav2Col';
import StickerButtonLink from '../../../components/stickerbtnlink';
import Dialogue from '../../../components/dialogue';
import { Bubble } from '../../../components/dialogue';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value='genshin'>
		<ThemeContext.Provider value='mond'>
			<Head>
				<title>Blorbos | Genshin</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout extra_menu_src="gi-blorbos"><Content/></Layout>
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
			{/* Dialogue about how I explain blorbos */}
			<Dialogue>
				<Bubble speaker="xue">
					i like that you don't even elaborate on Why they are blorbos
				</Bubble>

				<Bubble side="right" speaker="nat">
					they just are.
				</Bubble>
				<Bubble side="right" speaker="nat">
					i did not choose for them to move into my head rent free, they just did.
				</Bubble>

				<Bubble speaker="xue">
					me archiving my ten million billion essays n thoughts to my neocities vs. you
				</Bubble>
				<Bubble speaker="xue">
					"these are my blorbos"
				</Bubble>

				<Bubble side="right" speaker="nat">
					no thoughts, head empty, only blorbos
				</Bubble>

				<Bubble speaker="xue">
					"i will not elaborate on why i like them"
				</Bubble>
			</Dialogue>
			<hr/>

			{/* Current Blorbos */}
			<h1 style={{textAlign:"center"}}>Current Blorbos</h1>
			<h3 style={{textAlign:"center"}}>They live rent free in my head!</h3>
			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/venti"}
					btnTitle={"Venti"}
					imgSide={"left"}
					imgSize={"big"}
					imgSrc={"/images/genshin/emotes/venti_yay.png"}
					imgAlt={"Venti throwing flowers"}>
						Venti
				</StickerButtonLink>
				<span/>
				<StickerButtonLink
					href={"/genshin/blorbos/lyney"}
					btnTitle={"Lyney"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/lyney_nervous.png"}
					imgAlt={"Lyney with stage fright"}>
						Lyney
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/lynette"}
					btnTitle={"Lynette"}
					imgSide={"righter"}
					imgSize={"small"}
					imgSrc={"/images/genshin/emotes/lynette_alert.png"}
					imgAlt={"Lynette alert"}>
						Lynette
				</StickerButtonLink>
			</Nav2Col>
			<hr/>


			{/* Retired Blorbos */}
			<h1 style={{textAlign:"center"}}>Retired Blorbos</h1>
			<p>
				I don't know what to say, they packed up and escaped to move into an apartment together.
			</p>
			<p>
				(They were probably sick of me torturing them in AUs)
			</p>
			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/kazuha"}
					btnTitle={"Kazuha"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/kazuha_vibin.png"}
					imgAlt={"Kazuha chilling on a roof"}>
						Kazuha
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/heizou"}
					btnTitle={"Heizou"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/heizou_sigh.png"}
					imgAlt={"Heizou sighing in relief"}>
						Heizou
				</StickerButtonLink>
			</Nav2Col>
			<hr/>


			{/* Honorable Mentions */}
			<h1 style={{textAlign:"center"}}>Honorable Mentions</h1>
			<p>
				They never quite reach Blorbo Status&trade; but I did have some Thoughts about them for a while! 
			</p>
			<p>
				Except Wanderer, who I would still hate if he were real, where most of the thoughts were crack and somewhere along the lines of "Damn, I hope Nahida gives him therapy" and "Hell yeah he's getting Therapy&trade;" AND THEN SHE SENT HIM TO SCHOOL UNDER THE NAME HATTIE AND I LAUGHED MY ASS OFF LMAOOOO
			</p>

			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/furina"}
					btnTitle={"Furina"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/furina_drama.png"}
					imgAlt={"Furina being dramatic"}>
						Furina
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/wrio"}
					btnTitle={"Uncle Wriothesley"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/wrio_curious.png"}
					imgAlt={"Worcestershire going 'oh?'"}>
						Whoreslayer
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/wanderer"}
					btnTitle={"Hattie"}
					imgSide={"left"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/scara_study.png"}
					imgAlt={"Wanderer forced to study"}>
						Wanderer
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/nahida"}
					btnTitle={"Nahida"}
					imgSide={"right"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/nahida_think.png"}
					imgAlt={"Nahida pondering with a Dendro Slime on her head"}>
						Nahida
				</StickerButtonLink>
			</Nav2Col>
		</div>
	);
}

