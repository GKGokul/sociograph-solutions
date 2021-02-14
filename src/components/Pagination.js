import React from "react";

const Pagination = ({
	reviewsPerPage,
	totalReviews,
	paginate,
	loading,
	toggleDarkTheme,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav
			className={
				"pageNumbersNav" +
				(loading ? " pageNumberHider" : "") +
				(toggleDarkTheme ? " dark-mode" : "")
			}
		>
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
