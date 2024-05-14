import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import DetailsList from '@/components/detailsList';

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
				<title>Wishlist | Genshin</title>
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
			<h1 style={{textAlign:'center'}}>Wishlist</h1>
			<h3 style={{textAlign:'center'}}><em>Vaguely</em> ordered by priority</h3>
			<DetailsList path={"/json/genshin/gi_wishlist.json"} arrayKey={"wishlist"}></DetailsList>
		</div>
	);
}

