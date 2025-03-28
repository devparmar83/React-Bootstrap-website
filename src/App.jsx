import Header from "./components/Header";
import Carousels from "./components/Carousels";
import Services from "./components/services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




function App(){
  return(
    <>
    <Header/>
    <Carousels />
    <div className="container">
      <div className="row" style={{
        textAlign:"center",
        marginTop:"20px",
      }} >
        <h2>Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, neque.</p>
      </div>
      <div className="row">
        <div className="col">
          <Services/>
        </div>
        <div className="col">
          <Services/>
        </div>
        <div className="col">
          <Services/>
        </div>
        <div className="col">
          <Services/>
        </div>
      </div>
    </div>
    <Contact />
    <Footer/>
    </>
  );
};

export default App