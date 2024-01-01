import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import TierList from '../../components/tierlist';

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
				<title>VO Rankings | Genshin</title>
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
			<h1 style={{textAlign:'center'}}>Voiceover Rankings</h1>
			<h3 style={{textAlign:'center'}}>My very biased, very opinionated voiceover rankings in the 4 languages!</h3>
			<p>
				Just as a disclaimer, I believe that all the voice actors are super talented!!! What I don't like about some voiceovers usually comes down to not liking the direction and sound that each voiceover decided to go with, or thinking that the voiceover is somewhat out of character for my own interpretation of the character.
			</p>
			<p>
				Also! These are <em>mostly</em> based on their voicelines available in their profile. Unfortunately this <em>does</em> matter and there <em>will</em> be exceptions.
			</p>

			<TierList path="/json/genshin_vo_ranks.json"/>

			<h2 style={{textAlign:'center'}}>Ranks Explained</h2>
			<div style={{textAlign:'center'}}>
				Scores are out of 10!<br/>
				S: 9+<br/>
				A: 8+<br/>
				B: 7+<br/>
				C: 6+<br/>
				D: &lt; 5
				
			</div>
		</div>
	);
}

