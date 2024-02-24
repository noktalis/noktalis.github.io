import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import { useState, useEffect } from 'react';
import AKStickerGallery from '@/components/ak/stickergallery';

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
				<title>Sticker Gallery Test</title>
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
	const [packs, setPacks] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	/* Fetch the data */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch("/json/ak/sticker_packs.json");
			const obj = await response.json();
			const data = obj["packs"];

			console.log(data);
			setPacks(data);
		}
		fetchData()
		.catch(console.error);
	},[])

	return (
		<div>
			<AKStickerGallery path="https://noktalis.github.io/ak-stickers/2019/ch6/info.json"/>
			{/* <AKStickerGallery pack={packs[2]}></AKStickerGallery> */}
			{/* {packs.map(({pack}) => <AKStickerGallery>{name}</AKStickerGallery>)} */}
		</div>
	);
}

