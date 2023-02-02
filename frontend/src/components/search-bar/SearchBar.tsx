import { useState } from "react";
import { cities } from "../../constant/data-constant";
import "./SearchBar.css";
import React from "react";

export const SearchBar = (props: any) => {
	const { onSearchClick } = props;
	const [source, setSource] = useState<string>("Delhi");
	const [destination, setDestination] = useState<string>("Berlin");
	const [departDate, setDepartDate] = useState<string>("2023-02-12");
	const [seats, setSeats] = useState<number>(1);
	const [isCityError, setCityError] = useState<boolean>(false);
	const [isSeatsError, setSeatsError] = useState<boolean>(false);

	const onSubmit = (evt: any) => {
		evt.preventDefault();
		if (source === destination) {
			setCityError(true);
			return;
		} else {
			isCityError && setCityError(false);
		}
		if (seats > 50) {
			setSeatsError(true);
			return;
		} else {
			isSeatsError && setSeatsError(false)
		}
		onSearchClick({
			source,
			destination,
			departDate,
			seats,
		});
	};

	return (
		<>
			<form
				className="search-container"
				onSubmit={(event) => {
					onSubmit(event);
				}}
			>
				<div className="row">
					<span>From</span>
					<select
						aria-label={'from-city'}
						required
						value={source}
						onChange={(evt) => {
							setSource(evt.target.value);
						}}
					>
						{cities.map((city) => (
							<option key={city} value={city}>
								{city}
							</option>
						))}
					</select>
				</div>
				<div className="row">
					<span>To</span>
					<select
						aria-label={'to-city'}
						required
						value={destination}
						onChange={(evt) => {
							setDestination(evt.target.value);
						}}
					>
						{cities.map((city) => (
							<option key={city} value={city}>
								{city}
							</option>
						))}
					</select>
				</div>
				<div className="row">
					<span>Depart <span className="small-text">(Data avaiable for date : 12/2/23)</span></span>
					<input
						aria-label={'depart'}
						required
						min={new Date().toString()}
						value={departDate}
						type="date"
						onChange={(evt) => {
							setDepartDate(evt.target.value);
						}}
					/>
				</div>
				<div className="row">
					<span>Seats</span>
					<input
						aria-label={'seats'}
						value={seats}
						type="number"
						onChange={(evt) => {
							setSeats(Number(evt.target.value));
						}}
					/>
				</div>
				<div className="row">
					<button aria-label={'search-btn'} className="submit-btn" type="submit">
						Search
					</button>
				</div>
			</form>
			{isCityError ? <span className="error-msg">The city can not be same</span> : <></>}
			{isSeatsError ? <span className="error-msg">Seats can not be greater than 50</span> : <></>}
		</>
	);
};
