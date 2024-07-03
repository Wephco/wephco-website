import { IProperties } from './PropertyListingInterface';

export interface IAgent {
	id: number | string;
	name: string;
	email: string;
	address: string;
	phoneNumber: string;
	propertyListings: Array<IProperties>;
}

export interface ICreateAgent {
	name: string;
	email: string;
	address: string;
	phoneNumber: string;
}

export const initialAgentObject: ICreateAgent = {
	name: '',
	email: '',
	address: '',
	phoneNumber: '',
};
