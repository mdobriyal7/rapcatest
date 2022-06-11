
import axios from 'axios'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

   
export default function Userform(){
    const [formdata,setformdata]= React.useState({})
    function monitorformdata(event){
        const{name,value,type}=event.target
        setformdata(prevformdata=>{
            return{...prevformdata, [name]:value}})
        }
        
function Postdata(e){
    e.preventDefault()
axios.post("https://reqres.in/api/users",formdata)
.then(res=>{toast("successfully posted data")})
.catch(err=>{toast(err)})


}

     console.log(formdata)   


           return(
               
               <form>
               
               <div className='container' style={{ width: "50rem", height: "30rem" }}>



       <div className="card-body"  >
           <h1><strong> insert User Data</strong></h1>
                    <div className="bodyparts">
                        <label ><strong>First Name</strong></label>
                        <input type="text" className="form-control"  placeholder="Enter Your First Name. " name="firstname" value={formdata.firstname} onChange={monitorformdata} />
                    </div>

                    <div className="bodyparts">
                        <label  className="form-label"><strong>Enter Lastname</strong></label>
                    
                        <input type="text" className="form-control"  placeholder="Enter Your Lastname."name="lastname" value={formdata.lastname} onChange={monitorformdata} />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={Postdata}>Submit</button>
                    </div>





<ToastContainer/>
       </div>
       </form>
    )
}