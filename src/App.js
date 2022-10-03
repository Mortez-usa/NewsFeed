import Navbar from './components/Navbar.jsx';
import News from './pages/News.js';
import Sport from './pages/Sport.js';
import Culture from './pages/Culture.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='container'>
			<Navbar />
			<h1>test</h1>
			<div>
				<Routes>
					<Route path='/Culture' element={<Culture />} />
					<Route path='/News' element={<News />} />
					<Route path='/Sport' element={<Sport />} />
					<Route />
				</Routes>
			</div>
		</div>
	);
}

export default App;
