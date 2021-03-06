import "./Gallery.css";
import { useState } from "react";
import ImageMasonry from "react-image-masonry";

export default function Gallery(props) {

	const [fullScreenImageUrl, setFullScreenImageUrl] = useState("");
	const [numColsToDisplay] = useState(3);

	const galleryImages = ["100-birthday-1-thumb.jpg", "home-1-thumb.jpg", "tea-party-1-thumb.jpeg", "sports-1-thumb.jpeg", "chiefs-cookies-1-thumb.jpg", "stranger-things-1-thumb.jpeg", "pride-1-thumb.jpeg", "baby-1-thumb.jpeg", "nurse-1-thumb.jpg", "llama-cookies-1-thumb.jpg", "birthday-1-thumb.jpg", "workout-1-thumb.jpg", "birthday-2-thumb.jpg", "tropical-1-thumb.jpg", "misc-1-thumb.jpeg", "fishing-1-thumb.jpg", "camping-1-thumb.jpeg", "pugicorn-thumb.jpeg", "spring-1-thumb.jpeg", "spring-2-thumb.jpeg", "baseball-1-thumb.jpg", "birthday-3-thumb.jpg", "toy-story-1-thumb.jpg", "fourth-july-1-thumb.jpeg", "chiefs-2-thumb.jpeg", "get-well-1-thumb.jpeg", "graudation-1-thumb.jpeg", "littler-1-thumb.jpeg", "realtor-1-thumb.jpeg"];

	const handleImageClick = (e) => {
		const fullImageSource = e.target.src.replace("-thumb", "");
		setFullScreenImageUrl(fullImageSource);
	}

	return (
		<main className="pt-md-5">
			<div className="container pt-md-5">
				<div className="row justify-content-center pt-5 gx-5">
					<ImageMasonry numCols={numColsToDisplay}>
						{
							galleryImages.map((image, i) => {
								return (<div className="gallery-img-thumbnail" key={i}>
									<img src={"images/gallery/" + image} alt="Cookie" onClick={handleImageClick} data-bs-toggle="modal" data-bs-target="#imageModal" />
								</div>)
							})
						}
					</ImageMasonry>
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
