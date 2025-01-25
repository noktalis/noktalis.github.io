import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import React, { useState, useEffect, useContext } from 'react';
import AKStickerGallery from '@/components/ak/stickergallery';
import ReactPaginate from 'react-paginate';
import style from "@/styles/modules/pagination.module.scss";
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

	// paginate sticker galleries
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

	// page content
	return (
		<div>
			<h1 style={{textAlign:"center"}}>Arknights Sticker Archive</h1>
			<h4 style={{textAlign:"center"}}>Ordered by CN release date | Newest first</h4>
			<p style={{textAlign:"center"}}>Shoutout to Xue for also translating all <br/>the Chinese text and helping fetch sticker sheets & CN release dates from Weibo!</p>
			<details>
				<summary>Dev Notes</summary>
				<small>
					<p>When I first started gathering Arknights stickers, the Arknights Archive Tumblr blog didn't exist yet. I had hoped there would be an archive for Arknights images and assets just like Genshin has, but searching on Tumblr yielded nothing at the time. I sorta gave up on on making a sticker archive for a while since I couldn't navigate around Weibo for being ~a filthy American~ until deciding to just settle lower resolution and began gathering stickers again. It was a horrible decision, by the way. I was going to crop out the stickers from the sticker sheets that <a href='https://www.youtube.com/@oyuki' target='_blank'>oyuki</a> reposted on <a href='https://twitter.com/oyuki_gms' target='_blank'>their Twitter</a>, which would have been absolutely shit quality.</p>
					<p>Eventually I noticed that they missed a few sticker packs, so I asked my friend Xue (mentioned above, go check out their much more regularly-maintained site!) if they could work around The Wall that was Weibo's account requirement to find them. They ended up nabbing every single sticker sheet that had been released up to that point and each pack's announcement/release dates on CN! From there I was trying to edit the stickers officially provided to EN (which were a decent resolution) to look like the ones on CN, looking for low-res references from what I could find. Along the way, I found a page of stickers.wiki that had the stickers in the best resolution I have ever found for the stickers.</p>
					<p>And <em>that</em> is basically how I discovered someone finally made the Arknights Archive Tumblr blog! And they have <em>all</em> the stickers in good resolution! So I basically downloaded all the stickers from them. Because that was easier and turned out higher quality than whatever fuckery <em>I</em> was doing. After that it took an embarrassingly long time to realize they also had all the links to the Weibo announcements of <em>each individual sticker pack</em> that I just missed for some reason! (I was probably too excited about finding the stickers in high quality...)</p>
					<p>So yeah! This sticker archive wouldn't be possible without help from Xue, dreadark running the Arknights Archive blog, and oyuki, even though I've only ever directly spoken with Xue :D</p>
				</small>
			</details>
			
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
			/>

			{display.map((pack) => <AKStickerGallery packData={pack}></AKStickerGallery>)}

			<div style={{textAlign:"center"}}>
				<ToTop/>
			</div>
			
		</div>
	);
}

