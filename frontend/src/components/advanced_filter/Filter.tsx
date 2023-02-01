import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import "./Filter.css";

export const Filter = (props: any) => {
	const { onAdvanceFilterSelect } = props;
	const appCtx = useContext(AppContext);
	const selectedFilter = appCtx.rootState.appliedFilters?.advancedFilter || "";
	const flights = appCtx.rootState.filteredFlights;

	const onFilterClick = (selectedFilter: string) => {
		onAdvanceFilterSelect(selectedFilter);
	};

	return (
		<>
			{
				flights?.size > 0 ?
					<div className="filter-container" >
						<button
							className={selectedFilter === 'Best' ? 'active-filter' : ''}
							type="button"
							onClick={() => {
								onFilterClick("Best");
							}}
						>
							Best
						</button>
						<button
							className={selectedFilter === 'Cheapest' ? 'active-filter' : ''}
							type="button"
							onClick={() => {
								onFilterClick("Cheapest");
							}}
						>
							Cheapest
						</button>
						<button
							className={selectedFilter === 'Fastest' ? 'active-filter' : ''}
							type="button"
							onClick={() => {
								onFilterClick("Fastest");
							}}
						>
							Fastest
						</button>
					</div >
				:
					<></>
			}
		</>
	);
};
