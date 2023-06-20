export interface Properties {
    location: string
    propertyType: string
    propertyImages: Array<string>
    numberOfrooms: number
    numberOfToilets: number
    numberOfBathrooms: number
    numberOfLivingRooms: number
    numberOfKitchens: number
    agentId: number
    createdAt: string
}

export interface PropertyListingData {
	location: string;
	propertyType: string;
	propertyImages: string[];
	numberOfrooms: number;
	numberOfToilets: number;
	numberOfBathrooms: number;
	numberOfLivingRooms: number;
	numberOfKitchens: number;
	agentId: number;
}