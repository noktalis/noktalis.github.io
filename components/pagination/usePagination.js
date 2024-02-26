/**
 * https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
 */

import { useMemo } from 'react';

export const DOTS = '...';

// Determines which "entries" from the list of items are visible on the page?
const range = (start, end) => {
	let length = end - start + 1;

	// Create an array of certain length and set the elements within it from start value to end value.
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage
}) => {
	// Returns what page numbers will be visible in the bottom page navigation of the paginatation component
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);

		// Page count at the bottom
		// siblingCount + firstPage + lastPage + currentPage + 2*DOTS
		const totalPageNumbers = siblingCount + 5;

		/** Case 1:
		 * 		total # of pages < max page visible
		 * 		return range for all pages, [1..totalPageCount]
		*/
		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}
		
		// Calculate left & right siblings while keeping them within bounds
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
	
		/* 	Determine whether to show dots
				Should not be shown if there is only one page between siblings and endpoints
				as that page number would just go there instead of dots
			Dots should start to appear when siblings have 3 or more pages between them and the endpoints
				e.g. (1) ... (4), pages 1-3 are before page 4
		 */
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
	
		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;
	
		/** Case 2:
		 * 		Close to left. Only right dots shown, no left dots visible.
		*/
		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);
	
			return [...leftRange, DOTS, totalPageCount];
		}
	
		/**	Case 3: 
		 * 		Close to right. Only left dots shown, no right dots visible.		
		 */
		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount
			);
			return [firstPageIndex, DOTS, ...rightRange];
		}
		
		/** Case 4: 
		 * 		Both left and right dots to be shown
		*/
		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}

		console.log("How did we get here? Something went wrong.");
		
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};

