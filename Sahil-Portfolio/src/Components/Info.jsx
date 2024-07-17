import styles from "./Info.module.css"
import 'boxicons'

const Info=()=>{

  return <>

  <div className={styles.info}>

<div className={styles.TextContainer}>

<h3>Hello, Its me</h3>
<h1>Sahil Sinha</h1>
<h3>And, I'm a <span>FrontEnd Developer</span></h3>

<p>Lorem ipserendis quo dolore nemo maiores asperiores? Assumenda esse architecto iste atque, ad nihil veritatis eos tempora numquam nemo aliquam excepturi.
</p>

<div className={styles.social}>

  <a href="#"><box-icon type='logo' name='twitter'></box-icon></a>
  <a href="#"><box-icon name='instagram-alt' type='logo' ></box-icon></a>
  <a href="#"><box-icon type='logo' name='linkedin'></box-icon></a>
  <a href="#"><box-icon name='github' type='logo' ></box-icon></a>

</div>

<div className={styles.btn}>
<span class={`${styles.icon} badge rounded-pill primary`}>Download Resume</span>
</div>

</div>

<div className={styles.ImageContainer}>
<h3>wdgaivda</h3>
</div>

</div>

  </>
}

export default Info;