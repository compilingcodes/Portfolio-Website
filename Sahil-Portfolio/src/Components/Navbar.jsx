
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar=()=>{

  return <>

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

  </>

}

export default Navbar;