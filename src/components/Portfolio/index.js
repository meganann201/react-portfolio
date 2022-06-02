import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const initialProjects = [
    {
      name: "La Cocina",
      description: "For when you're feeling like trying something new but not sure what. La Cocina is your virtual cookbook! Users are able to create, view and even favorite recipes to come bak to later.",
      image: 'https://i.imgur.com/w6UrLEo.jpg',
      link: 'https://fast-everglades-74532.herokuapp.com/',
      repo: 'https://github.com/meganann201/la-cocina'
    },
    {
      name: 'IMBD',
      description: 'A movie database web application that utilizes the TMBD API to provide a seamless and responsive research experience.',
      image: 'https://i.imgur.com/q6ex5h9.jpg',
      link: 'https://alexnj1.github.io/imbd/',
      repo: 'https://github.com/meganann201/imbd'
    },
    {
      name: "Eagle Fitness",
      description: "A full Stack APP to track gym/trainer clients. This is a full stack application, hosted on heroku, that utilizes Node.js, Express.js, MongoDB, various NPM packages and various full stack web development concepts to create a fitness trakcer style website.",
      image: 'https://raw.githubusercontent.com/meganann201/eagle-fitness/main/client/public/images/screenshot_1.png',
      link: 'https://eagle-fitness.herokuapp.com/',
      repo: 'https://github.com/meganann201/eagle-fitness'
    },
  ];
  const [projects, setProjects] = useState(initialProjects);

  return (
    <div className="container pt-4">
      <div className="row">
        <h2 className="text-center">Recent Projects</h2>
      {projects.map(p => (
        <Project name={p.name} description={p.description} image={p.image} link={p.link} repo={p.repo}/>
      ))}
      </div>
    </div>
  );
}

export default Portfolio;