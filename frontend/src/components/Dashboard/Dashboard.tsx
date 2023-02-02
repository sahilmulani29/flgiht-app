import { useContext } from "react";
import { Filters, FlightsType } from "../../constant/types";
import { AppContext } from "../../context/app-context";
import { getSearchResult } from "../../utils/common-utils";
import { SearchBar } from "../search-bar/SearchBar";
import { Flights } from "../flights/Flights";
import "./Dashboard.css";
import { Filter } from "../advanced_filter/Filter";
import React from "react";
import { Container } from "../common/Container/Container";
import { Spinner } from "../common/Spinner/Spinner";

export const Home = () => {
	const appCtx = useContext(AppContext);

	const onFilterData = (filters: Filters) => {
		const searchResult = getSearchResult(filters, appCtx.rootState.flights);
		setTimeout(()=>{
			appCtx.setRootStateHandler({
				...appCtx.rootState,
				filteredFlights: searchResult as Map<string, FlightsType[]>,
				appliedFilters: filters,
				isLoading: false
			});
		},1500)
	};

	const onSearchClick = (filters: Filters) => {
		appCtx.setRootStateHandler({...appCtx.rootState, isLoading: true})
		onFilterData({ ...filters, advancedFilter: "Best" });
	};
	
	const onAdvanceFilterSelect = (selectedFilter: string) => {
		const filters = appCtx.rootState.appliedFilters;
		if (filters?.advancedFilter === selectedFilter) {
			return;
		}
		appCtx.setRootStateHandler({...appCtx.rootState, isLoading: true})
		onFilterData({ ...(filters as Filters), advancedFilter: selectedFilter });
	};

	const _renderSearchBar = () => {
		return <SearchBar onSearchClick={onSearchClick} />;
	};

	const _renderAdvanceFilter = () => {
		const flights = appCtx.rootState.filteredFlights;
		if (flights?.size) {
			return <Filter onAdvanceFilterSelect={onAdvanceFilterSelect} />;
		}
	};

	const _renderFlights = () => {
		const flights = appCtx.rootState.filteredFlights;
		if (flights?.size) {
			return (
				<div>
					{[...flights.keys()].map((value) => (
						<Flights
							key={value}
							service={value}
							flightsData={flights.get(value)}
						/>
					))}
				</div>
			);
		}
	};

	return (
		<>
			<div className="home-container">
				<Container>
					{_renderSearchBar()}
					{
						!appCtx.rootState.isLoading ? 
							appCtx.rootState.filteredFlights.size > 0 ? 
								<>
									{_renderAdvanceFilter()}
									{_renderFlights()}
								</> 
							:
								appCtx.rootState.appliedFilters?.source ?
									<div className="error-container">
										<h1>Data not found</h1>
									</div>
								:
									<></>
						: <Spinner/>}
					{}
				</Container>
			</div>
		</>
	);
};
