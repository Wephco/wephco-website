import { useState, useCallback, useEffect, useContext } from 'react';
import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
import { endpoints } from '../../../utils/URL';
import { Properties } from '../../../interfaces/PropertyListingInterface';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
import { FaMapMarkerAlt, FaToilet } from 'react-icons/fa';
import { MdMeetingRoom, MdBathroom, MdSoupKitchen } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';

const DiasporaPropertyListing = () => {
	const { token, setToastContent, setToastVariant, setToastOpen } = useContext(
		AppContext,
	) as AppContextType;

	const api = new ApiHelper();

	const [properties, setProperties] = useState<Properties[]>([]);
	const [loading, setLoading] = useState(false);

	const getProperties = useCallback(async () => {
		setLoading(true);

		try {
			const response = await api.getData(`${endpoints.DiasporaPropertyListings.mainUrl}`, token);
			setProperties(response);
		} catch (error) {
			setToastContent('Error getting property listings. Try again later');
			setToastVariant('error');
			setToastOpen(true);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getProperties();
	}, [getProperties]);

	return (
		<div className=''>
			<div className='text-center'>
				<h1 className='text-2xl font-semibold my-8'>Diaspora Property Listings</h1>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && properties?.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Properties listed' />
				</div>
			)}

			{/* property mapping */}
			<div className='flex-1 flex flex-row flex-wrap justify-center p-8 lg:p-3'>
				{properties?.map((property) => (
					<div className='card lg:card-side sm:card-compact bg-base-100 shadow-xl m-5 lg:m-3'>
						<figure>
							<img
								src={property.propertyImages[0]}
								alt='Property Main Image'
								className='w-80 h-80 lg:w-72 lg:h-72'
							/>
						</figure>
						<div className='card-body p-8'>
							<h2 className='card-title uppercase font-bold'>{property.propertyType}</h2>
							<div className='flex justify-evenly'>
								<FaMapMarkerAlt className='text-2xl mr-2' />
								<p className='text-xl uppercase font-semibold'>Location: {property.location}</p>
							</div>
							<div className='flex justify-around'>
								<MdMeetingRoom className='text-2xl mr-2' />
								<p className='text-xl uppercase font-semibold'>Rooms: {property.numberOfrooms}</p>
							</div>
							<div className='flex justify-around'>
								<FaToilet className='text-2xl mr-2' />
								<p className='text-xl uppercase font-semibold'>
									Toilets: {property.numberOfToilets}
								</p>
							</div>
							<div className='flex justify-around'>
								<MdBathroom className='text-2xl mr-2' />
								<p className='text-xl uppercase font-semibold'>
									Bathrooms: {property.numberOfBathrooms}
								</p>
							</div>
							<div className='flex justify-around'>
								<SiGoogleclassroom className='text-2xl mr-2' />
								<p className='text-xl uppercase font-semibold'>
									LivingRooms: {property.numberOfLivingRooms}
								</p>
							</div>
							<div className='flex justify-around'>
								<MdSoupKitchen className='text-2xl mr-2' />
								<p className='text-xl uppercase font-semibold'>
									Kitchens: {property.numberOfKitchens}
								</p>
							</div>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>View Property</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export { DiasporaPropertyListing };
