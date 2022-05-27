import React from 'react'

const View = () => {
    var viewlist=[{
        "name":"Adhi",
        "admno":"111",
        "cgpa":"7.8"



    }]
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-primary table-striped">
  <thead>
    <tr>
      
      <th scope="col">name</th>
      <th scope="col">admno</th>
      <th scope="col">cgpa</th>
      
    </tr>
  </thead>
  <tbody>
      {viewlist.map((value,key)=>{
          return <tr>
         
          <td>{value['name']}</td>
          <td>{value.admno}</td>
          <td>{value.cgpa}</td>
          <td><button className="btn btn-danger">DELETE</button></td>
        </tr>
          






      })}
    
    
  </tbody>
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