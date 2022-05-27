import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
   var [viewlist,setviewlist]=useState([])
   var [loadstatus,setloadstatus]=useState(true)

   axios.get("http://localhost:5000/api/view").then((response)=>{
     console.log(response.data)
     setviewlist(response.data)
     setloadstatus(false)
     


   })
  return (
    <div>
        <Navbar/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-primary table-striped">
  <thead className="table-success">
    
    <tr>
      <th scope="col">name</th>
      <th scope="col">admno</th>
      <th scope="col">cgpa</th>
      
    </tr>
  </thead>
  {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<tbody>
      {viewlist.map((value,key)=>{
          return <tr>
         
          <td>{value['name']}</td>
          <td>{value.admno}</td>
          <td>{value.cgpa}</td>
        </tr>
          






      })}
    
    
  </tbody>}
</table>






                        </div>




                    </div>


                </div>



            </div>



        </div>




    </div>
  )
}

export default View