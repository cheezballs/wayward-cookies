import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Collapse } from 'bootstrap';

export default function Header(props) {

	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	const collapseMobile = () => setIsNavCollapsed(true);

	useEffect(() => {
		const leftNavCollapse = document.getElementById('leftNavCollapse');
		const rightNavCollapse = document.getElementById('rightNavCollapse');
		const leftCollapse = new Collapse(leftNavCollapse, { toggle: false })
		const rightCollapse = new Collapse(rightNavCollapse, { toggle: false })
		if (isNavCollapsed) {
			leftCollapse.hide();
			rightCollapse.hide();
		} else {
			leftCollapse.show();
			rightCollapse.show();
		}
	})

	return (
		<nav className="navbar navbar-expand-md justify-content-between" id="mainNav">
			<div className="container-fluid bgWhite">
				<button className="navbar-toggler pt-1 pb-1 me-1" type="button" data-bs-toggle="collapse" data-bs-target=".dual-nav" onClick={handleNavCollapse}>
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>
				<div id="leftNavCollapse" className={`navbar-collapse collapse dual-nav w-50 order-1 order-md-0 left`}>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<Link to="/home" className="nav-link" onClick={collapseMobile}>Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link" onClick={collapseMobile}>About</Link>
						</li>
						<li className="nav-item">
							<Link to="/gallery" className="nav-link" onClick={collapseMobile}>Gallery</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-brand mx-auto d-none d-md-block order-md-1">
					<img src="/images/logo_text.gif" alt="Wayward Cookies logo" id="logo" />
				</div>
				<div className="navbar-brand mx-auto d-md-none order-md-1" id="mobileNavImage">
					<img src="/images/text-logo.png" alt="Wayward Cookies logo" width="100%" id="text-logo" />
				</div>
				<div id="rightNavCollapse" class={`navbar-collapse collapse dual-nav w-50 order-2 bgWhite ${isNavCollapsed ? 'right' : ''}`}>
					<ul class={`nav navbar-nav ${isNavCollapsed ? 'me-auto' : ''}`}>
						<li className="nav-item">
							<Link to="/testimonials" className="nav-link" onClick={collapseMobile}>Clients</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link" onClick={collapseMobile}>Contact</Link>
						</li>
						<li className="nav-item">
							<Link to="/order" className="nav-link" onClick={collapseMobile}>Order</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}