import React from "react";

const Pagination = ({ reviewsPerPage, totalReviews, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav className="pageNumbersNav">
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<a
							href="!#"
							onClick={() => paginate(number)}
							className="page-link"
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default Pagination;
