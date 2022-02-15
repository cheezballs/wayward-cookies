import "./Contact.css";

export default function Contact(props) {
	return (
		<main className="pt-md-5">
			<div className="container pt-md-5">
				<div className="row justify-content-center pb-4">
					<div className="col-md-6 text-center">
						<h1>Contact</h1>
					</div>
				</div>
				<div className="row justify-content-center gx-5 pt-4">
					<div className="col-md-5 mb-3 mb-md-0">
						<div className="col-6 mx-auto">Phone:</div>
						<div className="col-6 mx-auto">618.315.3240</div>
					</div>
				</div>
				<div className="row justify-content-center gx-5 pt-4 ">
					<div className="col-md-5 mb-3 mb-md-0">
						<div className="col-6 mx-auto">Email:</div>
						<div className="col-6 mx-auto"><a href="mailto:christina@waywardcookies.com">christina@waywardcookies.com</a></div>
					</div>
				</div>
				<div className="row justify-content-center gx-5 pt-4">
					<div className="col-md-5 mb-3 mb-md-0">
						<div className="col-6 mx-auto">Instagram:</div>
						<div className="col-6 mx-auto"><a href="https://www.instagram.com/waywardcookies">@waywardcookies</a></div>
					</div>
				</div>
			</div>
		</main >
	);
}

