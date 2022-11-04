import { useEffect } from "react";
import Footer from "./Footer";
function Contact() {
  const name = "segunlawal";
  const sendMessage = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    e.target.reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="lg:inline-block lg:mx-auto ml-4 md:mb-[188px] mb-[66px] lg:mt-[156px] mt-14">
        <p className="font-semibold text-left text-4xl text-[#101828] leading-[44px] tracking-[-0.02em]">
          Contact Me
        </p>
        <p className="text-left text-[#475467] text-xl leading-[30px] mt-5">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="text-left mt-12" onSubmit={sendMessage}>
          <div className="lg:flex gap-6">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="first_name"
                className="text-left font-medium text-sm text-[#344054] leading-5"
              >
                First name
              </label>
              <input
                type="name"
                id="first_name"
                placeholder="Enter your first name"
                className="bxshadow py-[10px] px-[14px] text-left w-[343px] md:w-[348px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg outline-none focus:border-[1px] focus:border-[#84CAFF]"
                required
                spellCheck="false"
                name="first"
              />
            </div>
            <div className="flex flex-col gap-1.5 lg:mt-0 mt-6">
              <label
                htmlFor="last_name"
                className="text-left font-medium text-sm text-[#344054] leading-5"
              >
                Last name
              </label>
              <input
                type="name"
                id="last_name"
                placeholder="Enter your last name"
                className="bxshadow py-[10px] px-[14px] text-left w-[343px] md:w-[348px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg outline-none focus:border-[1px] focus:border-[#84CAFF]"
                required
                spellCheck="false"
                name="last_name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-6">
            <label
              htmlFor="email"
              className="text-left font-medium text-sm text-[#344054] leading-5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              className="bxshadow peer py-[10px] px-[14px] text-left md:w-[720px] w-[343px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg outline-none focus:border-[1px] focus:border-[#84CAFF] "
              required
              spellCheck="false"
              autoComplete="off"
              name="email"
            />
            <p className="email-hint hidden peer-focus:block text-left text-sm text-[#475467] font-light">
              Please enter a valid email address.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 mt-6">
            <label
              htmlFor="message"
              className="text-left font-medium text-sm text-[#344054] leading-5"
            >
              Message
            </label>
            <textarea
              className="bxshadow peer txtarea py-[10px] px-[14px] text-left w-[343px] md:w-[720px] h-[108px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg resize-none outline-none focus:border-[1px] focus:border-[#84CAFF]"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
              name="message"
            />
            <p className="txtarea-hint hidden peer-focus:block text-left text-[#F83F23] font-medium text-sm">
              Please enter a message
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <input type="checkbox" name="checkbox" className="w-5" required />
            <label htmlFor="checkbox" className="text-left text-[#475467]">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
          <button
            type="submit"
            className="bxshadow submit-button mt-11 bg-[#1570EF] border-[1px] text-white py-[12px] md:w-[720px] w-[343px] rounded-lg hover:bg-[#175CD3] disabled:bg-[#B2DDFF]"
            id="btn__submit"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
