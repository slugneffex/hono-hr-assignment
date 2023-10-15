import './App.css';
import BuildSuperConnection from './components/BuildSuperConnection';
import Footer from './components/Footer';
import GoodCompany from './components/GoodCompany';
import HeroSection from './components/HeroSection';
import HowRedesWork from './components/HowRedesWork';
import LoveUS from './components/LoveUS';
import TopNavbar from './components/Navbar';
import PeopleYouMeet from './components/PeopleYouMeet';
import TrustedByMember from './components/TrustedByMember';
import WhyJoin from './components/WhyJoin';

function App() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <div style={{backgroundColor: '#f5f5f5', height: '100px', borderBottom: '1px solid #e0e0e0'}}></div>
      <TrustedByMember />
      <BuildSuperConnection />
      <WhyJoin />
      <HowRedesWork />
      <PeopleYouMeet />
      <GoodCompany />
      <LoveUS />
      <Footer />
    </>
  );
}

export default App;
