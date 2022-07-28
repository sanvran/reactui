import React, { useState } from 'react'
import Navbar from '../component/Navbar'

const Login = () => {
   // state 
   const [showPassword, setShowPassword] = useState(false)
   return (
      <>
         <Navbar/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <form>
                     <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type={showPassword ? "text" : "password"} class="form-control" id="exampleInputPassword1" /> <p onClick={() => setShowPassword(!showPassword)} >
                           {!showPassword ? "Show" : "Hide"}
                        </p>
                     </div>
                     <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                     </div>
                     <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
               </div>
            </div>
         </div>

      </>
   )
}

export default Login