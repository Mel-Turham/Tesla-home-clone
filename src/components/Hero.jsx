import video from '../assets/videos/Homepage-Model-Y-Desktop-NA-v2.mp4';
import './Hero.scss';

const Hero = () => {
	return (
		<section className='section-hero'>
			<video src={video} autoPlay loop muted />
			<div className='section-top'>
				<h2 className='title'>Model Y</h2>
				<p className='text'>
					Lease Starting at $399/mo<sup>*</sup>
				</p>
			</div>

			<div className='section-bottom'>
				<div className='buttons'>
					<button className='btn-primary'>Explore Inventory</button>
					<button className='btn-secondary'>Demo Drive</button>
				</div>
				<p>
					*Excludes taxes and fees with price subject to change. Available in
					select states. See Details
				</p>
			</div>
		</section>
	);
};

export default Hero;
