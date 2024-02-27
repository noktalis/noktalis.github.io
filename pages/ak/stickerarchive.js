import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import React, { useState } from 'react';
import AKStickerGallery from '@/components/ak/stickergallery';
import PaginateNav from '@/components/pagination/paginationnav';
import packData from "/public/json/ak/sticker_packs.json";
import ReactPaginate from 'react-paginate';

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
				<title>Sticker Archive | Arknights</title>
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
	const [packs, setPacks] = useState(packData);
	const [pageNumber, setPageNumber] = useState(0);

	const itemsPerPage = 2;
	const itemsIndex = pageNumber * itemsPerPage;
	const totalPageCount = Math.ceil(packs.length/itemsPerPage);

	const [display, setDisplay] = useState(packs.slice(itemsIndex, itemsIndex + itemsPerPage));

	// let displayItems = packs.slice(itemsIndex, itemsIndex + itemsPerPage);
		// .map((item) => {
		// 	return(
		// 		<AKStickerGallery path={item}></AKStickerGallery>
		// 	);
		// });

	const changePage = ({selected}) => {
		setPageNumber(selected);
		setDisplay(packs.slice(itemsIndex, itemsIndex + itemsPerPage));
		console.log(pageNumber);
		console.log(display);
	}


	return (
		<div>
			{/* {displayItems} */}
			{display.map((pack) => <AKStickerGallery path={pack}></AKStickerGallery>)}
			<ReactPaginate
				previousLabel={"Prev"}
				nextLabel={"Next"}
				pageCount={totalPageCount}
				onPageChange={changePage}
				containerClassName=''
				activeClassName=''
			/>

			

			{/* <PaginateNav/> */}
		</div>
	);
}

