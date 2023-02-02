import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import "./Filter.css";
import React from "react";
import { AdvancedFilter } from "../../constant/data-constant";

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
						{
							AdvancedFilter.map((filter=>(
								<button
									key={filter}
									aria-label={filter}
									className={selectedFilter === filter ? 'active-filter' : ''}
									type="button"
									onClick={() => {
										onFilterClick(filter);
									}}
								>
									{filter}
								</button>
							)))
						}
					</div >
				:
					<></>
			}
		</>
	);
};
