import Header from "./components/Header";
import Result from "./components/Result";
import UserInputSection from "./components/UserInputSection";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <UserInputSection />
        <Result />
      </main>
    </div>
  );
}

export default App;
