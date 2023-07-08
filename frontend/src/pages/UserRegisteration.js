import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const UserRegisteration = () => {


    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        classes:"",
        age:"",
        school:"",
        contactnumber:"",
        address:"",
        uidse:"",
        language1:"",
        language2: "",
        type:"Student"
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
            axios.post("http://localhost:5000/adduser", {
              type: user.type,
              name: user.name,
              email: user.email,
              password: user.password,
              classes: user.classes,
              age: user.age,
              school: user.school,
              contactnumber: user.contactnumber,
              address: user.address,
              uidse: user.uidse,
              language1: user.language1,
              language2: user.language2
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
            <input type="text" name="class" id="class" className="form-control" autoComplete="off" placeholder="Class" />
          </div>

          <div className="mb-3">
            <input type="text" name="age" id="age" className="form-control" autoComplete="off" placeholder="Age" />
          </div>

          <div className="mb-3">
            <input type="text" name="school" id="school" className="form-control" autoComplete="off" placeholder="School" />
          </div>

          <div className="mb-3">
            <input type="text" name="contactnumber" id="contactnumber" className="form-control" autoComplete="off" placeholder="Contact Number" />
          </div>

          <div className="mb-3">
            <input type="text" name="address" id="address" className="form-control" autoComplete="off" placeholder="Address" />
          </div>

          <div className="mb-3">
            <input type="text" name="UDISE" id="UDISE" className="form-control" autoComplete="off" placeholder="UDISE" />
          </div>

          <div className="mb-3">
  
            <select name="language1" id="language1" className="form-control">
              <option value="">Preferred language-1</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Telugu">Telugu</option>
              <option value="Marathi">Marathi</option>
              <option value="Tamil">Tamil</option>
              <option value="Urdu">Urdu</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Kannada">Kannada</option>
              <option value="Odia">Odia</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Assamese">Assamese</option>
              <option value="Maithili">Maithili</option>
              <option value="Santali">Santali</option>
              <option value="Kashmiri">Kashmiri</option>
              <option value="Nepali">Nepali</option>
              <option value="Sindhi">Sindhi</option>
              <option value="Konkani">Konkani</option>
              <option value="Manipuri">Manipuri</option>
              <option value="Dogri">Dogri</option>
              <option value="Bodo">Bodo</option>
              <option value="Sanskrit">English</option>
            </select>
          </div>


           <div className="mb-3">
  
            <select name="language2" id="language2" className="form-control">
              <option value="">Preferred language-2</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Telugu">Telugu</option>
              <option value="Marathi">Marathi</option>
              <option value="Tamil">Tamil</option>
              <option value="Urdu">Urdu</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Kannada">Kannada</option>
              <option value="Odia">Odia</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Assamese">Assamese</option>
              <option value="Maithili">Maithili</option>
              <option value="Santali">Santali</option>
              <option value="Kashmiri">Kashmiri</option>
              <option value="Nepali">Nepali</option>
              <option value="Sindhi">Sindhi</option>
              <option value="Konkani">Konkani</option>
              <option value="Manipuri">Manipuri</option>
              <option value="Dogri">Dogri</option>
              <option value="Bodo">Bodo</option>
              <option value="Sanskrit">English</option>
            </select>
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


export default UserRegisteration;