import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import style from "../../styles/modules/main.module.scss";
import Webring from '../../components/webring';

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
		<ThemeContext.Provider value='mond'>
			<Head>
				<title>The Weebring</title>
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
			<h1 style={{textAlign:"center"}}>The Weebring</h1>
			<p>Behold... the webring, Weebring!!!</p>
			<p>
				<span className={style.xue}>Xue</span> put this together and is the main admin of the ring! An index of all the sites in the WeebRing can be found at <b>Weebring Home</b>, just click the link below!
			</p>
			<p>
				(By the way, this page in particular is probably buggy as hell, so if the information here doesn't look quite right, take a screenshot and inform <span className={style.xue}>Xue</span> through their <a href='https://sincerelyandyourstruly.neocities.org/ask/' target='_blank'>askbox</a> so I can hear about it through our telepathic link.)
			</p>
			<Webring></Webring>
		</div>
	);
}

