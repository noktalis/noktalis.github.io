import format from "../styles/modules/gallery.module.scss";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";

export default function Gallery({path}){
	const theme = useContext(ThemeContext);
	const [images, setImages] = useState([{src:"",alt:""}]);

	let themeClass;

	switch (theme) {
		case 'mond':
		default:
			themeClass = format.mond;
	}

	/* Fetch the data for main main */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const data = obj.images;	// array of button data

			console.log(data);
			setImages(data);
		}
		fetchData()
		.catch(console.error);
	},[])

	return(
		<div className={`${format.container} ${themeClass}`}>
			{images.map(({src,alt}, index) => <img src={src} alt={alt} key={index}/>)}
		</div>
	);
}



