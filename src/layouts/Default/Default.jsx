import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Default() {
  return (
    <>
     <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
      </div>
    </>
  );
}

export default Default;
