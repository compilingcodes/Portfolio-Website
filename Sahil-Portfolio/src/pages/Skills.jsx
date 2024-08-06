import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Skills.module.css"
import logo from "./htm.jpeg"

function Skills() {
  return (

    <div className={styles.SkillsMain}>
 
    <div className={styles.SkillsContainer}>
    
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
    
  <div className={styles.LogoContainer}>

<div className={styles.Row}>

<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

</div>

<div className={styles.Row}>


<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

<div className={styles.my}>
  <div className={styles.u}></div>
  <img src={logo} alt="" />
</div>

</div>


  </div> 

    </div>
    
     
    </div>
    
  )
}

export default Skills
