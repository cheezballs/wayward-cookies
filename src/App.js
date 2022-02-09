import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Order from './components/order/Order';
import Testimonials from './components/testimonials/Testimonials';

function App() {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/order" element={<Order />} />
				<Route path="/testimonials" element={<Testimonials />} />
			</Routes>
			<Footer />
		</Fragment>
	);
}

export default App;
