import { Toaster } from "sonner";
import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUser } from "./components/ListOfUser";
function App() {
	return (
		<>
			<h1>Nuestro poyecto con Redux</h1>
			<ListOfUser />
			<CreateNewUser />
			<Toaster richColors />
		</>
	);
}

export default App;
