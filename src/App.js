import { useState } from "react";
import { Nav, Header, Main, Footer, Home } from "./components";

const APP = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <Nav />
      <Header />
      {start ? <Main /> : <Home />}
      {!start && (
        <div className="w-full flex items-center justify-center mb-8">
          <button
            onClick={() => {
              setStart(true);
            }}
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Start
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default APP;
