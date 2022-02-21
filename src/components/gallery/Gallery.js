import "./Gallery.css";
import { useState } from "react";

export default function Gallery(props) {

	const [fullScreenImageUrl, setFullScreenImageUrl] = useState("");

	const handleImageClick = (e) => {
		const fullImageSource = e.target.src.replace("-thumb", "");
		setFullScreenImageUrl(fullImageSource);
	}

	return (
		<main className="pt-md-5">
			<div className="container pt-md-5">
				<div className="row justify-content-center pt-5 gx-5">
					<div className="col-5 col-md-4 pb-5">
						<div className="gallery-img-thumbnail">
							<img className="img-fluid" src="images/gallery/100-birthday-1-thumb.jpg" alt="Birthday Cookies" onClick={handleImageClick} data-bs-toggle="modal" data-bs-target="#imageModal" />
						</div>
					</div>
					<div className="col-5 col-md-4 pb-5">
						<div className="gallery-img-thumbnail">
							<img className="img-fluid" src="images/gallery/chiefs-cookies-1-thumb.jpg" alt="Chiefs Cookies" onClick={handleImageClick} data-bs-toggle="modal" data-bs-target="#imageModal" />
						</div>
					</div>
					<div className="col-5 col-md-4 pb-5">
						<div className="gallery-img-thumbnail">
							<img className="img-fluid" src="images/gallery/llama-cookies-1-thumb.jpg" alt="Chiefs Cookies" onClick={handleImageClick} data-bs-toggle="modal" data-bs-target="#imageModal" />
						</div>
					</div>
					<div className="col-5 col-md-4 pb-5">
						<div className="gallery-img-thumbnail">
							<img className="img-fluid" src="images/gallery/birthday-1-thumb.jpg" alt="Chiefs Cookies" onClick={handleImageClick} data-bs-toggle="modal" data-bs-target="#imageModal" />
						</div>
					</div>
					<div className="col-5 col-md-4 pb-5">
						<div className="gallery-img-thumbnail">
							<img className="img-fluid" src="images/gallery/workout-1-thumb.jpg" alt="Chiefs Cookies" onClick={handleImageClick} data-bs-toggle="modal" data-bs-target="#imageModal" />
						</div>
					</div>
					<div className="col-5 col-md-4 pb-5">
						<div className="gallery-img-thumbnail">
							<img className="img-fluid" src="images/gallery/birthday-2-thumb.jpg" alt="Chiefs Cookies" onClick={handleImageClick} data-bs-toggle="modal" data-bs-target="#imageModal" />
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="imageModal" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-body p-0">
							<img src={fullScreenImageUrl} alt="Full Screen" width={"100%"} />
						</div>
					</div>
				</div>
			</div>
		</main >
	);
}