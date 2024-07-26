import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signup = () => {

  // Hooks for the inputs 

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className="bg-slate-300 h-screen flex align-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-90 px-4 text-center p-2 rounded-lg h-max px-6">
          <Heading label={"Signup"} />
          <SubHeading  label={"Enter your Information to create an account"} />
          <InputBox onChange={ e=> {setFirstName(e.target.value);} }   placeholder={"Enter first name here"} label={"First Name"} />
          <InputBox onChange={ e=> {setLastName(e.target.value);}}  placeholder={"Enter last name here"} label={"Last Name"} />
          <InputBox onChange={e=> {setEmail(e.target.value);}}  placeholder={"Enter your email"} label={"Email"} />
          <InputBox onChange={e=> {setPassword(e.target.value);}}  placeholder={"Enter your password"} label={"Password"} />
          <Button label={"Signup"}  / >
          <BottomWarning  label={"Already have an account?"} buttonText={"Login"} to={"/signin"}  />

        </div>
      </div>
    </main>
  );
};

export default Signup;
