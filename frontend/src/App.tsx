import "./App.css";
import { Home } from "./components/Home/Home";
import useFetch from "./hooks/useFetch";

function App() {
	
	useFetch()

	return (
		<Home/>
	);
}

export default App;
