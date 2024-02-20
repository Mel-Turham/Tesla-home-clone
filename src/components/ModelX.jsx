import './ModelX.scss';
const ModelX = () => {
	return (
		<>
			<section className='modelX'>
				<div className='section-top'>
					<h2 className='title'>Model X</h2>
					<p className='text'>
						From $68,590* <br />
						<span>After Federal Tax Credit & Est. Gas Savings</span>
					</p>
				</div>

				<div className='section-bottom'>
					<div className='buttons'>
						<button className='btn-primary'>Explore Inventory</button>
						<button className='btn-secondary'>Demo Drive</button>
					</div>
					<p>
						*Price before incentives and savings is $79,990, excluding taxes and
						fees. Subject to change. Learn about est. gas savings.
					</p>
				</div>
			</section>
		</>
	);
};

export default ModelX;
