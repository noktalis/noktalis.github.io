import Head from 'next/head';
import Layout from '@/components/pageFormat/layout';
import { ThemeContext } from '@/components/pageFormat/ThemeContext';
import { FandomContext } from '@/components/pageFormat/FandomContext';
import React, { useState, useEffect, useContext } from 'react';
import style from "@/styles/modules/pagination.module.scss";
import Nav2Col from '@/components/nav2Col';
import StickerButtonLink from '@/components/stickerbtnlink';


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

	// page content
	return (
		<div>
			<h1 style={{textAlign:"center"}}>Arknights Sticker Archive</h1>
			<h4 style={{textAlign:"center"}}>For the EN peasants like me that still want stickers</h4>

			<Nav2Col>
				<StickerButtonLink
					href={"/ak/stickers/gallery"}
					btnTitle={"Gallery"}>
						Gallery
				</StickerButtonLink>
				<span>For sticker admiration purposes!</span>
				<span>For slightly more organized sticker admiration purposes</span>
				<StickerButtonLink
					href={"/ak/stickers/"}
					btnTitle={"Catalogue"}>
						Catalogue
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/stickers/"}
					btnTitle={"Search"}>
						Search
				</StickerButtonLink>
				<span>I don't look forward to creating this one but it's necessary!</span>
			</Nav2Col>

			<details>
				<summary>Dev Notes</summary>
				<small>
					<p>When I first started gathering Arknights stickers, the Arknights Archive Tumblr blog didn't exist yet. I had hoped there would be an archive for Arknights images and assets just like Genshin has, but searching on Tumblr yielded nothing at the time. I sorta gave up on on making a sticker archive for a while since I couldn't navigate around Weibo for being ~a filthy American~ until deciding to just settle on lower resolution and began gathering stickers again. It was a horrible decision, by the way. I was going to crop out the stickers from the sticker sheets that <a href='https://www.youtube.com/@oyuki' target='_blank'>oyuki</a> reposted on <a href='https://twitter.com/oyuki_gms' target='_blank'>their Twitter</a>, which would have been absolutely shit quality.</p>
					<p>Eventually I noticed that they missed a few sticker packs, so I asked my friend <span className={style.xue}>
					<a href="https://sincerelyandyourstruly.neocities.org/" target="_blank">Xue</a></span> (go check out their much more regularly-maintained site!) if they could work around The Wall that was Weibo's account requirement to find them. They ended up nabbing every single sticker sheet that had been released up to that point and each pack's announcement/release dates on CN! From there I was trying to edit the stickers officially provided to EN (which were a decent resolution) to look like the ones on CN, looking for low-res references from what I could find. Along the way, I found a page of stickers.wiki that had the stickers in the best resolution I have ever found for the stickers.</p>
					<p>And <em>that</em> is basically how I discovered someone finally made the Arknights Archive Tumblr blog! And they have <em>all</em> the stickers in good resolution! So I basically downloaded all the stickers from them because this was easier and turned out higher quality than whatever fuckery <em>I</em> was doing. And yeah, this is kinda just a copy of the stickers I can look at whenever I want in case their Library of Alexandria burns down. After that it took an embarrassingly long time to realize they also had all the links to the Weibo announcements of <em>each individual sticker pack</em> (oyuki had only linked to the Arknights Choearth blog) that I just missed for some reason! (I was probably too excited about finding the stickers in high quality...)</p>
					<p>So yeah! This sticker archive wouldn't be possible without help from Xue, dreadark running the Arknights Archive blog, and oyuki, even though I've only ever directly spoken with Xue about this archive :D</p>
				</small>
			</details>
			
			
		</div>
	);
}

