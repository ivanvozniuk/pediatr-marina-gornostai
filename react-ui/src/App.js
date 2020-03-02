import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import theme from './theme';
import Routes from './routes';

import './assets/css/index.css';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
