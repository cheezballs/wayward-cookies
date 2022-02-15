import "./Gallery.css";

export default function Gallery(props) {
	return (
		<main className="pt-md-5">
			<div className="container-fluid pt-md-5">
				<div className="row justify-content-center">
					<div className="col-10 col-md-5 pb-4 thumb-wrapper">
						<img className="img-fluid img-thumbnail p-1" src="images/gallery/100-birthday-1-thumb.jpg" alt="Birthday Cookies" />
					</div>
					<div className="col-10 col-md-5 pb-4">
						<img className="img-fluid img-thumbnail p-4" src="images/gallery/100-birthday-1-thumb.jpg" alt="Birthday Cookies" />
					</div>
					<div className="col-10 col-md-5 pb-4">
						<img className="img-fluid img-thumbnail p-4" src="images/gallery/100-birthday-1-thumb.jpg" alt="Birthday Cookies" />
					</div>
				</div>
			</div>
		</main >
	);
}

