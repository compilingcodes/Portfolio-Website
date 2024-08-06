import React from 'react'
import { Link } from "react-router-dom";
import styles from "./About.module.css"
import logo from "./coverimage.jpg"

function About() {
  return (

<div className={styles.AboutMain}>
 
<div className={styles.AboutContainer}>

<nav className={styles.navi}>

<h5>Portfolio.</h5>

  <ul class="nav justify-content-end">
  <li class="nav-item">

  <Link class="nav-link active" aria-current="page"  to="/">Home</Link>
  
  </li>
  <li class="nav-item">
   <Link class="nav-link active" aria-current="page"  to="/about">About</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link active" aria-current="page"  to="/skills">Skills</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link active" aria-current="page"  to="/contact">Contact</Link>
  </li>
</ul>

  </nav>

<div className={styles.AboutContent}>

  <div className={styles.ImageContainer}>
{/* <img src={logo} alt="" /> */}
</div>

<div className={styles.TextContainer}>

<h1>About Me</h1>
<h3>FrontEnd Developer!</h3>
<p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Eum sapiente eius minima, temporibus <br />cupiditate assumenda pariatur provident <br />rerum  Eaque repudiandae id quas error harum veritatis quae<br /> aperiam esse aliquid!t consectetur <br />adipisicing eleius minima, temporibus <br />cupiditate assumm veritatis quae<br /> aperiam </p>
</div>


</div>

</div>

  </div>


  )
}

export default About;
//rfce

