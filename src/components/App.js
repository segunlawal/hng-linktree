import "../App.css";
import Footer from "./Footer";
function App() {
  return (
    <div className="App mt-16 justify-center">
      <div className="profile-section flex flex-col">
        <div className="tooltip cursor-pointer hover:bg-[#F9FAFB] ml-[78%] border-dashed flex items-center justify-center border-2 w-10 h-10 -mb-5 rounded-full">
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet={require("../assets/share.png")}
            />
            <img
              src={require("../assets/share-mobile.png")}
              alt="profile-img"
              className="rounded-full"
            />
          </picture>
          <span className="tooltiptext">Share Link</span>
        </div>

        <div className="mx-auto profile">
          <img
            src={require("../assets/profile_img.jpg")}
            alt="profile-img"
            className="profile-img cursor-pointer w-24 rounded-full"
            id="profile__img"
          />
          <div className="absolute opacity-0 change-pic cursor-pointer w-5 ml-10 -mt-7" />
        </div>
        <p className="font-bold mt-2" id="twitter">
          Segun__Lawal
        </p>
        <p className="font-bold mt-2 hidden" id="slack">
          segunlawal
        </p>
      </div>

      <div className="links-section mt-14 flex flex-col gap-6">
        <a
          href="https://twitter.com/Segun__Lawal"
          rel="noreferrer"
          className="link focus:outline focus:outline-1 focus:outline-[#98A2B3] gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
        >
          Twitter Link
        </a>
        <a
          href="https://training.zuri.team/"
          target="_blank"
          rel="noreferrer"
          className="link focus:outline focus:outline-1 focus:outline-[#98A2B3] gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="btn__zuri"
        >
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team"
          target="_blank"
          rel="noreferrer"
          className="link focus:outline focus:outline-1 focus:outline-[#98A2B3] gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="books"
          title="Find books about design and coding!"
        >
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=segunlawal"
          target="_blank"
          rel="noreferrer"
          className="link focus:outline focus:outline-1 focus:outline-[#98A2B3] gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="book__python"
          title="Get a coding book today!"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          target="_blank"
          rel="noreferrer"
          className="link focus:outline focus:outline-1 focus:outline-[#98A2B3] gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg"
          id="pitch"
          title="Find out more about that coder"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noreferrer"
          className="link focus:outline focus:outline-1 focus:outline-[#98A2B3] gray-text gray-bg font-medium text-lg sm:mx-36 mx-4 py-6 rounded-lg sm:mb-0 mb-12"
          id="book__design"
          title="Get a free design book from Zuri"
        >
          Design Books
        </a>
        <div className="flex links-icons gap-7 mx-auto">
          <a href="/" rel="noreferrer">
            <img
              src={require("../assets/slack.png")}
              alt="slack"
              className="w-6"
            />
          </a>
          <a href="https://github.com/segunlawal" rel="noreferrer">
            <img
              src={require("../assets/github.png")}
              alt="github"
              className="w-6"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
