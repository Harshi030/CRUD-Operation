import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const EditPage = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")

  let obj=useParams()
  
  let navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3000/employees/${obj.id}`)
    .then((response)=>{
      setName(response.data.empName);
      setSalary(response.data.empSalary)
      setCompany(response.data.empCompany)
    })
    .catch(()=>{console.log("ERRORR.....");})
  },[obj.id])

  let nameData=(e)=>{
    setName(e.target.value)
  }

  let salaryData=(e)=>{
    setSalary(e.target.value)
  }

  let companyData=(e)=>{
    setCompany(e.target.value)
  }

  let data=()=>{
    axios.put(`http://localhost:3000/employees/${obj.id}`,{empName:name,empSalary:salary,empCompany:company})

    navigate("/users")
  }
  return (
    <section id={style.myForm}>
      <form action="">
        <h3>EDIT USER</h3>
        <label htmlFor="" >Name: </label>
        <input type="text" value={name} onChange={nameData}/>
        <label htmlFor="">Salary: </label>
        <input type="text"  value={salary} onChange={salaryData}/>
        <label htmlFor="">Company: </label>
        <input type="text" value={company} onChange={companyData}/>
        <button onClick={data}>UPDATE</button>
      </form>
    </section>
  )
}

export default EditPage