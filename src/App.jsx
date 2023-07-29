import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto w-[80vw] h-screen flex flex-col  ">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
