import { Link } from "react-router-dom";
import "./About.css";

export default function About(props) {
	return (
		<main className="pt-md-5">
			<div className="container pt-md-5">
				<div className="row justify-content-center pb-4">
					<div className="col-md-6 text-center">
						<h1>Our Cookies</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-10 text-left content about-us-text">
						<p className="pt-2 pb-4">
							At Wayward Cookies, we focus on creating custom, hand decorated sugar cookies. Each cookie is made from scratch, with quality ingredients. Everything is made to order, ensuring we’re able to give the appropriate amount of time to bake and decorate each cookie.
						</p>
						<h4>Cookie Pricing</h4>
						<p className="pb-4">
							All pricing is dependent on the size of cookies, as well as the design requested. Our standard cookie size is 3” x 3”, but different variations are available.<br /><br />
							A dozen decorated sugar cookies starts at $25 per dozen. <Link to="/order" className="nav-link d-inline p-0 ps-1">Order now!</Link>
						</p>
						<h4>Packaging</h4>
						<p>
							We offer a variety of packaging options, including but not limited to the following:
							<ul className="pt-2">
								<li className="pb-3"><strong>Bulk Packaging: </strong><span className="wc-blue">Free</span><br />
									Cookies are neatly stacked in a bakery box, without any individual packing. This is a good option for those displaying cookies at a party or event. There is a possibility of cookies rubbing together, potentially causing damage to the icing.
								</li>
								<li className="pb-3"><strong>Cellophane Packaging: </strong><span className="wc-blue">$5 per dozen</span><br />
									Cookies are individually heat sealed in cellophane and placed in a bakery box with bubble wrap for protection. This option is also used when shipping cookies to a buyer.
								</li>
								<li className="pb-5"><strong>Cellophane Packaging: </strong><span className="wc-blue">$6 per dozen</span><br />
									Have a gift for a friend or loved one? We offer individually wrapped and heat-sealed cookies in a gift box with tissue paper and a decorative ribbon.
								</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</main >
	);
}
