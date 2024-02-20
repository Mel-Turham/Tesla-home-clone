import './Experience.scss';
import video from '../assets/videos/Roadster.mp4'
const Experience = () => {
	return (
		<>
			<section className='Experience'>
				<video src={video} autoPlay loop muted />
				<div className='section-top'>
					<h2 className='title'>Experience Tesla</h2>
					<p className='text'>
					Schedule a Demo Drive Today
					</p>
				</div>
				<div className='section-bottom'>
					<div className='buttons'>
						<button className='btn-primary'>Demo Drive</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Experience;
