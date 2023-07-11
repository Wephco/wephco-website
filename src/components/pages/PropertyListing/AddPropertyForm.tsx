import React, { useState, useContext, useEffect, useCallback } from 'react';
import { endpoints } from '../../../utils/URL';
import ApiHelper from '../../../utils/apiHelper';
import { newProperty } from '../../../interfaces/PropertyListingInterface';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { property_types } from '../../../utils/constants';
import { v4 } from 'uuid';
import { storage } from '../../../utils/firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import Loader from '../../common/Loader';
import { IAgent } from '../../../interfaces/AgentsInterface';

const AddPropertyForm = () => {
	const { token, setToastContent, setToastOpen, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	const [property, setProperty] = useState(newProperty);
	const [loading, setLoading] = useState(false);
	const [propertyImages, setPropertyImages] = useState<string[]>([]);
	const [imageList, setImageList] = useState<File[]>([]);
	const [agentList, setAgentList] = useState<IAgent[]>([]);

	const api = new ApiHelper();

	const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = e.target.files as FileList;
		const fileList = Array.from(selectedFiles);
		setImageList(fileList);
	};

	const uploadImages = async () => {
		try {
			const storageRef = ref(storage, `property-listings/images/${v4()}`);
			const imageUrls: string[] = [];

			for (var i = 0; i < imageList.length; i++) {
				const uploadTask = await uploadBytesResumable(storageRef, imageList[i]);

				getDownloadURL(uploadTask.ref).then((imageURL) => {
					imageUrls.push(imageURL);
				});
			}

			setPropertyImages(imageUrls);
		} catch (error) {
			setToastVariant('error');
			setToastContent(`${error}`);
			setToastOpen(true);
		}
	};

	const handleChange = (input: string) => (e: any) => {
		setProperty({
			...property,
			[input]: e.target.value,
		});
	};

	const submitProperty = async (e: any) => {
		e.preventDefault();

		setLoading(true);

		await uploadImages();

		property.propertyImages = propertyImages;

		try {
			await api.postData(endpoints.PropertyListings.mainUrl, property, token);
			setToastVariant('success');
			setToastContent('Property added successfully');
			setToastOpen(true);
			setProperty(newProperty);
		} catch (error) {
			setToastVariant('error');
			setToastContent(`${error}`);
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	};

	const getAgentList = useCallback(async () => {
		try {
			const response = await api.getData(endpoints.Agents.mainUrl, token);
			setAgentList(response);
		} catch (error) {
			setToastVariant('error');
			setToastContent(`Error getting agent list - ${error}`);
			setToastOpen(true);
		}
	}, []);

	useEffect(() => {
		getAgentList();
	}, [getAgentList]);

	return (
		<div className='mt-10'>
			<h1 className='text-center text-2xl font-bold mb-5'>Add Property Form</h1>
			<div className='flex flex-col items-center'>
				<div className='shadow-2xl w-[500px] p-8 rounded-2xl'>
					<form>
						<fieldset disabled={loading}>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='agentId'>
									Agent Name
								</label>
								<select
									value={property.agentName}
									onChange={handleChange('agentName')}
									className='select select-bordered w-full'
									id='agentName'
								>
									<option value='-'>-</option>
									{agentList.map((agent) => (
										<option key={agent.id} value={agent.name}>
											{agent.name}
										</option>
									))}
								</select>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='location'>
									Location
								</label>
								<input
									value={property.location}
									onChange={handleChange('location')}
									type='text'
									className='input input-bordered'
									id='location'
								/>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='propertyType'>
									Property Type
								</label>
								<select
									value={property.propertyType}
									onChange={handleChange('propertyType')}
									className='select select-bordered'
									id='propertyType'
								>
									<option disabled value='-'>
										-
									</option>
									{property_types.map((property_type) => (
										<option className='font-bold' value={property_type.value}>
											{property_type.label.toUpperCase()}
										</option>
									))}
								</select>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='numberOfRooms'>
									Number of Rooms
								</label>
								<input
									value={property.numberOfrooms}
									onChange={handleChange('numberOfrooms')}
									type='number'
									className='input input-bordered'
									id='numberOfRooms'
								/>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='numberOfToilets'>
									Number of Toilets
								</label>
								<input
									value={property.numberOfToilets}
									onChange={handleChange('numberOfToilets')}
									type='number'
									className='input input-bordered'
									id='numberOfToilets'
								/>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='numberOfBathrooms'>
									Number of Bathrooms
								</label>
								<input
									value={property.numberOfBathrooms}
									onChange={handleChange('numberOfBathrooms')}
									type='number'
									className='input input-bordered'
									id='numberOfBathrooms'
								/>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='numberOfLivingRooms'>
									Number of Living Rooms
								</label>
								<input
									value={property.numberOfLivingRooms}
									onChange={handleChange('numberOfLivingRooms')}
									type='number'
									className='input input-bordered'
									id='numberOfLivingRooms'
								/>
							</div>
							<div className='form-control mb-3'>
								<label className='label font-bold' htmlFor='numberOfKitchens'>
									Number of Kitchens
								</label>
								<input
									value={property.numberOfKitchens}
									onChange={handleChange('numberOfKitchens')}
									type='number'
									className='input input-bordered'
									id='numberOfKitchens'
								/>
							</div>

							<div className='form-control mb-3'>
								<label htmlFor='images' className='label font-bold'>
									Upload Property Images
								</label>
								<input
									type='file'
									className='file-input file-input-bordered w-full'
									accept='image/*'
									multiple
									onChange={selectImage}
								/>
							</div>
							<button
								onClick={submitProperty}
								type='submit'
								className='btn btn-block btn-error mt-3'
							>
								{loading ? <Loader /> : 'Submit'}
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddPropertyForm;
