import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
	return (
		<nav className="navbar navbar-expand-lg justify-content-between" id="mainNav">
			<div className="container">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-nav">
					<FontAwesomeIcon className="ms-1" icon={faBars} />
				</button>
				<div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<Link to="/home" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">About</Link>
						</li>
						<li className="nav-item">
							<Link to="/gallery" className="nav-link">Gallery</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-brand mx-auto order-0 order-md-1">
					<img src="/images/logo_text.gif" alt="Wayward Cookies logo" id="logo" />
				</div>
				<div className="navbar-collapse collapse dual-nav w-50 order-2">
					<ul className="nav navbar-nav me-auto">
						<li className="nav-item">
							<Link to="/testimonials" className="nav-link">Testimonials</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">Contact</Link>
						</li>
						<li className="nav-item">
							<Link to="/order" className="nav-link">Order</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}