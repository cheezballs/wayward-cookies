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
			<main style={{ minHeight: "250px" }}>
				<div className="container-fluid">
					<div className="row">
						<div className="col text-center content">

						</div>
					</div>
				</div>
			</main >
		</Fragment >
	);
}

