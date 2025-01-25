import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import React, { useState, useEffect, useContext } from 'react';
import AKStickerGallery from '@/components/ak/stickergallery';
import ReactPaginate from 'react-paginate';
import style from "@/styles/modules/pagination.module.scss";
import tabstyle from "@/styles/modules/tabs.module.scss";
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

	// set arknights theme for page
	let theme = useContext(ThemeContext);
	let themeClass;

	switch(theme) {
		case "ri":
		default:
			themeClass = style.ri;
	}

	// set year of gallery display
	const [year, setYear] = useState(0)		// 0: all, 1: 2019, 2: 2020, etc.
	function updateYear(i){
		// update css

		// change data
		// setYear(i)
		// console.log(year)
	}

	// paginate sticker galleries
	const [data, setData] = useState([]) 
	const [ydata, setYData] = useState([])	// 0: 2019, 1: 2020, etc.
	const [packs, setPacks] = useState([])
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
			setData(obj);
			setPacks(obj);

			const y2019 = obj.slice(-17)
			const y2020 = obj.slice(-37, -17)

			// console.log(y2020)
			
			setYData([y2019,y2020])
			// console.log(data)
		}
		fetchData()
		.catch(console.error);
	},[])

	// page content
	return (
		<div>
			<h1 style={{textAlign:"center"}}>Arknights Sticker Archive</h1>
			<h4 style={{textAlign:"center"}}>Ordered by CN release date | Newest first</h4>

			{/* <Tabs>
				<Tab select={true}>All</Tab>
				<Tab>2019</Tab>
				<Tab>2020</Tab>
				<Tab disable={true}>2021</Tab>
				<Tab disable={true}>2022</Tab>
				<Tab disable={true}>2023</Tab>
				<Tab disable={true}>2024</Tab>
				<Tab disable={true}>2025</Tab>
			</Tabs> */}
			
			<ReactPaginate
				previousLabel={
					<svg width="30px" height="30px" viewBox="0 -1 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 6L9 12L15 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				}
				nextLabel={
					<svg width="30px" height="30px" viewBox="0 -3 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 6L15 12L9 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
				renderOnZeroPageCount={null}
			/>

			{display.map((pack) => <AKStickerGallery packData={pack} key={pack["pack"]}></AKStickerGallery>)}

			<div style={{textAlign:"center"}}>
				<ToTop/>
			</div>
			
		</div>
	);
}

