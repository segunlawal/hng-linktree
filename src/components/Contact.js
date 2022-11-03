import Footer from "./Footer";
function Contact() {
  const name = "segunlawal";
  return (
    <div>
      <div className="lg:inline-block lg:mx-auto ml-4 md:mb-[188px] mb-[66px] lg:mt-[156px] mt-14">
        <p className="font-semibold text-left text-4xl text-[#101828] leading-[44px] tracking-[-0.02em]">
          Contact Me
        </p>
        <p className="text-left text-[#475467] text-xl leading-[30px] mt-5">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="text-left mt-12">
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
                className="bxshadow py-[10px] px-[14px] text-left w-[343px] md:w-[348px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg"
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
                className="bxshadow py-[10px] px-[14px] text-left w-[343px] md:w-[348px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg"
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
              className="bxshadow py-[10px] px-[14px] text-left md:w-[720px] w-[343px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg"
              required
              spellCheck="false"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-1.5 mt-6">
            <label
              htmlFor="message"
              className="text-left font-medium text-sm text-[#344054] leading-5"
            >
              Message
            </label>
            <textarea
              className="bxshadow py-[10px] px-[14px] text-left w-[343px] md:w-[720px] h-[108px] placeholder:text-[#667085] border-[1px] border-[#D0D5DD] rounded-lg resize-none"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
              name="message"
            />
          </div>
          <div className="mt-6 flex gap-3">
            <input type="checkbox" name="checkbox" className="w-5" />
            <label htmlFor="checkbox" className="text-left text-[#475467]">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
          <button
            type="submit"
            className="bxshadow mt-11 bg-[#1570EF] text-white py-[12px] md:w-[720px] w-[343px] rounded-lg"
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
