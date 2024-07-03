import { useCallback, useContext, useEffect } from 'react';
import property from '../../../assets/property.png';
import { AppContext, AppContextType } from '../../../context/AppContext';
import ApiHelper from '../../../utils/apiHelper';
import { endpoints } from '../../../utils/URL';

const Home = () => {
	const { setAgentList, setToastContent, setToastOpen, token, setToastVariant } = useContext(
		AppContext,
	) as AppContextType;

	const api = new ApiHelper();

	const getAgentList = useCallback(async () => {
		try {
			const response = await api.getData(endpoints.Agents.mainUrl, token);
			setAgentList(response);
			sessionStorage.setItem('agentList', JSON.stringify(response));
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
		<div>
			<div className='flex justify-center mt-5'>
				<img src={property} alt='' className='w-1/2 h-1/2' />
			</div>
		</div>
	);
};

export default Home;
