import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUser } from "./components/ListOfUser";
function App() {
	return (
		<>
			<h1>Nuestro poyecto con Redux</h1>
			<ListOfUser />
			<CreateNewUser />
		</>
	);
}

export default App;
