import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreatorRegisteration = () => {


    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        contactnumber:"",
        address:"",
        type:"Creator"
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

      const register = (e) => {
        e.preventDefault()
        console.log(user)
        const { name, email, password } = user
        if( name && email && password ){
            axios.post("http://localhost:5000/addCreator", {
              type: user.type,
              name: user.name,
              email: user.email,
              password: user.password,
              contactnumber: user.contactnumber,
              address: user.address
            }).then( res => {
                alert("Successful Registration")
                console.log(res.data.Users)
                console.log("Yippee")
              }).catch((err) => console.log(err))
        } else {
            alert("invlid input")
        }
        
    }  
  return (
    
      <section className="signup">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
  <div className="container mt-5">
    <div className="signup-content">
      <div className="signup-form">
        <h2 className="form-title">Sign up</h2>
        <form className="user-register" id="user-register" onChange={handleChange}>

          <div className="mb-3">
            <input type="text" name="name" id="name" className="form-control" autoComplete="off" placeholder="Name" />
          </div>

          <div className="mb-3">
            <input type="email" name="email" id="email" className="form-control" autoComplete="off" placeholder="Email" />
          </div>

          <div className="mb-3">
            <input type="password" name="password" id="password" className="form-control" autoComplete="off" placeholder="Password" />
          </div>

          <div className="mb-3">
            <input type="text" name="contactnumber" id="contactnumber" className="form-control" autoComplete="off" placeholder="Contact Number" />
          </div>

          <div className="mb-3">
            <input type="text" name="address" id="address" className="form-control" autoComplete="off" placeholder="Address" />
          </div>

          <div className="text-center">
            <button type="submit" name="Register" id="Register" className="btn btn-primary" value="Register" onClick={register}>Register</button>
          </div>

        </form>

      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</section>


    
  )
}


export default CreatorRegisteration;