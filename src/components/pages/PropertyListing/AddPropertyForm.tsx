import { useState, useContext } from 'react';
import { endpoints } from '../../../utils/URL';
import ApiHelper from '../../../utils/apiHelper';
import { CreateProperty, newProperty } from '../../../interfaces/PropertyListingInterface';
import { AppContext, AppContextType } from '../../../context/AppContext';

const AddPropertyForm = () => {
	const { token } = useContext(AppContext) as AppContextType

	const [property, setProperty] = useState(newProperty)
	const [loading, setLoading] = useState(false)

	const api = new ApiHelper()

	const handleChange = (input: string) => (e: any) => {
		setProperty({
			...property,
			[input]: e.target.value
		})
	}

	const submitProperty = async (e: any) => {
		e.preventDefault()

		setLoading(true)

		try {
			await api.postData(endpoints.PropertyListings.mainUrl, property, token)
		} catch (error) {
			
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex flex-col justify-end items-start mt-10'>
			<h1>Add Property Form</h1>

			<form>
				<fieldset disabled={loading}>
					<div className='form-group'>
						<label htmlFor='agentId'>Agent Id</label>
						<input type='text' className='form-control' id='agentId' />
					</div>
					<div className='form-group'>
						<label htmlFor='location'>Location</label>
						<input type='text' className='form-control' id='location' />
					</div>
					<div className='form-group'>
						<label htmlFor='propertyType'>Property Type</label>
						<input type='text' className='form-control' id='propertyType' />
					</div>
					<div className='form-group'>
						<label htmlFor='numberOfRooms'>Number of Rooms</label>
						<input type='text' className='form-control' id='numberOfRooms' />
					</div>
					<div className='form-group'>
						<label htmlFor='numberOfToilets'>Number of Toilets</label>
						<input type='text' className='form-control' id='numberOfToilets' />
					</div>
					<div className='form-group'>
						<label htmlFor='numberOfBathrooms'>Number of Bathrooms</label>
						<input type='text' className='form-control' id='numberOfBathrooms' />
					</div>
					<div className='form-group'>
						<label htmlFor='numberOfLivingRooms'>Number of Living Rooms</label>
						<input type='text' className='form-control' id='numberOfLivingRooms' />
					</div>
					<div className='form-group'>
						<label htmlFor='numberOfKitchens'>Number of Kitchens</label>
						<input type='text' className='form-control' id='numberOfKitchens' />
					</div>
					<button type='submit' className='btn btn-warning'>
						Submit
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default AddPropertyForm;
