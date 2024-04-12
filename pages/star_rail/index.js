import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import NavCol from '@/components/navCol';
import StickerButtonLink from '@/components/stickerbtnlink';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value='hsr'>
		<ThemeContext.Provider value='express'>
			<Head>
				<title>Home | Star Rail</title>
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
			<h1 style={{textAlign:"center"}}>Honkai: Star Rail</h1>
			
			<p>To do:</p>
			<ul>
				<li>
					Blorbo page
				</li>
				<li>
					Ramblings
				</li>
				<li>
					relic infographic bc i can't keep track of everything anymore and putting it here is more convenient
				</li>
			</ul>

			<p>Under construction! All the links below are broken TwT</p>

			<NavCol>
				<StickerButtonLink
						href={"/star_rail/blorbos/"}
						btnTitle={"Blorbos"}
						imgSide={"left"}
						imgSize={""}
						imgSrc={"/images/hsr/emotes/aven_shades.png"}
						imgAlt={"Aventurine wearing shades"}>
							Blorbos
					</StickerButtonLink>
					<StickerButtonLink
						href={"/star_rail/rambling/"}
						btnTitle={"Penacony Ramblings"}
						imgSide={"right"}
						imgSize={""}
						imgSrc={"/images/hsr/emotes/acheron_sad.png"}
						imgAlt={"Acheron crying"}>
							Penacony Ramblings
					</StickerButtonLink>
					<StickerButtonLink
						href={"/star_rail/farm/"}
						btnTitle={"Relic Farming Chart"}
						imgSide={"left"}
						imgSize={""}
						imgSrc={"/images/hsr/emotes/huohuo_frazzled.png"}
						imgAlt={"Huohuo crying out in frazzled despair"}>
							Relic Farming Chart
					</StickerButtonLink>
			</NavCol>

			<hr/>
		</div>
	);
}

