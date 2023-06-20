import { useState, useCallback, useEffect, useContext } from 'react';
import ApiHelper from '../../../utils/apiHelper';
import NoData from '../../common/NoData';
import { endpoints } from '../../../utils/URL';
import { Properties } from '../../../interfaces/PropertyListingInterface';
import Loader from '../../common/Loader';
import useAlertModal from '../../../hooks/useAlertModal';
import { AppContext, AppContextType } from '../../../context/AppContext';
// import { useNavigate } from 'react-router-dom';


const PropertyListing = () => {
	const { token } = useContext(AppContext) as AppContextType;

	const alert: any = useAlertModal()

	const api = new ApiHelper()

	// const navigate = useNavigate();

	const [properties, setProperties] = useState<Properties[]>([]);
	const [loading, setLoading] = useState(false);

	
	const getProperties = useCallback(async () => {
		setLoading(true);

		try {
			const response = await api.getData(endpoints.PropertyListings.mainUrl, token);
			setProperties(response.data);
		} catch (error) {
			alert.setContent('Error getting property listings. Try again later')
			alert.setVariant('error')
			alert.open()
			
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getProperties();
	}, [getProperties]);

	
	return (
		<div className=''>
			<div className='items-center'>
				<h1 className='text-2xl font-semibold my-16'>Local Property Listings</h1>
			</div>

			{loading && (
				<div className='flex justify-center items-center'>
					<Loader />
				</div>
			)}

			{!loading && properties.length === 0 && (
				<div className='flex justify-center items-center'>
					<NoData content='No Properties listed' />
				</div>
			)}

			
		</div>
	);
};

export default PropertyListing;
