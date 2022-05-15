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
      name: "Weather Dashboard",
      description: "This app was created using the OpenWeather API. This app allows users to search names of cities for current weather data and a detailed 5 day forecast. Upon searching the name of the city it will be saved under the search input along with any other cities searched.",
      image: 'https://i.imgur.com/s23SlRD.jpg',
      link: 'https://meganann201.github.io/weather-dashboard/',
      repo: 'https://github.com/meganann201/weather-dashboard'
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