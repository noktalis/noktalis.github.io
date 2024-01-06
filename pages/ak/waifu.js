import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import Quote from '../../components/quote';
import DetailsList from '../../components/detailsList';

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
				<title>Waifus | Arknights</title>
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
	let quote = "Sometimes it takes a real man to become the best girl.";
	let speaker = <p>&ndash;Gigguk explaining why 'waifu' is an umbrella term that includes husbandos</p>;

	return (
		<div>
			<h1 style={{textAlign:'center'}}>Waifus</h1>
			<Quote quote={quote} speaker={speaker}/>

			<DetailsList path={"/json/ak/ak_waifus.json"} arrayKey={"waifus"}></DetailsList>
			<br/>

			<h1 style={{textAlign:'center'}}>Waifu-Adjacent Favorites</h1>
			<DetailsList path={"/json/ak/ak_waifus.json"} arrayKey={"adjacent"}></DetailsList>
		</div>
	);
}

