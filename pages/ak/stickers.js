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
			
		</div>
	);
}

