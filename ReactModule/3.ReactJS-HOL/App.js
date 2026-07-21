import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        name="Bhavya Vijaya Sree"
        school="Vignan Institute of Engineering for Women"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;