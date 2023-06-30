import { createContext, useState, ReactElement } from 'react';

export type AppContextType = {
	name: string;
	setName: any;
	email: string;
	setEmail: any;
	token: string;
	setToken: any;
	isAuthenticated: boolean;
	setIsAuthenticated: any;
	toastVariant: string;
	setToastVariant: any;
	toastContent: string;
	setToastContent: any;
	toastOpen: boolean;
	setToastOpen: any;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactElement }) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [token, setToken] = useState<string>('');
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [toastVariant, setToastVariant] = useState<string>('info');
	const [toastContent, setToastContent] = useState<string>('');
	const [toastOpen, setToastOpen] = useState<boolean>(false);

	const providerValue: AppContextType = {
		name,
		setName,
		email,
		setEmail,
		token,
		setToken,
		isAuthenticated,
		setIsAuthenticated,
		toastVariant,
		setToastVariant,
		toastContent,
		setToastContent,
		toastOpen,
		setToastOpen,
	};

	return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>;
};
