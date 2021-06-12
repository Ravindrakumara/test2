import React from 'react';

// import {
//   CPagination,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CDataTable,
//   CRow,
//   CNavbarNav,
//   CForm,
//   CInput, CNavbar, CBadge,
//   CButton, CContainer
// } from '@coreui/react'

// import CIcon from '@coreui/icons-react'
// import swal from 'sweetalert';

import API_SERVICE from './API_Service/API_SERVICE';

function List(records) {
  
  const editBtn = (list)=>{
    records.editBtn(list)
  }
// 
  const deletebtn = (list) => {
    // records.deletebtn(list)
    API_SERVICE.Delete_data(list.id)
      .then(() => records.deletebtn(list))
      .catch(error => console.log(error))
  }
  // const getBadge = status => {
  //   switch (status) {
  //     case 'Active': return 'success'
  //     case 'Inactive': return 'danger'
  //     default: return 'primary'
  //   }
  // }
  return (
   
    <div>
       {/* <h3>NEWSPAPER INFORMATIONS ALTER </h3> */}
      <h4><strong>CUNSUMER INFORMATIONS </strong></h4>
      <table class="table table-striped">
        <thead>
          
            <th scope="col">NAME</th>
              <th scope="col">ACCOUNT NO</th>
              <th scope="col">NEWSPAPER</th>
                <th scope="col">ADDRESS</th>
                  <th scope="col">TELEPHONE</th>
                    <th scope="col">E-MAIL</th>
                      <th scope="col">NOTEY</th>
                        <th scope="col">DELIVARY CHARGE</th>
                  <th scope="col">STATUS</th>
            
            <th scope="col">ACTION</th>
         
        </thead>
      {records.record && records.record.map(list=>{
         return(
           <>
             
             
               <tbody>
                 <tr >
                 <th scope="row" key={list.id}>{list.name}</th>
                 <td>{list.ac_no}</td>
                 <td>{list.newspaper_of}</td>
                 <td>{list.address}</td>
                 <td>{list.telephone}</td>
                 <td>{list.email}</td>
                 <td>{list.note}</td>
                 <td>{list.delivary_charge}</td>
                 <td><p >
                   <strong> <h6> {list.status}</h6></strong>
                 </p></td>

                

                  <th scope="col">
                   <input type="submit" size="sm" color="primary" onClick={() => editBtn(list)}/>Update &nbsp;&nbsp;&nbsp;
                   <input type="reset" size="sm" color="danger" onClick={() => deletebtn(list)}/>Delete!
                    </th>

                 </tr>
                 
                
               </tbody>
             
          </>
         )
       })}
      </table>
    </div>
    
  );
}

export default List;
