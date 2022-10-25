import "./App.css";

function App() {
  return (
    <div className="App mt-16 flex justify-center">
      <div className="profile-section">
        <img
          src={require("./assets/profile_img.jpg")}
          alt="profile-img"
          className="w-20 ml-3 rounded-full"
          id="profile_id"
        />
        <p className="font-bold mt-2" id="twitter">
          Segun__Lawal
        </p>
        <p className="font-bold mt-2 hidden" id="slack">
          Segun
        </p>
      </div>
    </div>
  );
}

export default App;
