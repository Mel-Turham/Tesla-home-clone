import './SectionModel3.scss';
const SectionModel3 = () => {
	return (
		<section className='section-Model3'>
			<div className='section-top'>
				<h2 className='title'>Model 3</h2>
				<p className='text'>
					Lease Starting at $399/mo<sup>*</sup>
				</p>
			</div>

      <div className="section-bottom">
        <div className="buttons">
          <button className='btn-primary'>Explore Inventory</button>
          <button className='btn-secondary'>Demo Drive</button>
        </div>
        <p>
          *Excludes taxes and fees with price subject to change. Available in select states. See Details
          </p>
      </div>
		</section>
	);
};

export default SectionModel3;
