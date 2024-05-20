import Head from 'next/head';
import Layout from '../../../components/pageFormat/layout';
import { ThemeContext } from '../../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../../components/pageFormat/FandomContext';

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
		<ThemeContext.Provider value='lyt'>
			<Head>
				<title>Lynette | Genshin Blorbos</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout extra_menu_src="gi-blorbos"><Content/></Layout>
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
			<h1>She is beauty... She is grace...!!</h1>
			<p>
				And she slash the shit out of someone's face &lt;3
			</p>
			<p>
				No thoughts, only admiring the pretty princely catgirl...
			</p>
		</div>
	);
}

