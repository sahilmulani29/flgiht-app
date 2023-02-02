import { useContext } from "react";
import { AppContext } from "../../../context/app-context";
import "./Header.css";
import React from "react";

export const Header = () => {
	const appCtx = useContext(AppContext);
	const from = appCtx.rootState.appliedFilters?.source ?? 'Delhi';
	const to = appCtx.rootState.appliedFilters?.destination ?? 'Berlin';

	return (
		<div className="headercover">
			<h2>{`${from}`} <span>&#9992;</span> {`${to}`}</h2>
		</div>
	);
};
