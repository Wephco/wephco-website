import { useState, useCallback, useEffect, useContext } from 'react';
import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
import { endpoints } from '../../../utils/URL';
import { Properties } from '../../../interfaces/PropertyListingInterface';
import Loader from '../../common/Loader';
import { AppContext, AppContextType } from '../../../context/AppContext';
// import { useNavigate } from 'react-router-dom';

const PropertyListing = () => {
	const { token, setToastContent, setToastVariant, setToastOpen } = useContext(
		AppContext,
	) as AppContextType;

	const api = new ApiHelper();

	// const navigate = useNavigate();

	const [properties, setProperties] = useState<Properties[]>([]);
	const [loading, setLoading] = useState(false);

	const getProperties = useCallback(async () => {
		setLoading(true);

		try {
			const response = await api.getData(
				`${endpoints.PropertyListings.mainUrl}?isDiaspora=False`,
				token,
			);
			setProperties(response.data);
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
				<h1 className='text-2xl font-semibold my-8'>Local Property Listings</h1>
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
			<div className='flex flex-row flex-wrap justify-start p-8'>
				{properties?.map((property) => (
					<div className='card lg:card-side bg-base-100 shadow-xl'>
						<figure>
							<img src={property.propertyImages[0]} alt='Property Main Image' />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{property.propertyType}</h2>
							<p>Location: {property.location}</p>
							<p>Number Of Rooms: {property.numberOfrooms}</p>
							<p>Number Of Toilets: {property.numberOfToilets}</p>
							<p>Number Of Bathrooms: {property.numberOfBathrooms}</p>
							<p>Number Of Living Rooms: {property.numberOfLivingRooms}</p>
							<p>Number Of Kitchens: {property.numberOfKitchens}</p>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>Book Viewing</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PropertyListing;
