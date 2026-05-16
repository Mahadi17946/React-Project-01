import './App.css'
import Navber from './Component/Navber/Navber'
import Banner from './Component/Banner/Banner'
import Success from './Component/Success/Success'
import Services from './Component/Services/Services'

import Review from './Component/Review/Review'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Work from './Component/Work/work';
import WhyChoose from './Component/Why_chose/why_chose'


function App() {

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Success></Success>
      <Services></Services>
      <Work></Work>
      <WhyChoose></WhyChoose>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App
