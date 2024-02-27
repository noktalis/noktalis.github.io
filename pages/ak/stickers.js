import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import React, { useState, useEffect, useContext } from 'react';
import AKStickerGallery from '@/components/ak/stickergallery';
import ReactPaginate from 'react-paginate';
import style from "../../styles/modules/pagination.module.scss";
import { ToTop } from '@/components/pageFormat/main';

//https://www.youtube.com/watch?v=HANSMtDy508

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
	let theme = useContext(ThemeContext);
	let themeClass;

	switch(theme) {
		case "ri":
		default:
			themeClass = style.ri;
	}

	const [packs, setPacks] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

	const itemsPerPage = 5;
	const itemsIndex = pageNumber * itemsPerPage;
	const totalPageCount = Math.ceil(packs.length/itemsPerPage);

	let display = packs.slice(itemsIndex, itemsIndex + itemsPerPage);

	const changePage = ({selected}) => {
		setPageNumber(selected);
	}

	/* Fetch the data */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch("https://noktalis.github.io/ak-stickers/info.json");
			const obj = await response.json();
			console.log(obj);
			setPacks(obj);
		}
		fetchData()
		.catch(console.error);
	},[])

	return (
		<div>
			<h1 style={{textAlign:"center"}}>Arknights Sticker Archive</h1>
			<h4 style={{textAlign:"center"}}>Ordered by CN release date | Newest first</h4>
			<ReactPaginate
				previousLabel={
					<svg width="30px" height="30px" viewBox="0 -1 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				}
				nextLabel={
					<svg width="30px" height="30px" viewBox="0 -3 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 6L15 12L9 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				}
				pageCount={totalPageCount}
				onPageChange={changePage}
				containerClassName={`${style.container} ${themeClass}`}
				pageLinkClassName={style.pagebutton}
				activeClassName={style.selected}
				previousLinkClassName={style.prev}
				nextLinkClassName={style.next}
				disabledClassName={style.disabledarrow}
				style={{textAlign:"center"}}
			/>

			{display.map((pack) => <AKStickerGallery packData={pack}></AKStickerGallery>)}

			<div style={{textAlign:"right"}}>
				<ToTop/>
			</div>
			
		</div>
	);
}

