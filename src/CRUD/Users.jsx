import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Users=()=> {
  let [user,setUser]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/employees")
    .then((response)=>{setUser(response.data)})
    .catch(()=>{console.log("NO Data Found in it......")})
  },[])

  let deleteUser=(id)=>{
    axios.delete(`http://localhost:3000/employees/${id}`)
    window.location.assign("/users")
  }
  return (
    <div id={style.cardContainer}>
      {user.map((i)=>{
        return(
          <div id={style.card}>
            <p>Name: {i.empName}</p>
            <p>Salary: {i.empSalary}</p>
            <p>Company: {i.empCompany}</p>
            <section>
            <Link to={`/edit/${i.id}`}><button>EDIT</button></Link>
            <button onClick={()=>{deleteUser(i.id)}}>DELETE</button>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default Users