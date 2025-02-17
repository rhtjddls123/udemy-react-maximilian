import "./App.css";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="my-8 h-screen flex gap-8">
      <SideBar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
