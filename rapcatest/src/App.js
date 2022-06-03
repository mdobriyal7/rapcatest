
import './App.css';
import React from 'react'
import axios from 'axios';
import Listusers from './components/Listusers';
import { createContext, useEffect } from 'react'

import 'react-toastify/dist/ReactToastify.css'

export const apicontext = createContext()


function App() {
  const [apidata, setapidata] = React.useState([])

  useEffect(() => {
    async function getapidata() {

      const response = await axios.get("https://reqres.in/api/users?page=1")
      console.log(response.data.data)
      setapidata(response.data.data)

    }
    getapidata();

  }, [])

  return (
    <apicontext.Provider value={{ apidata: apidata }}>
      <Listusers />
    </apicontext.Provider>
  )
}


export default App;
