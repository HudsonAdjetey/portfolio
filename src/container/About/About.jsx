import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";

import {client, urlFor} from "../../client";


const abouts = [
  {
    title: "Web Development",
    description: 'I am a good web developer',
    imgUrl: images.about01
  },
  {
    title: "Web Design",
    description: 'I am a good web developer',
    imgUrl: images.about02
  },
  {
    title: "UI/UX",
    description: 'I am a good web developer',
    imgUrl: images.about03
  },
  {
    title: "Web animation",
    description: 'I am a good web developer',
    imgUrl: images.about04
  },
]

const About = () => {
/*     const [abouts, setAbout] = useState([])

  useEffect(()=> {
    const query = `*[_type == "abouts"]`;

    client.fetch(query)
        .then((data)=> {
          setAbout(data)
        }).catch(error => {
          console.log(error)
        })

  }, []) */

  return(
  <>
    <h2 className="head-text">I know that<span>Good Dev</span><br />means <span> Good Business</span></h2>

    <div className="app__profiles">
      {abouts.map((about, index)=> {
        return (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={about.imgUrl} alt="about" />
            <h2 className="bold-text" style={{marginTop: 20}} >{about.title}</h2>
            <p className="p-text" style={{marginTop: 10}} >{about.description}</p>
          </motion.div>
        )
      })}
    </div>
  </>)
};

export default About;
