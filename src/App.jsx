import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-950 w-full h-screen flex items-center justify-center " >
        <h1 className="text-3xl font-bold text-white ">
          Vite + React + Tailwind Startup
        </h1>
      </div>
    </>
  );
}

export default App;
