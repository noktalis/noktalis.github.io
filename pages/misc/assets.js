import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import AssetDescription from '../../components/assetDesc';
import Gallery from '../../components/gallery';
import style from "/styles/modules/main.module.scss";

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value=''>
		<ThemeContext.Provider value=''>
			<Head>
				<title>Asset Sources | Misc</title>
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
			<h1 style={{textAlign:"center"}}>Resource Acknowledgements</h1>
			<h4 style={{textAlign:"center"}}>Crediting the creators of various assets around the site</h4>
			<p>
				I fear being Perceived&trade; too much to directly ask any artists to use their art so I'm going to stick with the ones that say it's fine to use without asking as long as they're credited &lt;3
			</p>
			<p>
				There's also a lot of official game assets, and I hope it goes without saying that I don't have any claim to them while making my silly lil fan site.
			</p>


			<hr/> {/* Arknights Section */}

			<h2 style={{textAlign:"center"}}>Arknights</h2>

			<AssetDescription
				align="left"
				imgSrc="/images/ak/stickers/thorns_spiky.png">
					<p>
						An <a href='https://twitter.com/asbestie/status/1302090666063921153?s=20'>edit of an official Arknights sticker</a> by <a href='https://twitter.com/asbestie'>@asbestie</a>
					</p>
					<p>
						They don't seem to be an artist, so there's no indication on their profile nor the post itself whether they want to be credited. But since it's an edit of official art, I'm going to take a guess that they intended for this edit to be used freely by fans since Hypergryph technically still holds the copyright.
					</p>
			</AssetDescription>

			<AssetDescription
				align="right"
				imgSrc="/images/ak/laterano_chapel.png">
					<p>
						A background from the Guiding Ahead Event. HD version from <a href='https://aceship.github.io/AN-EN-Tags/akgallery.html'>Aceship CG Gallery</a>.
					</p>
			</AssetDescription>

			<h3 style={{textAlign:"center", paddingTop:'15px'}}>Official Stickers</h3>
			<h4 style={{textAlign:"center"}}>Downloaded from <a href='https://www.arknights.global/fankit'>Official Arknights Fankit</a>!</h4>

			<Gallery path={"/json/misc/ak_stickers.json"}/>


			<hr/> {/* Genshin Section */}

			<h2 style={{textAlign:"center"}}>Genshin</h2>

			<p>
				A lot of official game assets are used, so all rights belong to HoYoverse. HD versions are sourced from @genshinresource, a fanblog that archives official Genshin Impact resources and is not affiliated with HoYoverse.
			</p>

			<AssetDescription
				align="left"
				imgSrc="/images/genshin/jean_namecard.png">
					<p>
						<a href='https://genshin-impact.fandom.com/wiki/Jean/Gallery#Namecard'>Jean's Namecard</a>, HD version from <a href='https://genshinresource.tumblr.com/cardlist'>@genshinresource</a>
					</p>
			</AssetDescription>

			<AssetDescription
				align="right"
				imgSrc="/images/genshin/windblumeWindwheel.svg">
					<p>
						A windblume/windwheel aster svg, from my friend <a href='https://sincerelyandyourstruly.neocities.org'><span className={style.xue}>Xue</span></a>!
					</p>
					<p>
						I recolored it to match the colors of windwheel asters and combined it with an in-game screenshot of grass to decorate the side navigation :3
					</p>
					<p>
						The white version also pops up here and there as section dividers :)
					</p>
			</AssetDescription>

			<AssetDescription
				align="left"
				imgSrc="https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg/">
					<p>
						The <a href='https://genshin-impact.fandom.com/wiki/Anemo'>Anemo symbol</a>, from the <a href='https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki'><span className='xue'>Fandom wiki</span></a>.
					</p>
					<p>
						I decided to use the wiki's svg because it was a much bigger image than anything else I could find ¯\_(ツ)_/¯
					</p>
			</AssetDescription>


		</div>
	);
}

