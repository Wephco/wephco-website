import { createContext, useState, ReactElement } from 'react';
import { IAgent } from '../interfaces/AgentsInterface';

export type AppContextType = {
	name: string;
	setName: any;
	email: string;
	setEmail: any;
	token: string;
	setToken: any;
	isAuthenticated: boolean;
	setIsAuthenticated: any;
	toastContent: string;
	setToastContent: any;
	toastOpen: boolean;
	setToastOpen: any;
	toastVariant: string;
	setToastVariant: any;
	agentList: Array<IAgent>;
	setAgentList: any;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactElement }) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [token, setToken] = useState<string>('');
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [toastContent, setToastContent] = useState<string>('');
	const [toastOpen, setToastOpen] = useState<boolean>(false);
	const [toastVariant, setToastVariant] = useState('info');
	const [agentList, setAgentList] = useState<IAgent[]>([]);

	const providerValue: AppContextType = {
		name,
		setName,
		email,
		setEmail,
		token,
		setToken,
		isAuthenticated,
		setIsAuthenticated,
		toastContent,
		setToastContent,
		toastOpen,
		setToastOpen,
		toastVariant,
		setToastVariant,
		agentList,
		setAgentList,
	};

	return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>;
};
