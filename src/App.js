import './App.css';
import bgImage from './Assets/bgvid.mp4';
import Navbar from './Components/Navbar';
import zeroone1 from './Assets/zeroone1.jpg';
import Sem from './Components/Sem';
import Footer from './Components/Footer';


function App() {
  return (
   <>  
      <div className='logo'>
      <img src={zeroone1} alt=''/>
      </div>
         <Navbar /> 
         <div className="study">STUDY VAULT</div>
      <div className="get">Get all the resources here at one place</div>
     <video autoPlay loop muted playsInline>
      <source src={bgImage} type="video/mp4"/>
     </video>
      <Sem/>
      <Footer/>
   </>
  );
}

export default App;
