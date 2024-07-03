export interface IDisaporaPropertyEnquiry {
	name: string;
	email: string;
	phone: string;
	createdAt: string;
}

export interface IProperties {
	location: string;
	propertyType: string;
	propertyImages: Array<string>;
	numberOfrooms: number;
	numberOfToilets: number;
	numberOfBathrooms: number;
	numberOfLivingRooms: number;
	numberOfKitchens: number;
	agentId: number;
	createdAt: string;
}

export interface ICreateProperty {
	location: string;
	propertyType: string;
	propertyImages: string[];
	numberOfrooms: number;
	numberOfToilets: number;
	numberOfBathrooms: number;
	numberOfLivingRooms: number;
	numberOfKitchens: number;
	agentId: number;
	agentName: string;
}

export const newProperty: ICreateProperty = {
	location: '',
	propertyType: '',
	propertyImages: [],
	numberOfrooms: 0,
	numberOfToilets: 0,
	numberOfBathrooms: 0,
	numberOfLivingRooms: 0,
	numberOfKitchens: 0,
	agentId: 0,
	agentName: '',
};
