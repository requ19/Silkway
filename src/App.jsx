import Home from "./pages/Home";
import reset from './assets/styles/reset.module.scss'
import Partners from "./pages/Partners"
import Residents from "./pages/Residents/Residents";
import ResidentialComplex from "./pages/ResidentialComplex/ResidentialComplex";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <ContactInfo/> */}
      {/* <ResidentialComplex/> */}
      <Residents/>
      {/* <Partners/> */}
    </>
  );
}

export default App;

