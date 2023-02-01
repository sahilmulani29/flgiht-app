import { useContext } from "react";
import { Filters, FlightsType } from "../../constant/types";
import { AppContext } from "../../context/app-context";
import { getSearchResult } from "../../utils/common-utils";
import { Header } from "../header/Header";
import { SearchBar } from "../search-bar/SearchBar";
import { Flights } from "../flights/Flights";
import "./home.module.css";
import { Filter } from "../advanced_filter/Filter";
import React from "react";

export const Home = () => {
	const appCtx = useContext(AppContext);

	const onFilterData = (filters: Filters) => {
		const searchResult = getSearchResult(filters, appCtx.rootState.flights);
		appCtx.setRootStateHandler({
			...appCtx.rootState,
			filteredFlights: searchResult as Map<string, FlightsType[]>,
			appliedFilters: filters,
		});
	};

	const onSearchClick = (filters: Filters) => {
		onFilterData({ ...filters, advancedFilter: "Best" });
	};

	const _renderHeader = () => {
		return <Header />;
	};
	
	const onAdvanceFilterSelect = (selectedFilter: string) => {
		const filters = appCtx.rootState.appliedFilters;
		if (filters?.advancedFilter === selectedFilter) {
			return;
		}
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
				{_renderHeader()}
				{_renderSearchBar()}
				{_renderAdvanceFilter()}
				{_renderFlights()}
			</div>
		</>
	);
};
