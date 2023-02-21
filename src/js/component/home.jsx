import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx"
import { Card } from "./card.jsx"
import { Footer } from "./footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<div className="container-fluid m-0 p-0">
			<NavBar />
			<div className="row px-5" style={{width:"100%"}}><Jumbotron /></div>
		<div className="row px-5 mb-2" style={{width:"100%"}} align="center">
			<Card imageUrl="https://fastly.picsum.photos/id/184/500/325.jpg?hmac=rXFjFCCwU-x6AcZI39mznVS2VW7irJmtxvKmLhnV27E" cardTitle="Card 1" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" buttonUrl="https://google.com" buttonLabel="Go to Google" />
			<Card imageUrl="https://fastly.picsum.photos/id/452/500/325.jpg?hmac=VNJh0nP2FqSn2RHxAVnZqoqpFhCZatWHkQu11X0bgCA" cardTitle="Card 2" cardText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae  ab illo inventore veritatis et quas." buttonUrl="https://www.wikipedia.org/" buttonLabel="Go to Wikipedia" />
			<Card imageUrl="https://fastly.picsum.photos/id/880/500/325.jpg?hmac=pGjBF0lsVyQmk8OxS4YLWQHwjTRBE3EhtKrDUa5jtRc" cardTitle="Card 3" cardText="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt" buttonUrl="https://4geeks.com/" buttonLabel="Go to 4Geeks" />
			<Card imageUrl="https://fastly.picsum.photos/id/642/500/325.jpg?hmac=2Wvny8MXaGnSVkKjpEz-0cQ21lEkdCsl8DAV8H0ynhw" cardTitle="Card 4" cardText="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam" buttonUrl="https://github.com/" buttonLabel="Go to GitHub" />
		</div>
		<Footer />
	</div>
	
	)
};

export default Home;
