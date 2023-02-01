import { FlightsType } from "../../constant/types";
import "./Flights.css";
export const Flights = (props: any) => {
	const { service, flightsData } = props;
	const getCurrencyFormat = (amt: number, currCode: string) => {
		const options = { style: "currency", currency: currCode };
		return new Intl.NumberFormat("de-DE", options).format(amt);
	};
	return (
		<>
			{flightsData.length > 0 ? (
				<div className="flight-container">
					<h3 className="service-item">{service}</h3>
					{flightsData.map((data: FlightsType) => (
						<div key={data.id} className="data-item">
							<div>
								{data.origin} &nbsp;
								<span style={{ fontSize: "1.5em" }}>&#8594;</span>
								&nbsp; {data.destination}
							</div>
							<div>{`Time: ${data.time}:00 hours`}</div>
							<div>{`Price: ${getCurrencyFormat(
								data.price.amount,
								data.price.currency
							)} `}</div>
							<div>
								<button className="book-btn">Book</button>
							</div>
						</div>
					))}
				</div>
			) : (
				<></>
			)}
		</>
	);
};
