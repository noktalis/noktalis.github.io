import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import StickerButtonLink from '../../components/stickerbtnlink';
import NavCol from '../../components/navCol';

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
				<title>Misc.</title>
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
			<h1 style={{textAlign:"center"}}>Miscellaneous</h1>

			<NavCol>
				<StickerButtonLink
					href="/misc/assets/"
					btnTitle="Resource Acknowledgements"
					imgSide=""
					imgSize=""
					imgSrc=""
					imgAlt="">
						Resource Acknowledgements
				</StickerButtonLink>
			</NavCol>
		</div>
	);
}

