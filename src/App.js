
import './App.css';
import Banner from './components/Banner/Banner';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Function from './components/Function';
import Function2 from './components/Function2';
import Navbar from './components/Navbar/Navbar';
import Payment from './components/Payment';
import Question from './components/Question';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Feature/>
      <Function/>
      <Testimonial/>
      <Payment/>
      <Function2/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
