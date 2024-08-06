import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Contact.module.css";
import Form from "./Form";

function Contact() {
  return (
    <div className={styles.ContactMain}>
      <div className={styles.ContactContainer}>
        <nav className={styles.navi}>
          <h5>Portfolio.</h5>

          <ul class="nav justify-content-end">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/skills">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Form></Form>
        
      </div>
    </div>
  );
}

export default Contact;
