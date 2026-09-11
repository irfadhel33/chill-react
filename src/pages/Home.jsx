import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../styles/Home.css";

import MovieSection from "../components/MovieSection";
// import MovieCard from "../components/MovieCard";
// import film1 from "../assets/images/film1.png";
import film2 from "../assets/images/film2.png";
import film3 from "../assets/images/film3.png";
import film4 from "../assets/images/film4.png";
import film5 from "../assets/images/film5.png";
import film6 from "../assets/images/film6.png";
import film7 from "../assets/images/film7.png";
import film8 from "../assets/images/film8.png";
import film9 from "../assets/images/film9.png";
import film10 from "../assets/images/film10.png";
import film11 from "../assets/images/film11.png";
import film12 from "../assets/images/film12.png";
import film13 from "../assets/images/film13.png";
import film14 from "../assets/images/film14.png";
import film15 from "../assets/images/film15.png";
import film16 from "../assets/images/film16.png";
import film17 from "../assets/images/film17.png";

function Home() {
  const movies = [
    {
      image: film2,
      title: "Don't Look Up",
    },
    {
      image: film3,
      title: "All Of Us Are Dead",
    },
    {
      image: film4,
      title: "Blue Lock",
    },
    {
      image: film5,
      title: "A Man Called Otto",
    },
    {
      image: film6,
      title: "Suzume",
      badge: {
        type: "new-episode",
        text: "Episode Baru",
      },
      
    },
    {
      image: film7,
      title: "Jurassic World Dominion",
    },
    {
      image: film8,
      title: "Sonic The Hedgehog 2",
    },
    {
      image: film9,
      title: "All of Us Are Dead",
      badge: {
        type: "new-episode",
        text: "Episode Baru",
      },
    },
    {
      image: film10,
      title: "Big Hero 6",
    },
    {
      image: film11,
      title: "The Tomorrow War",
      badge: {
        type: "top-ten",
        text: "Top 10",
        },
    },
    {
      image: film12,
      title: "Ant Man and the Wasp: Quantumania",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
    },
    {
      image: film13,
      title: "Guardians of the Galaxy Vol. 3",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
    },
    {
      image: film14,
      title: "A Man Called Otto",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
    },
    {
      image: film15,
      title: "The Little Mermaid",
      badge: {
        type: "top-ten",
        text: "Top 10",
      },
    },
    {
      image: film16,
      title: "Duty After School",
      badge: {
        type: "new-episode",
        text: "Episode Baru",
      },
    },
    {
      image: film17,
      title: "Missing",
    },
  ];

  // const resume = movies.slice(0, 2);
  const resume = movies.slice(0, 4);
  const topRating = movies.slice(4, 9);
  const trending = movies.slice(9, 14);
  const newRelease = [movies[13], movies[14], movies[9], movies[8], movies[15]];
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <MovieSection title="Melanjutkan Nonton" movies={resume} />
      <MovieSection title="Top Rating" movies={topRating} />
      <MovieSection title="Trending" movies={trending} />
      <MovieSection title="New Release" movies={newRelease} />
    </div>
  );
}

export default Home;
