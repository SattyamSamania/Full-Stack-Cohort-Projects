import React, { useState } from 'react'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'


const Signin = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
  return (
    <>

       <main className="bg-slate-300 h-screen flex align-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-90 px-4 text-center p-2 rounded-lg h-max px-6">
          <Heading label={"Sign In"} />
          <SubHeading  label={"Enter your credentials to access your account"} />
          
          <InputBox  onChange={ e=> {setEmail(e.target.value);}  }  placeholder={"Enter your email"} label={"Email"} />
          <InputBox onChange={  e=> {setPassword(e.target.value);} }  placeholder={"Enter your password"} label={"Password"} />
          <Button label={"Sign In"}  / >
          <BottomWarning  label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />

        </div>
      </div>
    </main>
    </>
  )
}

export default Signin
