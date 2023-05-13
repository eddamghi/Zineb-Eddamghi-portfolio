/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Frame2.png";
const imageAltText = "desktop with books and laptop";

/**
 * Card list
 *
 * An array of objects that will be used to display card components for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const cardList = [
  {
    title: "Git Hub profile",
    description:"",
    image: require("../images/Frame.png"),
    url: "https://github.com/eddamghi",
  },
  {
    title: "My Blog",
    description: "",
    image: require("../images/Frame.png"),
    url: "https://eddamghizineb.blogspot.com/2023/05/my-experience-as-mentor-at-digigirlz.html",
  },
  {
    title: "GDSC Core team member",
    description: "",
    image: require("../images/Frame4.png"),
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Microsoft Student Embassador",
    description: "",
     image: require("../images/Frame.png"),
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {cardList.map((card) => (
            <div className="box" key={card.title}>
              <img 
                src={card.image.default}
                alt="image"
                style={{ height: "60px", width: "100%" }}
              />
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "35px" }}>{card.title}</h3>
              </a>
              <p className="small">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;