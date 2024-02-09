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
					summaryText="Rosmontis explaining child soldiers [7-6 After]"
					
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
				<DetailsListEntry
					title="Ch'en protecting Hoshiguma"
					summaryText="Hoshichen moment [5-7 Before]"
					
					details={<>
						<img src='/images/ak/story/hoshichen_5-7/1.png'
							alt="Ch'en, after watching Hoshiguma push two floors' worth of rubble off them: You saved me again."/>
						<img src='/images/ak/story/hoshichen_5-7/2.png'
							alt="Hoshiguma: What's weird about that? How many times does that make now? And don't say that to me so earnestly... makes me feel gross just hearing it."/>
						<img src='/images/ak/story/hoshichen_5-7/3.png'
							alt={"Hoshiguma: You should go reorganize the squads, quickly. Don't waste any more time on them \u2013 it's what they're after."}/>
						<img src='/images/ak/story/hoshichen_5-7/4.png'
							alt="Ch'en: And leave you here to face Reunion alone despite your injuries?"/>
						<img src='/images/ak/story/hoshichen_5-7/5.png'
							alt="Hoshiguma: Ch'en. What do you think you're doing?"/>
						<img src='/images/ak/story/hoshichen_5-7/6.png'
							alt='Hoshiguma: Two years ago in Hua Shui, you were chasing after a bandit leader. My leg was injured, but you believed in me and left me to fight alone. Do you still remember that?'/>
						<img src='/images/ak/story/hoshichen_5-7/7.png'
							alt="Ch'en: How long did it take me to catch him?"/>
						<img src='/images/ak/story/hoshichen_5-7/8.png'
							alt='Hoshiguma: Three hours. You trusted me back then.'/>
						<img src='/images/ak/story/hoshichen_5-7/9.png'
							alt="Ch'en: And I still do."/>
						<img src='/images/ak/story/hoshichen_5-7/10.png'
							alt="Ch'en, determinedly standing alone in the frame: You, Reunion! I'll take you all on!"/>
						<img src='/images/ak/story/hoshichen_5-7/11.png'
							alt="Hoshiguma: I can still fight. Why are you staying behind? Why aren't you taking the squads to recapture the L.G.D. Headquarters? Did you forget your main mission?"/>
						<img src='/images/ak/story/hoshichen_5-7/12.png'
							alt="Hoshiguma: It's the same as it was three years ago, and it's a responsibility that only you can fulfill!"/>
						<img src='/images/ak/story/hoshichen_5-7/13.png'
							alt="Ch'en: I don't see any problem with protectiing my colleague from these rioters."/>
						<img src='/images/ak/story/hoshichen_5-7/14.png'
							alt="Hoshiguma: You've changed. You used to be much tougher."/>
						<img src='/images/ak/story/hoshichen_5-7/15.png'
							alt="Ch'en: Leaving you here? Of course I could. I used to only look at the risks versus the benefits, but now, it's as you said..."/>
						<img src='/images/ak/story/hoshichen_5-7/16.png'
							alt={"The background changes to an image of Ch'en smiling as she wields her sword.\nCh'en: Maybe I have changed. As time passed, I've had fewer grievances about Lungmen, and I've been able to place my trust in more people."}
							title='THAT SMILE...'/>
						<img src='/images/ak/story/hoshichen_5-7/17.png'
							alt="Ch'en: You are no longer just Inspector Hoshiguma. You are my friend, and my partner."
							title="Hoshi is her precious partner!!"/>
						<img src='/images/ak/story/hoshichen_5-7/18.png'
							alt="Ch'en: Your shield has protected me all this time; so once in a while, you should let me be your shield."
							title='Must protecc!!!'/>
						<img src='/images/ak/story/hoshichen_5-7/19.png'
							alt="Hoshiguma, offscreen: Whew. You're not even going to blush after saying that?"/>
						<img src='/images/ak/story/hoshichen_5-7/20.png'
							alt="Ch'en: Shut the **** up."/>
						<img src='/images/ak/story/hoshichen_5-7/21.png'
							alt='Hoshiguma: Hahaha.'/>
						<img src='/images/ak/story/hoshichen_5-7/22.png'
							alt="Hoshiguma: All right, all right. In that case, Ch'en, I'm leaving it to you."/>
					</>}>
				</DetailsListEntry>
				<DetailsListEntry
					title="Vigna's FBI meme"
					summaryText="Vigna's FBI meme"
					
					details={<>
						<img src=''/>
					</>}>
				</DetailsListEntry>
				<DetailsListEntry
					title="WIP"
					summaryText="WIP"
					
					details={<>
						<img src=''/>
					</>}>
				</DetailsListEntry>
				{/* <DetailsListEntry
					title="WIP"
					summaryText="WIP"
					
					details={<>
						<img src=''/>
					</>}>
				</DetailsListEntry> */}
			</DetailsList>

			

		</div>
	);
}

