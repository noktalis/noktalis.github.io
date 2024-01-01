import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';

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
				<title>Ships | Arknights</title>
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
			<h1 style={{textAlign:'center'}}>Ships</h1>

			<p>
				I...  don't actually ship anything in particular in Arknights. Not romantically, at least. I'm pretty open to any ship though as long as there isn't some oddly big gap in age/maturity.
			</p>
			<p>
				Sure, I'll look at ships like Franka x Liskarm and go "Yeah, I'll ship it" where I'm favorable towards them, but don't have any particularly strong feelings about them either. There's also cases like that of Thorns x Elysium where I <em>do</em> enjoy them together platonically, but don't really care whether or not they're involved romantically.
			</p>
			<p>
				I think part of the reason why I don't have any real ships in Arknights is because the cast is so big and everyone gets limited screentime? But also because I'm behind in the story lol.
			</p>
			<p>
				Another part of it is because the world of Arknights isn't exactly... full of happy fun times suited for shipping. There's glimpses of such an atmosphere here and there, but it's refreshing to have a world where the importance of companionship and friendship is just as-- if not more-- important than a romantic relationship. Arknights shines most to me when it focuses on people trying their best to survive in a fucked-up world.
			</p>
			<p>
				Oh yeah, the world building!
			</p>
			<p>
				Yeah, I like ships as much as the next shipper, but you can't tell me you're not <em>fascinated</em> by a piece of lettuce getting such <em>supremely</em> bad vibes from an interdimensional demon passing by that it became a Lovecraftian demonic lettuce itself.
			</p>
			<p>
				(Dammit, I really need to get back to reading Arknights. If only Kal'tsit didn't give such long monologues...)
			</p>
		</div>
	);
}

