import mobileHero from "./assets/images/illustration-sign-up-mobile.svg";

function App() {
  return (
    <main>
      <img src={mobileHero} alt="mobile hero image" className="w-full" />
      <h1>Stay Updated</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form>
        <label htmlFor="email">Email address </label>
        <input
          className="block"
          type="email"
          id="email"
          name="email"
          placeholder="email@company.com"
        />
      </form>
    </main>
  );
}

export default App;
