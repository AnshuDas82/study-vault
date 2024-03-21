import './App.css';
import bgImage from './Assets/bgvid.mp4';
import Navbar from './Components/Navbar';
import zeroone1 from './Assets/zeroone1.png';
import Sem from './Components/Sem';
import Footer from './Components/Footer';


function App() {
   return (
      <main className='main'>
         <Navbar />
         <div className="hero-section">
            <div className='logo'>
               <img src={zeroone1} alt='logo' />
            </div>
            <div className="overlay-text">
               <div className="study">STUDY VAULT</div>
               <div className="get">Get all the resources here at one place</div>
            </div>
            <video autoPlay loop muted playsInline>
               <source src={bgImage} type="video/mp4" />
            </video>
         </div>
         <Sem />
         <Footer />
      </main>
   );
}

export default App;
