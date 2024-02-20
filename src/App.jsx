import './App.scss';
import Header from './components/Header';
import SectionModel3 from './components/SectionModel3';
import Hero from './components/Hero';
import ModelX from './components/ModelX';
import ModelS from './components/ModelS';
import CyberTrunck from './components/CyberTrunck';
import Experience from './components/Experience';
import SolarPanel from './components/SolarPanel';
import SolarRoof from './components/SolarRoof';
import PowerWall from './components/PowerWall';
import Accessories from './components/Accessories';

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<SectionModel3 />
			<ModelX />
			<ModelS />
			<CyberTrunck />
			<Experience />
			<SolarPanel />
			<SolarRoof />
			<PowerWall />
			<Accessories />
		</>
	);
};

export default App;
