
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
// import ParticlesEffect from './components/Particles/Particles';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
		<div>
			<div className='w-full'>
				<NavBar />
			</div>

			<div>
			
				<div>
					<Home />
					<AboutMe />
					<Portfolio />
					<Skills />
					<Contact />
				</div>
			</div>
		</div>
  );
};

export default App;