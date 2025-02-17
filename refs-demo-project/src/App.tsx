import "./App.css";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="my-8 h-screen flex gap-8">
      <SideBar />
      <NewProject />
    </main>
  );
}

export default App;
