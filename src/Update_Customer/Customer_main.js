import React, { useState, useEffect} from 'react';
// import logo from './logo.svg';
// import Pagination from "@material-ui/lab/Pagination";
// import './App.css';
import List from './Component/List';
import Form from './Component/Form';
//

function App() {
  const [record, setRecord] = useState([])
  const [edit, setEdit] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/Consumer/', {
      'method': 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Token d518d5a876b5d03df917bd6e9015d387ef62a37d',
      }
    })
      .then(res => res.json())
      .then(res => setRecord(res))
    
  }, [])

  const editBtn = (list) => {
    setEdit(list)
  }

  // const add_new = (list)=>{
  //   // // const newlist = [...record,list]
  //   // const newlist = [...record, list]
  //   // setEdit({ newspaper: '', language: '', wh_price: '', sa_price: '', description: '', company: '', publication: ''})
  //   // 
  //   // setEdit(newlist)
  // }
// refresh
  // const insertedInfor = (list)=>{
  //   const newlist = [...record, list]
  //   setEdit(newlist)
  // }

  const deleteBtn = (list) => {
    const newlist = record.filter(mylist => {
      if (mylist.id === list.id) {
        return false;
      } else {
        return true;
      }
     
  })
    setEdit(newlist)
}
  const news = console.log("hello", record)
  const updateinfor = (list) => {
    const newlist = record.map(mylist=>{
      if (mylist.id === list.id){
        return list;
      }else{
        return mylist;
      }
    })
    setRecord(newlist)
  }
// filter data
  const datafilter = record.filter(data => {
    // return data.newspaper.toLowerCase().includes(search.toLowerCase())
    //   .catch(error => console.log(error))
  })

  return (
   
    <div >{search}{news}
      {/* &nbsp;&nbsp;&nbsp;<input type="text" placeholder="Search" onChange{...e => setSearch(e.target.value)} /> */}
      &nbsp;&nbsp;&nbsp;
      {/* <button onClick={add_new}>Insert</button> */}
      {edit ? <Form list={edit} updateinfor={updateinfor} /> : null}
      <List record={record} editBtn={editBtn} deleteBtn={deleteBtn} datafilter={datafilter}/>
     
      {/* <Pagination count={10} page={page} onChange={handleChange} /> */}
      
    </div>
    
  );
} 

export default App;
