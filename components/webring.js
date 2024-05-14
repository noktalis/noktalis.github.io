import format from "/styles/modules/webring.module.scss";
import { useState, useEffect } from "react";

// site indices
let siteIndex;
let home = 0;	// all initialized to 0 here for initial state of sites
let prev = 0;
let next = 0;
let here = 0;

const thisSite = "https://noktalis.github.io/webring/";

/**Displays links and information about adjacent members in the webring,
 * along with a link to the webring home on xue's site.
 * 
 * @var {Object[]} sites	- An array of (json) objects
 * 								Inital state: sites is an array of length one. The only item is an empty object.
 * @function setSites		- Reassigns the value of sites and triggers a reload of the page with new data from
 * 								the async function.
 * 
 * @returns	- A display of webring data including:
 * 				A link to the previous site in the webring
 * 				The name of the person running the previous site
 * 				(static) previous site's ico
 * 				A link to the next site in the webring
 * 				The name of the person running the next site
 * 				(static) next site's ico
 * 				A link to the webring home
 * 				The name of the current site
 * 				(static) current site's ico
 */
export default function WebringDisplay(){
	const [sites, setSites] = useState([{title: "placeholder"}]);
	const hostURL = "/json/weebring.json";

	/**Fetches, processes, and selects webring data to be used
	 * 
	 * @const fetchData	- const to prevent repeat calls that can race
	 * 						Only intend to use this function for the initial page loading
	 */
	useEffect(() => {
		const fetchData = async () =>{
			/* Fetch request */
			const response = await fetch(hostURL);
			const obj = await response.json();
			const sites = obj.sites;	// array of sites in webring

			/* Update site indices */
			here = findSiteIndex(sites);						// current site
			prev = (here - 1 + sites.length) % sites.length;	// previous site
			next = (here + 1) % sites.length;					// next site

			console.log(`site index: ${here}
			 			prev site: ${prev}
						home: ${home}
						next site: ${next}
						sites: ${sites}`);
			
			setSites(sites);
		}
		fetchData()
		.catch(console.error);
	}, [])

	return(
		// Container is split into three columns for prev, home, and next
		<div className={format.container}>

			{/* prev */}
			<div className={format.prev}>
				<a title={sites[prev].title} href={sites[prev].shortURL} className={format.link} target='_blank'>
					Prev
					<div className={format.imgContainer}>
						<img src="https://sincerelyandyourstruly.neocities.org/images/icons/xiaoico.png"></img>
					</div>
				</a>
				<div className={format.desc}>
					<h2>{sites[prev].title}</h2>
					<h4>Run by {sites[prev].runBy}!</h4>
				</div>
			</div>

			{/* home */}
			<div className={format.home}>
				<a title={sites[home].title} href={sites[home].shortURL} className={format.link} target='_blank'>
					Weebring Home
					<div className={format.imgContainer}>
						<img src="/ventiico.png"></img>
					</div>
				</a>
				<div className={format.desc}>
					<h4>Currently you're at</h4>
					<h2>{sites[here].title}</h2>
				</div>
			</div>

			{/* next */}
			<div className={format.next}>
				<a title={sites[next].title} href={sites[next].shortURL} className={format.link} target='_blank'>
					Next
					<div className={format.imgContainer}>
						<img src="https://betweenseasons.neocities.org/theme/images/icons/kazuico.png"></img>
					</div>
				</a>
				<div className={format.desc}>
					<h2>{sites[next].title}</h2>
					<h4>Run by {sites[next].runBy}!</h4>
				</div>
			</div>	
		</div>
	);
}

/**
 * Finds the index of the current site in the webring
 * 
 * @param {Object[]} sites	- sites of sites that are part of the webring
 * @returns index of current site
 */
function findSiteIndex(sites){
	siteIndex = null;

	// Search through sites of webring sites
	for (let i = 0; i < sites.length; i++) {
        let site = sites[i];

        // Compares current site's url with those of webring members
        if (thisSite == site.url || thisSite == site.shortURL) {
            siteIndex = i;
            break;
        } 
    }

	// Index remains null if site couldn't be found
	if (siteIndex == null){
		console.log(`Could not find current site in webring.
    	Current site: ${thisSite}`);
	}
	return siteIndex;
}

/**References
 * https://stackoverflow.com/a/67949850 
 * https://stackoverflow.com/questions/72098665/how-to-use-data-of-an-async-function-inside-a-functional-component-to-render-htm
 * https://stackoverflow.com/questions/67949709/how-to-render-something-that-is-async-in-react
 * https://react.dev/reference/react/useEffect
 */