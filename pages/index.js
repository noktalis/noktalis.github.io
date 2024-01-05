import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/pageFormat/layout';
import { ThemeContext } from '../components/pageFormat/ThemeContext';
import { FandomContext } from '../components/pageFormat/FandomContext';
import StickerButtonLink from '../components/stickerbtnlink';
import NavCol from '../components/navCol';

/**
 * Home page of website
 * @returns 
 */
export default function Home(){
	return (
		<FandomContext.Provider value=''>
		<ThemeContext.Provider value='mond'>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout><Content/></Layout>
		</ThemeContext.Provider>
		</FandomContext.Provider>
	); // end return
} // end Home Component

/**
 * Contents uniquely defined on each page
 * @returns 
 */
function Content() {
	return (
		<div>
			<h1 style={{textAlign:"center"}}>Welcome!</h1>
			<p>
				If you know me in real life but I don't talk about my unhinged thoughts about fictional characters with you, this site is not for you! Turn back now! You've been <em>unwelcomed</em> because I cannot handle being Perceived&trade; and Judged&trade; by you!!
			</p>
			<p>
				Okay, now that I've kicked those guys out, the rest of you are either my friends and/or internet strangers. I'm Nat and this is where I keep <em>some</em> of my brainrot and unhinged cringe :D! If you want to see the rest, like my (slightly more detailed) opinions on ships, AU's I've collaboratively created with my friend Xue, and my deepest, darkest, most hateriness rambling, I highly recommend you check out <Link target="_blank" href={"https://sincerelyandyourstruly.neocities.org"}>Xue's site</Link>!
			</p>

			<hr/>

			<h1 style={{textAlign:"center"}}>Coming Soon (Eventually)</h1>
			<p>
				Some of these pages probably don't exist yet, whoops! Which ones? That's for you to find out. Go! Explore! Be freeeee!
			</p>

			<NavCol>
				<StickerButtonLink
					href={"/misc/tropes/"}
					btnTitle={"Trope Tier List"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/lynette_sip.png"}
					imgAlt={"Lynette sipping tea"}>
						Trope Tier List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/"}
					btnTitle={"Genshin Blorbo Shrines"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"/images/genshin/emotes/lyney_applause.png"}>
						Genshin Blorbo Shrines
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/story/"}
					btnTitle={"Arknights story moments that keep me up at night"}
					imgSide={"lefter"}
					imgSize={"small"}
					imgSrc={"/images/ak/stickers/phantom_dramatic.png"}
					imgAlt={"Phantom holding unconscious Doctor in his arms under the spotlight"}>
						Arknights moments that keep me up at night
				</StickerButtonLink>
				<StickerButtonLink
					href={"/star_rail/"}
					btnTitle={"Honkai: Star Rail"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"/images/hsr/emotes/yanqing_sad.png"}
					imgAlt={"Yanqing sad that he's broke"}>
						A pinch of Star Rail content
				</StickerButtonLink>
			</NavCol>
		</div>
	);
}
