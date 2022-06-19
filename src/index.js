import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import Help from './pages/Help';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import ImageConverter from './components/pdf-tools/ImageConverter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename="pdf-pad">
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="help" element={<Help />} />
				<Route path="create" element={<Create />}>
					<Route path="png-converter" element={<ImageConverter imageType="png" />} />
					<Route path="jpg-converter" element={<ImageConverter imageType="jpg" />} />
				</Route>
				<Route path="edit" element={<Edit />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
