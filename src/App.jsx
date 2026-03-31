import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Rating from "./components/Rating/Rating";
import ToolsDisplay from "./components/ToolsDisplay/ToolsDisplay";
import Workflow from "./components/Workflow/Workflow";
import { ToastContainer } from "react-toastify";

const productsDataPromise = fetch("/productsData.json").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Rating />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-250">
            <span className="w-25 loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <ToolsDisplay productsDataPromise={productsDataPromise} />
      </Suspense>
      <GetStarted />
      <Pricing />
      <Workflow />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
