import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import FarmChart from '@/components/farmChart';
import { FarmChartRow } from '@/components/farmChart';
import relic_data from "/public/json/hsr/relic_sets.json";

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value='hsr'>
		<ThemeContext.Provider value='express'>
			<Head>
				<title>Relic Chart | Star Rail</title>
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
	let setIDs = Object.keys(relic_data);

	return (
		<div>
			<h1>Relic Farming Chart</h1>
			<p>Made this because I got tired of tracking what stats I'm looking for on each relic set and this was the most convenient place to put it &lt;/3</p>

			<FarmChart>
				{setIDs.map((set) => <FarmChartRow {...relic_data[set]} type="hsr"/>)}
			</FarmChart>
		</div>
	);
}

