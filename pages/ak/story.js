import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import DetailsList, { DetailsListEntry } from '@/components/detailsList';

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
				<title>Story Highlights | Arknights</title>
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
			<h1 style={{textAlign:"center"}}>Story Highlights</h1>
			<p>
				Or rather, moments from the Arknights story that I think about every so often that keep me up at night.
			</p>
			<p>
				<strong>!!! Warning !!! Not spoiler-free in the slightest!</strong>
			</p>

			<DetailsList>
				<DetailsListEntry
					title="Priestess' Yearning"
					summaryText="This lovely speech at the end of the world [M8-8 After]"
					
					details={<>
						<img src='/images/ak/story/priestess_m8-8/1.png'/>
						<img src='/images/ak/story/priestess_m8-8/2.png'/>
						<img src='/images/ak/story/priestess_m8-8/3.png'/>
						<img src='/images/ak/story/priestess_m8-8/4.png'/>
						<img src='/images/ak/story/priestess_m8-8/5.png'/>
						<img src='/images/ak/story/priestess_m8-8/6.png'/>
						<img src='/images/ak/story/priestess_m8-8/7.png'/>
					</>}>
				</DetailsListEntry>
			</DetailsList>

			

		</div>
	);
}

