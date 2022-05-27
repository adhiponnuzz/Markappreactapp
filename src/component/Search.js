import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const deleteApicall=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:5000/api/delete",data).then((Response)=>{
            if(Response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else{
                alert("error in deletion")
            }
        })
    }
      
        
    
    var [admno,setAdmno]=useState("")
    const [data,setData]=useState([{"name":"","cgpa":""}])

    const subData=()=>{
        const data={"admno":admno}
        console.log(data)
        axios.post("http://localhost:5000/api/search",data).then((Response)=>{
            console.log(Response.data)
            setData(Response.data)
        })
    }
   
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={subData} className="btn btn-success">SEARCH</button>
                </div>
            </div>
            {data.map((value,key)=>{

                return <div className="row g-3">
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
                   <label for="" className="form-label">Name</label>
                   <input type="text" value={value.name} className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Cgpa</label>
                <input type="text" value={value.cgpa} className="form-control"/>
                
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={()=>{deleteApicall(value._id)}}  className="btn btn-success">DELETE</button>
                </div>
                </div>
               
            })}
        </div>
    </div>
</div>


    </div>
  )
}

export default Search