// import React from 'react';
import styles from '../../style';

const ConsultUs = () => {
	return (
		<>
			<div className='flex justify-center'>
				<div className='my-5'>
					<h3 className={styles.heading2}>Consult Us</h3>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='card w-96 shadow-xl rounded-xl p-12 my-5'>
					<form>
						<fieldset>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Full Name</span>
								</label>
								<input type='text' placeholder='' className='input input-bordered w-full' />
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Email</span>
								</label>
								<input type='email' placeholder='' className='input input-bordered w-full' />
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Phone Number</span>
								</label>
								<input type='text' placeholder='' className='input input-bordered w-full' />
							</div>
							<div className='form-control w-full'>
								<label className='label font-bold'>
									<span className='label-text'>Message</span>
								</label>
								<textarea rows={3} className='textarea textarea-bordered w-full'></textarea>
							</div>
							<button className='btn btn-success btn-block mt-5'>SUBMIT</button>
						</fieldset>
					</form>
				</div>
			</div>
		</>
	);
};

export default ConsultUs;
