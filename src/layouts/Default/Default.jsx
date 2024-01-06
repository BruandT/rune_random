import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

function Default() {
  return (
    <>
      <div className='flex'>
        <div>
          <Navigation />
        </div>
        <div className='flex flex-grow flex-col'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Default;
