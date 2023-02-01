import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import "./Header.css";

export const Header = () => {
	const appCtx = useContext(AppContext);
	const from = appCtx.rootState.appliedFilters?.source;
	const to = appCtx.rootState.appliedFilters?.destination;

	return (
		<div className="headercover">
			<h2>Explore the World!!!</h2>
			{from && to ? <h2>{`${from} ----> ${to}`}</h2> : <></>}
		</div>
	);
};
