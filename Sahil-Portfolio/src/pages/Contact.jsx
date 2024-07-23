import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./Contact.module.css"

function Contact() {
  return (
    <div className={styles.ContactMain}>
 
    <div className={styles.ContactContainer}>
    
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
    
  <div className={styles.FormContainer}>

<form action="save.php" method='post'>

<div className={styles.InputBox}>
 <input type="text" id='Fname' placeholder='Enter Full Name'/>
 <input type="text" placeholder='Enter Email Address'/>
</div>

<div className={styles.InputBox}>

 <input type="text"  placeholder='Enter E-mail Subject'/>
 <input type="number" placeholder='Enter Mobile Number'/>
</div>
<div className={styles.SendText}>

  <textarea name="textmsg" id='textmsg' placeholder='Type your message here' rows={8} cols={30} ></textarea>

</div>

<div className={styles.btn}>
<span className={`${styles.icon} badge rounded-pill primary`}>Submit</span>
</div>

</form>



  </div>

    </div>
    
    </div>
    
    
    
  )
}

export default Contact
