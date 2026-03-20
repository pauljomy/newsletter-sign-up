import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
  return (
    <main className="font-default  min-h-screen bg-background flex items-center justify-center">
      <div className="xl:flex xl:items-center xl:justify-center bg-white max-w-280 mx-auto rounded-2xl">
        <Hero />
        <Content />
      </div>
    </main>
  );
}

export default App;
