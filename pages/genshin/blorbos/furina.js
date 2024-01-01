import Head from 'next/head';
import Layout from '../../../components/pageFormat/layout';
import { ThemeContext } from '../../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../../components/pageFormat/FandomContext';

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
		<ThemeContext.Provider value='fra'>
			<Head>
				<title>Furina | Genshin Blorbos</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout extra_menu_src="/json/nav_gi_blorbos.json"><Content/></Layout>
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
			<h1>Furina!!!!</h1>
			<h3>(Due to the nature of her character, spoiler warning for Fontaine's Archon Quests!!)</h3>
			<p>
				Okay I swear that I liked Furina since 4.0!! When I did the Archon Quest and they dropped those hints that she didn't actually know what she was doing... but trying so hard to appear like she <em>does</em> because everyone in Fontaine is looking to her to be Godly. I Felt That&trade;. 
			</p>
			<p>
				And then I was like "omg she'd be such good friends with Nahida" because they're both successors to deceased Archons without prior involvement with the nation government! Don't give me that Raiden "lol there were actually twins the entire time" bullshit!! Give me these people trying to figure out how to God&trade; from scratch and manage the expectations humans have of them as a result of what seems to be a wildy successful and beloved predecessor...!
			</p>
			<hr/>


			<h2>Furina vs Focalors</h2>
			<p>
				Something that fascinates me about Furina is the whole... <i>vague gesturing motion</i> thing about Furina and Focalors and identity.
			</p>
			<p>
				Like okay, we learn that Focalors was originally an Oceanid, then Egeria turned her into a human along with a lot of other Oceanids, so Focalors (Oceanid) became Focalors (Person). Then Egeria died and Focalors (Person) + Divinity = Focalors (Hydro Archon). When people refer to Focalors, they usually refer to this Focalors, the Hydro Archon.
			</p>
			<p>
				To get through the prophecy, Focalors did the Big Brain Move and split herself into two: Focalors (Human, body and spirit, parades around as fake Archon) and Focalors (Divinity, sneakily lives in the Oratice). Focalors (Human) goes on to take the name and identity of Furina, fooling Fontaine for 500 years.
			</p>
			<p>
				But what <em>is</em> Focalors (Divinity)? When she meets Neuvillette she refers to herself as "Focalors' divinity" as well as just "Focalors" because she's... complicated. Of course, for the player's sake they just give her "Focalors" as her in-game nametag on the dialogue, but she doesn't have a body or a spirit/soul, because those things were left with Furina. But Furina was unaware of Fontaine's origins and the Oratice's true nature, so it's safe to say that all of Focalors' (Hydro Archon) memories and personality were given to Focalors (Divinity). Which... kinda makes Focalors (Divinity) some sort of <em>ghost</em> of Focalors' soul? Because the actual soul is with Furina, but the personality and identity of Focalors (Hydro Archon) lived on with Focalors (Divinity)... and then also <em>died</em> with them.
			</p>
			<p>
				And then what is Furina? The simple answer is "Focalors' human half" but most discussions I see only just take this at face value and it bugs me. 
			</p>
			<p>
				Furina is a full-fledged person with the body and the spirit of Focalors, meaning she's not a child of Focalors, nor a lab-grown clone, nor a weird tree-grafting reincarnation like Nahida as theories might've guessed. Furina <em>is</em> Focalors (Person) and <em>assumes</em> the identity of Focalors (God) in her masquerade, but she doesn't <em>live</em> or personally identify as Focalors. They basically hit a reset button on Focalors (Hydro Archon) and sent her back to being Focalors (Person) after Egeria created the Oceanid-humans...
			</p>
			<p>
				And then of course my favorite part is the <em>identity</em> of Furina, where she sets herself apart as a distinct individual from the original Focalors (Person) after Egeria's conversion. I'm just... <i>fond sigh</i> Yeah, I know she's being traumatized by the isolation and insanity of pretending to be a god for centuries but that's what makes Furina <em>Furina</em>, y'know? Originally she was as bright and curious to see the world was Focalors (Person) was, but by agreeing to take part in Focalors' (Hydro Archon) plan, Furina lived a different life and got a different personality... And there's something romantic about how her fate split from the traces of Focalors' path and it's just... so good.
			</p>
			<hr/>
			

			<h2>Misc. Tidbits/Rambling</h2>
			<p>
				I bothered me toward the start of Furina's quest when Paimon went "Oh, I thought you'd be more of a diva." Like???? You learned that she's been putting on an act for 500 exhausting years!!! Wipe the slate clean and treat her like you're meeting a whole new person!! Because it was an <em>act</em>!!!
			</p>

		</div>
	);
}

