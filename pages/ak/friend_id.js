import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import style from '../../styles/modules/main.module.scss';

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
				<title>Friend ID | Arknights</title>
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
			<div className={style.headerImg}>
				<img src='/images/ak/profile.png'></img>
			</div>
			
			<p>
				If you're a stranger and managed to find this page, congrats! Feel free to add me in-game, my username is <b>Noktalis#1026</b>.
			</p>
			<p>
				The most valuable waifu I own is my fucking&ndash; potential 6 Bagpipe&ndash; I swear I'm not a whale I don't have any other non-welfare 6*s at pot 6. She's just. Bagpipe. Anyway, she's maxed out, and I usually put her up when there's a <abbr title="Continguency Contract">CC</abbr> season is going on, but nowadays she's not as important for CC so I might not bother unless requested.
			</p>

			<hr/>

			<h2 id="SupportUnits">Can you put so-and-so up as your support unit?</h2>
			<p>
				Here's a <a href="https://www.krooster.com/network/lookup/Noktalis">link</a> to all the units I own, although it might be a bit outdated. Most of my 6*s are raised, but my 5* and 4*s? Ah... They're most likely not promoted to <abbr title="Elite 2">E2</abbr>, sorry!
			</p>
			<p>
				If you want me to put up a certain unit, just shoot a message into <a href="https://sincerelyandyourstruly.neocities.org/ask/">Xue's askbox</a>. We're telepathically linked, so I'll know almost instantly! Oh, but do try to send another ask when you're done with needing that unit. Otherwise I'll just. Guess that you're done with them after a day?
			</p>
		</div>
	);
}

