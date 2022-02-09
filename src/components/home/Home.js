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
							<p>The kitty picture is just a placeholder.</p>
						</div>
					</div>
				</div>
				<div className="wave-bottom"></div>
			</header>
			<main >
				<div className="container-fluid">
					<div className="row">
						<div className="col text-center content">
							<p>
								More content could go here!
							</p>
							<div style={{ height: "200px" }} >
							</div>
							<p>
								EVEN MORE CONTENT !!!
							</p>
						</div>
					</div>
				</div>
			</main >
		</Fragment >
	);
}

