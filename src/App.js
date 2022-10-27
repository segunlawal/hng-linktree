import "./App.css";

function App() {
  return (
    <div className="App mt-16 justify-center">
      <div className="profile-section flex flex-col">
        <div className="cursor-pointer share-box border-dashed flex items-center justify-center border-2 w-10 h-10 -mb-5 rounded-full">
          <picture>
            <source
              media="(min-width: 640px)"
              srcset={require("./assets/share.png")}
            />
            <img
              src={require("./assets/share-mobile.png")}
              alt="profile-img"
              className="rounded-full"
            />
          </picture>
        </div>
        <img
          src={require("./assets/profile_img.jpg")}
          alt="profile-img"
          className="w-20 mx-auto rounded-full"
          id="profile__img"
        />
        <p className="font-bold mt-2" id="twitter">
          Segun__Lawal
        </p>
        <p className="font-bold mt-2 hidden" id="slack">
          segunlawal
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
          target="_blank"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="btn__zuri"
        >
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team"
          target="_blank"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="books"
        >
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=segunlawal"
          target="_blank"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="book__python"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          target="_blank"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="pitch"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          className="gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg sm:mb-0 mb-12"
          id="book__design"
        >
          Design Books
        </a>
        <div className="hidden sm:flex links-icons gap-7 mx-auto">
          <a href="/">
            <img src={require("./assets/slack.png")} alt="slack" />
          </a>
          <a href="/">
            <img src={require("./assets/github.png")} alt="github" />
          </a>
        </div>
      </div>
      <div className="hidden sm:block footer my-20 mx-28">
        <hr className="border-t-1" />
        <div className="footer-logos flex justify-between mt-10">
          <img src={require("./assets/zuri.png")} alt="zuri" className="w-48" />
          <p className="gray-text2">HNG Internship 9 Frontend Task</p>
          <img src={require("./assets/I4G.png")} alt="I4G" className="w-32" />
        </div>
      </div>
    </div>
  );
}

export default App;
