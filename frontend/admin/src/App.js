import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import { GlobalStyle } from './theme/globalStyle';
import { theme } from './theme/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path='/*' element={<Error />} />
					</Route>
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
