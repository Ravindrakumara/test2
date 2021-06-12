import React, { useState, useEffect} from 'react';
import Select from 'react-select'
// import {
//     CPagination,
//     CCard,
//     CCardBody,
//     CCardHeader,
//     CCol,
//     CDataTable,
//     CRow,
//     CNavbarNav,
//     CForm,
//     CInput, CNavbar,
//     CButton, CContainer, CFormGroup, CCardFooter, CLabel, CSelect
// } from '@coreui/react';
// // import CIcon from '@coreui/icons-react'
import API_SERVICE from './API_Service/API_SERVICE';

function Form(records) {

    const [name, setName]  = useState('')
    const [ac_no, setAc_no] = useState('')
    const [newspaper_of, setNewspaper_of] = useState('')
    const [address, setAddress] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [note, setNote] = useState('')
    const [delivary_charge, setDelivary_charge] = useState('')
    const [status, setStatus] = useState('')
    // 
    const [selectOptions, setSelectOptions] = useState([])
    const [value, setValue] = useState([])

    // const [added_date, setAdded_date] = useState([records.list.added_date])
//  is it okay?
    useEffect(() => {
        setName(records.list.name)
        setAc_no(records.list.ac_no)
        setNewspaper_of(records.list.newspaper_of)
        setAddress(records.list.address)
        setTelephone(records.list.telephone)
        setEmail(records.list.email)
        setNote(records.list.note)
        setDelivary_charge(records.list.delivary_charge)
        setStatus(records.list.status)
        
    }, [])
    //records.list, Update_list


    const Update_list = () =>{
        API_SERVICE.updateforCustomer(records.list.id, {name,ac_no,newspaper_of,address,telephone,email,note,delivary_charge,status})
            .then(res => records.updateinfor(res))
            .catch(error => console.log(error))
    }


    // async getOptions() {

    //     const res = await axios.get('http://127.0.0.1:8000/api/Newspaper/')
    //     const data = res.data
    //     const options = data.map(d => ({ "value": d.id, "label": d.newspaper }))
    //     this.setState({ selectOptions: options })

    // }
     useEffect(() => {
         fetch('http://127.0.0.1:8000/api/Newspaper/', {
             'method': 'GET',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Token d518d5a876b5d03df917bd6e9015d387ef62a37d',
             }
         })
             .then(res => res.json())
             .then(res => setSelectOptions(res))
         const options = selectOptions.map(d => ({ "value": d.id, "label": d.newspaper }))
         setSelectOptions({ selectOptions: options })
    },[])
   
    
  
   
    
    return (
        <div>
            {/* {records.list && records.list.newspaper} */}
            {/* {records.list ?( */}
            {records.list ? (


                <div>
                   
                    <label htmlFor="company">Newspaper</label>
                                        <Select custom name="ccyear" options={newspaper_of} onChange={e => setNewspaper_of(e.target.value)} isMulti />
                                        {/* {this.state.value === null ? "" : this.state.value.map(v => <strong>{v.lable}</strong>)} */}
                    {/* <CInput id="company" value={this.state.newspaper} onChange={this.change_newspaperNameHandler} placeholder="Enter Newspaper" /> */}
                    <input id="company" name="newspaper" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Newspaper" />
                    <input id="company" name="ac" value={ac_no} onChange={e => setAc_no(e.target.value)} placeholder="Enter Newspaper" />
                    
                                       

                    <input id="company" name="newspaper" value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter Newspaper" />
                    <input id="company" name="newspaper" value={telephone} onChange={e => setTelephone(e.target.value)} placeholder="Enter Newspaper" />
                    <input id="company" name="newspaper" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Newspaper" />
                    <input id="company" name="newspaper" value={note} onChange={e => setNote(e.target.value)} placeholder="Enter Newspaper" />
                    <input id="company" name="newspaper" value={delivary_charge} onChange={e => setDelivary_charge(e.target.value)} placeholder="Enter Newspaper" />
                    
                                        <Select custom name="select" value={status} onChange={e => setStatus(e.target.value)} id="select">
                                            <option value="0">Please select</option>
                                            <option value="Active" > 🟢 Active  </option>
                                            <option value="Inactive"> 🔴 Inactive</option>

                                        </Select>
                       
                       
                </div>
            ) : null}
            
            
           
        </div>
    )
}

export default Form
