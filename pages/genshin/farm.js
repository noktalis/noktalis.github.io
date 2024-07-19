import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import FarmChart from '@/components/farmChart';
import { GIRow } from '@/components/farmChart';
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
	let setIDs = Object.keys(artifact_data);

	return (
		<div>
			<h1>Artifact Farming Chart</h1>
			<p>Because I cannot for the life of me keep track of who needs what all at once anymore &lt;/3</p>
			
			<FarmChart>
			{setIDs.map(set => {
				let setData = artifact_data[set]
				let chars = []

				if(setData["charGroups"].length == 1){
					chars = setData["charGroups"][0]["characters"]
				}else{
					chars = setData["charGroups"][0]["characters"].concat(setData["charGroups"][1]["characters"])
				}
				console.log(chars)

				return(
					<GIRow {...setData} chars={chars} key={setData["id"]}>
						
						
					</GIRow>
				);


				})
			}

			{/* {
				<GIRow {...artifact_data[set]}>
					artifact_data[set]["charGroups"].length <= 1 ? chars = artifact_data[set]["charGroups"][0]["characters"]
				</GIRow>
				{console.log(artifact_data[set]["charGroups"])}
				{artifact_data[set]["charGroups"]}
				{set}
			} */}
			</FarmChart>
		</div>
	);
}

