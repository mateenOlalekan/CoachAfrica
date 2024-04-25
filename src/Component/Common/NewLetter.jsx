function Newsletter() {
  return (
    <div className="News-container relative py-20 bg-[#F7FFF6]">
      <div className="News-Content flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-[50px] overflow-hidden"
          width="67"
          height="52"
          viewBox="0 0 67 52"
          fill="none"
        >
          <path
            d="M52.3924 49.3466C55.1652 28.9068 48.7688 -12.7439 1.00012 -15.8289"
            stroke="#FAAF18"
            strokeWidth="28"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute overflow-hidden bottom-0 left-[100px]"
          width="44"
          height="53"
          viewBox="0 0 44 53"
          fill="none"
        >
          <path d="M33.6566 11C18.8233 25.3333 -1.9434 62 33.6566 94" stroke="#029837" strokeWidth="28" />
        </svg>
        <h1 className="font-bold text-3xl mb-4">Subscribe to our newsletter</h1>
        <p className="text-center mb-8">
          We recommend you to subscribe to our newsletter, drop
          <br />
          your email below to get daily updates about us
        </p>
        <div className="News-input flex justify-center items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#f2f1f1] border border-[#e5e5e5] rounded-md px-4 py-2 focus:bg-transparent focus:outline-none"
          />
          <button className="bg-[#029837] text-white rounded-sm px-6 py-2.5 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
