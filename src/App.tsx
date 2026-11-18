import './App.css';
import TopBar from './Sections/Topbar';
import Banner from './Sections/Banner';
// import Projects from './Sections/Projects'; // Hidden as requested
import Skills from './Sections/Skills';
import LinkedInPosts from './Sections/LinkedInPosts';
import Experience from './Sections/Experience';
import FAQ from './Sections/FAQ';
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
        <LinkedInPosts />
        <Experience />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
