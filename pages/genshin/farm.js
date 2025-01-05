import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import FarmChart from '@/components/farmChart';
import { GIRow, FarmChartRow } from '@/components/farmChart';
import artifact_data from "/public/json/genshin/artifact_sets.json"

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
				<title>Farming Chart | Genshin</title>
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
			<h1>Artifact Farming Chart</h1>
			<p>Because I cannot for the life of me keep track of who needs what all at once anymore &lt;/3</p>
			
			<FarmChart/>
		</div>
	);
}

