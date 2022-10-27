import "./App.css";

function App() {
  return (
    <div className="App mt-16 justify-center">
      <div className="profile-section flex flex-col">
        <img
          src={require("./assets/profile_img.jpg")}
          alt="profile-img"
          className="w-20 mx-auto rounded-full"
          id="profile_id"
        />
        <p className="font-bold mt-2" id="twitter">
          Segun__Lawal
        </p>
        <p className="font-bold mt-2 hidden" id="slack">
          Segun
        </p>
      </div>

      <div className="links-section mt-14 flex flex-col gap-6">
        <a
          href="/"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
        >
          Twitter Link
        </a>
        <a
          href="https://training.zuri.team/"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="btn__zuri"
        >
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="books"
        >
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=segunlawal"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="book__python"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="pitch"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="book__design"
        >
          Design Books
        </a>
      </div>
    </div>
  );
}

export default App;
