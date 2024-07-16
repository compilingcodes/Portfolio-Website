
import styles from "./Navbar.module.css";

const Navbar=()=>{

  return <>

  <nav className={styles.navi}>

<h5>Portfolio</h5>

  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Skills</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#">Contact</a>
  </li>
</ul>

  </nav>

  </>

}

export default Navbar;