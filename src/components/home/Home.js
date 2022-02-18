import { Fragment } from "react";
import "./Home.css";

export default function Home(props) {
	return (
		<Fragment>
			<header className="masthead justify-content-center position-relative">
				<div className="wave-top"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-4 text-white text-center">
						</div>
					</div>
				</div>
				<div className="wave-bottom"></div>
			</header>
			<main style={{ minHeight: "550px" }} className="pt-5" id="home-content">
				<div className="container">
					<div className="row">
						<div className="col text-center content">
							<h2 style={{ color: "#403730", }}>Seriously Awesome Cookies</h2>
						</div>
					</div>
					<div className="row justify-content-center pt-5 gx-5">
						<div className="col-8 col-md-4 pb-5">
							<img className="img-fluid img-thumbnail p-0 w-100" src="images/assorted-cookies-1.jpg" alt="Cookies For All Occasions" />
							<h3 className="pt-3 text-center">All Occasions</h3>
							<p>
								Whether you're looking to celebrate a birthday, graduation, or a holiday - we've got you covered! You don't even need a reason, really.
							</p>
						</div>
						<div className="col-8 col-md-4 pb-5">
							<img className="img-fluid img-thumbnail p-0 w-100" src="images/chiefs-cookies-1.jpg" alt="Chiefs Cookies" />
							<h3 className="pt-3 text-center">Sports!</h3>
							<p>
								Celebrate another dissapointing season of your favorite sports team by smothering your sorrow with delicious sugary treats!
							</p>
						</div>
						<div className="col-8 col-md-4 pb-5">
							<img className="img-fluid img-thumbnail p-0 w-100" src="images/llama-cookies-1.jpg" alt="Llama Cookies" />
							<h3 className="pt-3 text-center">No Scabs</h3>
							<p>Our cookies are guaranteed to be scab-free. Good luck getting the same guarantee from Nabisco.</p>
						</div>
					</div>
				</div>
			</main >
		</Fragment >
	);
}
