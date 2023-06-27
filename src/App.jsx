
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
		<div>
			<div className='w-full'>
				<NavBar />
      </div>
      
      <div>
        <Home />
        <AboutMe />
        <Portfolio />
      </div>
		</div>
  );
};

export default App;