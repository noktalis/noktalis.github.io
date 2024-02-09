import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import Gallery from '@/components/gallery';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value='ak'>
		<ThemeContext.Provider value='ri'>
			<Head>
				<title>Stickers | Arknights</title>
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
			<h1>Arknights Sticker Gallery</h1>
			<p>
				All stickers in this gallery <em>should</em> be official Arkngights stickers! Meaning, the copyright should belong to Hypergryph.
			</p>
			<p>
				While looking for stickers to use for my funky little site here, I discovered that the CN version of Arknights stickers don't have the copyright mark in the way, but the Global versions do. Obviously, for the sake of aesthetics, I'd prefer to have the version without the mark. But the CN version of stickers are super gatekept for some reason! So I had to scrounge the rest of the internet to look for places where they've breached containment.
			</p>

			<h2>Operation Intelligence</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1247771424833454081?s=20' target="_blank">7 April 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Code of Brawl</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1267409828411871232?s=20' target="_blank">1 June 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Chen</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1272803313017163776?s=20' target="_blank">16 June 2020</a>
				</p>
				<p>
					I found the high quality version of this sticker pack on <a href='https://stickers.wiki/telegram/arknights_sticker_3/' target="_blank">stickers.wiki</a>! For some of the stickers with text, I spliced in the marked English version's text to create a markfree English version :D
				</p>
				<Gallery path="/json/ak/ak_stickers.json" arrayName="chen"/>
			</div>

			<h2>Working</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1274688705530220545?s=20' target="_blank">21 June 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Anecdotes</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1284103056762650625?s=20' target="_blank">17 July 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Amiya</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1285937643684007936?s=20' target="_blank">22 July 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>CNY 2020</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1291705650523918337?s=20' target="_blank">7 August 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Afternoon Stories</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1300402964188876811?s=20' target="_blank">31 August 2020</a>
				</p>
				<p>
					Also found on <a href='https://stickers.wiki/telegram/arknights_sticker_3/' target="_blank">stickers.wiki</a>! 
				</p>
				<Gallery path="/json/ak/ak_stickers.json" arrayName="afternoon"/>
			</div>

			<h2>Operation Barrenland</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1305461295320186880?s=20' target="_blank">14 September 2020</a>
				</p>
				<p>
					Also found on <a href='https://stickers.wiki/telegram/arknights_sticker_3/' target="_blank">stickers.wiki</a>! 
				</p>
				<p>
					The official download of this sticker pack for global servers lacks the stickers of Purestream and Conviction, probably because they came from a collaboration and April Fools' special respectively, and global servers had yet to release them due to difference in schedule. 
				</p>
				<Gallery path="/json/ak/ak_stickers.json" arrayName="barrenland"/>
			</div>

			<h2>Anecdotes 2</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1313101641512554498?s=20' target="_blank">5 October 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Frolic</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1323610885399683073?s=20' target="_blank">3 November 2020</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Music of the Night</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1348947836079984644?s=20' target="_blank">12 January 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Operation Blade</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1360936834776268802?s=20' target="_blank">14 February 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>The Great Chief Returns</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1366704845261004806?s=20' target="_blank">2 March 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Rabbits</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1371808469594992641?s=20' target="_blank">16 March 2021</a>
				</p>
				<p>
					Also found on <a href='https://stickers.wiki/telegram/arknights_sticker_3/' target="_blank">stickers.wiki</a>! 
				</p>
				<p>
					Arknights sticker packs are usually at most 16 stickers, but stickers.wiki had 8 extra stickers that matched the artstyle of this pack, so I'm going to assume they're part of the pack and included them at the end. Also, when I downloaded this pack from the official site, all these stickers were still gifs rather than static image files.
				</p>
				<Gallery path="/json/ak/ak_stickers.json" arrayName="rabbits1"/>
			</div>
			
			<h2>Reunion</h2>
			<div>
				<p>
					Released to CN: <a href='' target="_blank">Unknown</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1385216822014746627?s=20' target="_blank">22 April 2021</a>
				</p>
				<p>
					Also found on <a href='https://stickers.wiki/telegram/arknights_sticker_3/' target="_blank">stickers.wiki</a>! 
				</p>
				<Gallery path="/json/ak/ak_stickers.json" arrayName="reunion"/>
			</div>

			<h2>Work</h2>
			{/* Chapter 8 */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1328286620592705536?s=20' target="_blank">16 November 2020</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1392011596239622144?s=20' target="_blank">11 May 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Holiday</h2>
			{/* Maria Nearl and Rewinding Breeze */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1328286620592705536?s=20' target="_blank">16 November 2020</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1383767392711430148?s=20' target="_blank">18 April 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Misc. 1</h2>
			{/* Hellagur pondering */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1333681832655654912?s=20' target="_blank">30 November 2020</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Misc. 2</h2>
			{/* Mostima shades */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1336164874691309570?s=20' target="_blank">7 December 2020</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Rabbits 2</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1336164874691309570?s=20' target="_blank">7 December 2020</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1378331450165100545?s=20' target="_blank">3 April 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Leisure Time</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1344546557534687237?s=20' target="_blank">30 December 2020</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1385216822014746627?s=20' target="_blank">29 June 2021</a>
				</p>
				<p>
					Using the smaller, markfree versions found at <a href='https://m.mamecn.com/wz/298989.html' target='_blank'>a random site found from reverse image search</a> as reference, I edited out the mark from the official global versions to create most of these stickers.
				</p>
				<p>
					Additional Mountain stickers reference from <a href='https://ngabbs.com/read.php?tid=24921050&rand=61'>an NGA forum post</a>. 
				</p>
				<Gallery path="/json/ak/ak_stickers.json" arrayName="leisure"/>
			</div>

			<h2>Lungmen</h2>
			{/* CNY Ch'en */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1352094652325715970?s=20' target="_blank">20 January 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>CNY 2021</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1358269100775010304?s=20' target="_blank">6 February 2021</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1420323144502587395?s=20' target="_blank">28 July 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Rainbow Siege 6</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1369945561965555718?s=20' target="_blank">11 March 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Gift of the Deep Ones</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1388062369922916353?s=20' target="_blank">30 April 2021</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1456471336218288136?s=20' target="_blank">4 November 2021</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Skadi</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1391261080043745281?s=20' target="_blank">8 May 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Misc. 3</h2>
			{/* Carnelian */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1405843640212090884?s=20' target="_blank">18 June 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Arknights Summer</h2>
			{/* Ch'en alter summer event */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1422093393774080003?s=20' target="_blank">2 August 2021</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1491607858047332357?s=20' target="_blank">9 February 2022</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Stormwatch</h2>
			{/* Chapter 9 */}
			<div>
				<p>
					Released to CN: <a href='' target="_blank">21 September 2021</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1527136966956961792?s=20' target="_blank">18 May 2022</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Rabbits 3</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1451398599263199234?s=20' target="_blank">21 October 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Near Light</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1460837506190962694?s=20' target="_blank">16 November 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Misc. 4</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1469504006829776899?s=20' target="_blank">10 December 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>CNY & Break the Ice</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1471389324038258689?s=20' target="_blank">15 December 2021</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Integrated Strategies</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1478593768677060608?s=20' target="_blank">4 January 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>CNY 2022</h2>
			{/* Ling event */}
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1487265098678738949?s=20' target="_blank">28 January 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Rabbits 4 (ft. Dragon Beans)</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1494607512544243714?s=20' target="_blank">18 February 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Take a Break</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1506586033676165122?s=20' target="_blank">23 March 2022</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1575062773607714819?s=20' target="_blank">28 September 2022</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Crimson Solitaire</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1509839793093455874?s=20' target="_blank">1 April 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Specter</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1518865278565687296?s=20' target="_blank">26 April 2022</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1593076470976487426?s=20' target="_blank">16 November 2022</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Stultifera Navis & Chapter 10</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1520298484514967553?s=20' target="_blank">30 April 2022</a>
				</p>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1664119579222896645?s=20' target="_blank">31 May 2023</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>All Rabbits 5 (ft. Kitties)</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1531536147683237889?s=20' target="_blank">31 May 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank">N/A</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Lingering Echoes</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1537329603873689601?s=20' target="_blank">16 June 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Dorothy's Vision</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1544607636678594560?s=20' target="_blank">6 July 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Rhine Lab</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1558319831086419968?s=20' target="_blank">12 August 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Ideal City</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1560205717524557824?s=20' target="_blank">18 August 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>An Obscure Wanderer</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1568132542431399943?s=20' target="_blank">9 September 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>The Legend of Luo Xiaohei</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1570373898058993665?s=20' target="_blank">15 September 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Penguin Logistics</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1585165111161151488?s=20' target="_blank">26 October 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Chapter 11 & Il Siracusano</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1588018691769147393?s=20' target="_blank">2 November 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Ambience Synthesia</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1601489814544867328?s=20' target="_blank">10 December 2022</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>3rd Anniversary (EN)</h2>
			<div>
				<p>
					Released to EN: <a href='https://x.com/ArknightsEN/status/1613453318889836544?s=20' target="_blank">12 January 2023</a>
				</p>
				<p>
					Direct Download: <a href='https://3rdanniv.arknights.global' target='_blank'>here</a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Where Vernal Winds Will Never Blow</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1615273875876761603?s=20' target="_blank">17 January 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>A Death in Chunfen</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1626145078355038209?s=20' target="_blank">16 February 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Chapter 12</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1645321198363090945?s=20' target="_blank">10 April 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Kal'tsit</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1652199325076979712?s=20' target="_blank">28 April 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Muelsyse</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1654743387554344962?s=20' target="_blank">6 May 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Lone Trail</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1655468722289795073?s=20' target="_blank">8 May 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Hortus de Escapismo</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1669254115711647745?s=20' target="_blank">15 June 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>So Long, Adele</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1694243432863297987?s=20' target="_blank">23 August 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Jessica Alter Event</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1700408066808963486?s=20' target="_blank">9 September 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>Chapter 13</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1711683829017247951?s=20' target="_blank">10 October 2023</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

			<h2>To the Grinning Valley</h2>
			<div>
				<p>
					Released to CN: <a href='https://x.com/oyuki_gms/status/1747896366859522081?s=20' target="_blank">18 January 2024</a>
				</p>
				<p>
					Released to EN: <a href='' target="_blank"></a>
				</p>
				<WIP/>
				{/* <Gallery path="/json/ak/ak_stickers.json" arrayName=""/> */}
			</div>

		</div>
	);
}

function WIP(){
	return(
		<p>
			WIP Coming Eventually&trade;
		</p>
	);
}