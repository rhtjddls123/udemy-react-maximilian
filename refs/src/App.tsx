import "./App.css";
import PlayerRef from "./components/PlayerRef";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      {/* <Player /> */}
      <PlayerRef />
      <div className="flex flex-wrap max-w-3xl gap-8 mx-auto my-12">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
