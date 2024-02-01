import { About, Footer, Skills, Testimonial, Work, Header } from "./container/export";

import { Navbar } from "./components/index";

import './App.scss'

function App() {
  return <div className="app" >
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>;
}

export default App;
