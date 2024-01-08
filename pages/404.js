import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/pageFormat/layout';
import { ThemeContext } from '../components/pageFormat/ThemeContext';
import { FandomContext } from '../components/pageFormat/FandomContext';
import style from "../styles/modules/etc.module.scss";

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
				<title>404: Not Found</title>
				<link rel="icon" href="/ventiico.png"/>
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
		<div className={style.center}>
			<h1>404: Page Not Found</h1>
			<div className={style.jean}>
				<Image 
				src={"/images/genshin/emotes/jean_swet.png"}
				fill={true}
				sizes='100vw'
				alt='Emote of Jean smiling nervously with a sweatdrop on her cheek'
				title='Whoops!'></Image>
			</div>
			
			<p>Whoops! Sorry, that page couldn't be found. It probably doesn't exist yet, since this site is a work in progress!</p>
		</div>
	);
}

