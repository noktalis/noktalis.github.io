import format from "../../styles/modules/pagination.module.scss";

export default function PaginateNav() {
	return(
		<div className={format.container}>
			<FastBackwardButton/>
			<BackButton/>
		</div>
	);
}

function BackButton() {
	return(
		<button>
			<img src="/images/left.svg"/>
		</button>
	);
}

function FastBackwardButton(){
	return(
		<button>
			<img src="/images/fast-backward.svg"/>
		</button>
	);
}