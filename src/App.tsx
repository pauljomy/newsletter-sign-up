import mobileHero from "./assets/images/illustration-sign-up-mobile.svg";
import checkIcon from "./assets/images/icon-list.svg";

function App() {
  return (
    <main className="font-default">
      <img
        src={mobileHero}
        alt="mobile hero image"
        className="w-full mb-10 font-bold"
      />
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
        <form>
          <label htmlFor="email" className="text-[0.75em] text-btn font-bold">
            Email address
          </label>
          <input
            className="block mb-6 w-full required py-3 px-3 border border-form-border rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="email@company.com"
          />
          <input
            type="button"
            value="Subscribe to monthly newsletter"
            className="bg-btn w-full text-white py-3 rounded-lg font-bold"
          />
        </form>
      </div>
    </main>
  );
}

export default App;
