import './App.css';
import Hero from './components/hero'
import Programs from './components/Programs/programs'
import Reasons from './components/Reasons/reasons'
import Plans from './components/Plans/plans'
import Testimonials from './components/Testimonials/Testimonials'
import Join from './components/Join/Join'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;
