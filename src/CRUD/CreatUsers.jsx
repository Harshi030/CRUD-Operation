import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreatUsers=()=> {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let navigate=useNavigate()

  let nameData=(e)=>{
    setName(e.target.value)
  }

  let salaryData=(e)=>{
    setSalary(e.target.value)
  }

  let companyData=(e)=>{
    setCompany(e.target.value)
  }

  let data=(e)=>{
    e.preventDefault()
    
    axios.post("http://localhost:3000/employees",{empName:name,empSalary:salary,empCompany:company})
    .then(()=>{console.log("Got the data");})
    .catch(()=>{console.log("ERORRRRR");})

    navigate("/users")
  }
  return (
    <section id={style.myForm}>
      <form action="">
        <h3>CREATE USER</h3>
        <label htmlFor="">Name: </label>
        <input type="text" value={name} onChange={nameData}/>
        <label htmlFor="">Salary: </label>
        <input type="text" value={salary} onChange={salaryData}/>
        <label htmlFor="">Company: </label>
        <input type="text" value={company} onChange={companyData}/>
        <button onClick={data}>SUBMIT</button>
      </form>
    </section>
  )
}

export default CreatUsers