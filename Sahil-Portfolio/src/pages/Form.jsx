import React, { useState } from 'react'
import styles from "./Form.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

function Form() {

const [name, setName]=useState();

const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3001/submit',{name})
  .then(result=>console.log(resule))
  .catch(err=> console.log(err))
}

return (

    <div className={styles.FormContainer}>
      <form onSubmit={handleSubmit} >

<div className={styles.InputBox}>
 <input type="text" id='Fname' placeholder='Enter Full Name'
 
 onChange={(e)=>
  setName(e.target.value)

 }

 />
 
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
    
  )
}

export default Form
