function Footer() {
  return (
    <div>
      <div className=" sm:block footer mt-20 mb-8 md:mx-28 mx-4">
        <hr className="border-t-1" />
        <div className="footer-logos md:flex justify-between mt-10">
          <img
            src={require("../assets/zuri.png")}
            alt="zuri"
            className="w-48 h-9"
          />
          <p className="text-[#667085] text-left my-4">
            HNG Internship 9 Frontend Task
          </p>
          <img
            src={require("../assets/I4G.png")}
            alt="I4G"
            className="w-32 h-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
