import checkIcon from "../assets/images/icon-list.svg";
``;
import { useState } from "react";

function Content() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit() {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setError(!isValid);
  }

  return (
    <div className="px-5 ">
      <h1 className="font-bold text-[2.5em] mb-6">Stay Updated</h1>
      <p className="mb-6">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="mb-10">
        <li className="flex gap-3 mb-2">
          <img src={checkIcon} alt="check icon" /> Product discovery and
          building what matters
        </li>
        <li className="flex gap-4 mb-2">
          <img src={checkIcon} alt="check icon" />
          Measuring to ensure updates are a success
        </li>
        <li className="flex gap-4 mb-2">
          <img src={checkIcon} alt="check icon" />
          And much more!
        </li>
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="text-[0.75em] text-btn font-bold">
            Email address
          </label>
          {error && (
            <span className="text-[0.75em] text-red-500 font-bold ">
              Valid Email Required
            </span>
          )}
        </div>
        <input
          className={`block mb-6 w-full py-3 px-3 border rounded-lg outline-none ${error ? "border-red-500 bg-red-100 text-red-500" : "border-form-border"}`}
          type="text"
          id="email"
          name="email"
          placeholder="email@company.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          value="Subscribe to monthly newsletter"
          className="bg-btn w-full text-white py-3 rounded-lg font-bold"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Content;
