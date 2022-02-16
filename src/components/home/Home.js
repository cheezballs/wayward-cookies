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
							<h1 style={{ color: "#403730" }}>Seriously Awesome Cookies</h1>
						</div>
					</div>
					<div className="row justify-content-center pt-5 gx-5">
						<div className="col- col-md-4">
							<img className="img-fluid img-thumbnail p-0 w-100" src="https://placekitten.com/500/500" alt="Kittens" />
							<h2 className="pt-2">Spider-Man</h2>
							<p>
								Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has since been featured in movies, television shows, video games, and plays. Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues and gave him many supporting characters, such as Flash Thompson, J. Jonah Jameson and Harry Osborn, romantic interests Gwen Stacy, Mary Jane Watson and the Black Cat, and foes such as Doctor Octopus, the Green Goblin and Venom.
							</p>
						</div>
						<div className="col-8 col-md-4">
							<img className="img-fluid img-thumbnail p-0 w-100" src="https://placekitten.com/550/550" alt="Kittens" />
							<h2 className="pt-2">Mannequin</h2>
							<p>
								Mannequin received a nomination for an Academy Award for Best Original Song for its main title song, "Nothing's Gonna Stop Us Now" by Starship,[4] which reached number one on both the Billboard Hot 100 and UK Singles Chart. In 1991, a sequel to the film called Mannequin Two: On the Move was released. Though the sequel takes place in the same department store in Philadelphia, only actors Meshach Taylor and Andrew Hill Newman returned from the original film.
							</p>
						</div>
						<div className="col-8 col-md-4">
							<img className="img-fluid img-thumbnail p-0 w-100" src="https://placekitten.com/540/540" alt="Kittens" />
							<h2 className="pt-2">Robocop</h2>
							<p>
								The success of RoboCop created a franchise comprising the sequels RoboCop 2 (1990) and RoboCop 3 (1993), children's animated series, multiple live-action television shows, video games, comic books, toys, clothing, and other merchandise. A reboot, also called RoboCop, was released in 2014. A direct sequel to the original 1987 film, tentatively titled RoboCop Returns, is in development as of 2020; it ignores other entries in the series.
							</p>
						</div>
					</div>
				</div>
			</main >
		</Fragment >
	);
}

