import "./App.css";
import { Home } from "./components/Dashboard/Dashboard";
import useFetch from "./hooks/useFetch";
import React from "react";

function App() {
	
	useFetch()

	return (
		<Home/>
	);
}

export default App;
