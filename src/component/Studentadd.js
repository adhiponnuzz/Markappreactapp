import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Studentadd = () => {
    var [name,setName]=useState("")
    var [admno,setAdmno]=useState("")
    var [cgpa,setCgpa]=useState("")

    const subData=()=>{
        const data={"name":name,"admno":admno,"cgpa":cgpa}
        console.log(data)

        axios.post("http://localhost:5000/api/markadd",data).then((response)=>{
            console.log(response.data)
            if(response.data.status=="success")
            {
                alert("successfully added")


            }
            else{

                alert("failed to added")
            }



        })


    }
  return (
    <div>
        <Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} placeholder="Enter Admno" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Cgpa</label>
                    <input onChange={(e)=>{setCgpa(e.target.value)}} placeholder="Enter Cgpa" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>





    </div>
  )
}

export default Studentadd
