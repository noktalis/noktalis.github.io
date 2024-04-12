import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import FarmChart from '@/components/farmChart';
import { FarmChartRow, HSRChar } from '@/components/farmChart';
import char_data from "/public/json/hsr/char_relics.json";
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
	let test = Object.keys(char_data);
	console.log(test);

	console.log(char_data);
	let bronya = char_data["bronya"];
	// console.log(test["name"]);

	// TODO: fetch list of character objects
	// TODO: fetch list of relic sets
	// TODO: for each relic set's list of characters, pass character corresponding character object into element

	return (
		<div>
			<h1>Relic Farming Chart</h1>
			<h3>Work in Progress!</h3>
			<p>Making this because I got tired of tracking what stats I'm looking for on each relic set and this was the most convenient place to put it &lt;/3</p>

			<FarmChart>
				<FarmChartRow {...relic_data["pioneer"]}>
					{relic_data["pioneer"]["characters"].map(char => <HSRChar {...char_data[char]}/>)}
				</FarmChartRow>
				<FarmChartRow
				name="Messenger"
				icon="/images/hsr/relics/messenger.png">

					<HSRChar {...bronya}/>

					{test.map(char_name => <HSRChar {...char_data[char_name]}></HSRChar>)}

				</FarmChartRow>
			</FarmChart>

			{/* <img src='/images/hsr/relics/messenger.png'></img> */}
		</div>
	);
}

