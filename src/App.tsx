import './App.css';
import TopBar from './Sections/Topbar';
import Banner from './Sections/Banner';
// import Projects from './Sections/Projects'; // Hidden as requested
import Skills from './Sections/Skills';
import Experience from './Sections/Experience';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="bg-primary text-secondary min-h-screen overflow-x-hidden">
      <TopBar />
      <main>
        <Banner />
        {/* Projects section temporarily hidden as requested */}
        {/* <Projects /> */}
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
