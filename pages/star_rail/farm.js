import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import FarmChart from '@/components/farmChart';
import { FarmChartRow, HSRChar } from '@/components/farmChart';

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
	let substatTest = ["CRIT DMG", "SPD"]

	return (
		<div>
			<h1>Relic Farming Chart</h1>
			<h3>Work in Progress!</h3>
			<p>Making this because I got tired of tracking what stats I'm looking for on each relic set and this was the most convenient place to put it &lt;/3</p>

			<FarmChart>
				<FarmChartRow
				setName="Messenger"
				setImg="/images/hsr/relics/messenger.png">
					<HSRChar src='/images/hsr/icons/bronya.png'
						alt='Bronya'
						name='Bronya'
						body='CRIT DMG'
						feet='HP/SPD'
						rope='ER'
						sphere='HP/DEF'>
							{substatTest.map(stat => <span>{stat}</span>)}
					</HSRChar>

				</FarmChartRow>
			</FarmChart>

			{/* <img src='/images/hsr/relics/messenger.png'></img> */}
		</div>
	);
}

