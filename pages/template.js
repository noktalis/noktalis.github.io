import Head from 'next/head';
import Layout from '../components/pageFormat/layout';
import { ThemeContext } from '../components/pageFormat/ThemeContext';
import { FandomContext } from '../components/pageFormat/FandomContext';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		// TODO: change fandom
		<FandomContext.Provider value=''>
		{/* // TODO: change page theme */}
		<ThemeContext.Provider value='mond'>
			<Head>
				{/* TODO: change page title */}
				<title>Template</title>
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
			{/* TODO: define page content */}
			<h1>Header 1</h1>
			<h6>Header 6</h6>
			<p>Hello World!</p>
			<hr></hr>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Et pharetra pharetra massa massa ultricies mi quis. Suspendisse potenti nullam ac tortor vitae purus. Libero nunc consequat interdum varius sit amet mattis.</p>
			<ul>
				<li>Item 2</li>
				<li>Item 1</li>
				<li>Item 4</li>
				<li>Item 3</li>
			</ul>
			<br/>
			<br/>
			<br/>
			<br/>
			<p>hi</p>
			<br/>
			<br/>
			<br/>
			<br/>
			<p>hi</p>
			<br/>
			<br/>
			<br/>
			<br/>
			<p>hi</p>
		</div>
	);
}

