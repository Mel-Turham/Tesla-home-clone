import './Accessories.scss';

const Accessories = () => {
	return (
		<>
			<section className='Accessories'>
				<div className='section-top'>
					<h2 className='title'>Solar Roof</h2>
					<p className='text'>Produce Clean Energy From Your Roof</p>
				</div>

				<div className='section-bottom'>
					<div className='buttons'>
						<button className='btn-primary'>Order Now</button>
					</div>

					<footer className='footer'>
						<p className='CopyRight'>CopyRight &copy; 2024</p>
						<ul className='nav' aria-label='Nav'>
							<li>Privacy & Legal</li>
							<li>Vehicle Recalls</li>
							<li>Contact</li>
							<li>News</li>
							<li>Updates</li>
							<li>Locations</li>
						</ul>
					</footer>
				</div>
			</section>
		</>
	);
};

export default Accessories;
