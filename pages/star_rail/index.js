import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';

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
				<title>Home | Star Rail</title>
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
			<p>Under construction!</p>
			<p>To do:</p>
			<ul>
				<li>
					Astral Express theme
				</li>
				<li>
					Blorbo page?
				</li>
				<li>
					Aven ramblings
				</li>
				<li>
					relic infographic
				</li>
			</ul>
			<hr></hr>
			<p> Testing! <a>Testing!</a></p>
			<h1>Hm?</h1>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<hr/>
		</div>
	);
}

