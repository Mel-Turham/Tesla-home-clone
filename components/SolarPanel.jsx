import './SolaePanel.scss';

const SolarPanel = () => {
	return (
		<>
			<section className='SolarPanel'>
				<div className='section-top'>
					<h2 className='title'>Solar Panels</h2>
					<p className='text'>Solar Panels Schedule a Virtual Consultation</p>
				</div>

				<div className='section-bottom'>
					<div className='buttons'>
						<button className='btn-primary'>Order Now</button>
						<button className='btn-secondary'>Lean More</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default SolarPanel;
