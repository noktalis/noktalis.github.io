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
	let nl = "\n"
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
						<img src='/images/ak/story/priestess_m8-8/1.png'
							alt="Priestess: I never thought I would be the one who didn't want to let go."
							title="Priestess: I never thought I would be the one who didn't want to let go."/>
						<img src='/images/ak/story/priestess_m8-8/2.png'
							alt="Priestess, holding Doctor's hand as they lay in a sarcophagus: But I have to do this. This is the only way you'll get to live."
							title="Priestess: But I have to do this. This is the only way you'll get to live."/>
						<img src='/images/ak/story/priestess_m8-8/3.png'
							alt="Priestess: ...Oh, Doctor... With this, we won't ever get to meet again."
							title="Priestess: ...Oh, Doctor... With this, we won't ever get to meet again."/>
						<img src='/images/ak/story/priestess_m8-8/4.png'
							alt="Priestess: I can't. I can't accept this. I won't give up."
							title="Priestess: I can't. I can't accept this. I won't give up."/>
						<img src='/images/ak/story/priestess_m8-8/5.png'
							alt="Priestess: Doctor, the connection between us will transcend even time and space. I am sure of it."
							title="Priestess: Doctor, the connection between us will transcend even time and space. I am sure of it."/>
						<img src='/images/ak/story/priestess_m8-8/6.png'
							alt="Priestess: Even if the ocean completely boils away and the atmosphere vanishes, even if all the moons in the sky are pulled into the vortex of our planet's gravity, and even if the sun continues to mercilessly expand, eventually swallowing up all its children until none can be heard..."
							title="The most Yearning&trade; way to say you'll meet again in the afterlife"/>
						<img src='/images/ak/story/priestess_m8-8/7.png'
							alt="Priestess: I am sure we will meet again. At the far end of our civilization, once adorned by darkness and the brilliance of the stars up above, we will meet again."
							title="Priestess: I am sure we will meet again. At the far end of our civilization, once adorned by darkness and the brilliance of the stars up above, we will meet again."/>
						<hr/>
						<p>
							This was just??? So Yearning&trade;??? I'm such a sucker for angst AND tragedy AND partings specifically at the end of the world...
						</p>
					</>}>
				</DetailsListEntry>
				<DetailsListEntry
					title="Rosmontis' Choice"
					summaryText="Rosmontis on child soldiers [7-6 After]"
					
					details={<>
						<img src='/images/ak/story/rosmontis_7-6/1.png'
							alt={'Rosmontis, a little cat girl: Doctor, did you just call me?\nDoctor, traumatized after seeing Rosmontis in battle: Who sent you out to fight?'}
							title={'Rosmontis: Doctor, did you just call me?\nDoctor: Who sent you out to fight?'}/>
						<img src='/images/ak/story/rosmontis_7-6/2.png'
							alt="Doctor: Who sent you here?!"
							title="Doctor: Who sent you here?!"/>
						<img src='/images/ak/story/rosmontis_7-6/3.png'
							alt="Rosmontis: I did."
							title="Rosmontis: I did."/>
						<img src='/images/ak/story/rosmontis_7-6/4.png'
							alt="Rosmontis: I did. I chose to fight. I want to fight."
							title="Rosmontis: I did. I chose to fight. I want to fight."/>
						<img src='/images/ak/story/rosmontis_7-6/5.png'
							alt={"Rosmontis: The world is calling my name, to prevent more people like me from coming into it.\nDoctor: You can't\u2013"}
							title={"Rosmontis: The world is calling my name, to prevent more people like me from coming into it.\nDoctor: You can't\u2013"}/>
						<img src='/images/ak/story/rosmontis_7-6/6.png'
							alt="Rosmontis: ...Does death care that I am a child?"
							title="Rosmontis: ...Does death care that I am a child?"/>
						<img src='/images/ak/story/rosmontis_7-6/7.png'
							alt="Rosmontis: Would war or disease spare someone because they are a child?"
							title="Rosmontis: Would war or disease spare someone because they are a child?"/>
						<img src='/images/ak/story/rosmontis_7-6/8.png'
							alt="Rosmontis: When Amiya or I stand on the battlefield... who looks at us and thinks 'children?'"
							title="Rosmontis: When Amiya or I stand on the battlefield... who looks at us and thinks 'children?'"/>
						<img src='/images/ak/story/rosmontis_7-6/9.png'
							alt="Rosmontis: We're 'monsters,' aren't we, Doctor?"
							title="Rosmontis: We're 'monsters,' aren't we, Doctor?"/>
					</>}>
				</DetailsListEntry>
			</DetailsList>

			

		</div>
	);
}

