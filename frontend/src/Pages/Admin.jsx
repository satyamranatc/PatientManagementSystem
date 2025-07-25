import React,{useState,useEffect} from 'react'
import { UserIcon } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'

export default function Admin() {


  let [patientList,setPatientList] = useState([]);

  useEffect(()=>{
    async function getData() 
    {

      let Res = await axios.get("http://localhost:8000/api/patient/list");
      setPatientList(Res.data);
    }
    getData();
  },[])

  async function handleSubmit(e) {
    e.preventDefault();

    let Data = {
      name: e.target[0].value,
      pic: e.target[1].value,
      age: e.target[2].value,
      diseases: e.target[3].value
    }
    console.log(Data);
    let Res = await axios.post("http://localhost:8000/api/patient/create", Data);
    if(Res.data.status == "success"){
      toast.success("Patient Added Successfully!");
    }
    else{
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        
        {/* Header Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h2>
          <p className="text-gray-600">Manage All Your Data From Here....</p>
        </section>

        {/* Form Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-700 font-medium">
                <UserIcon size={20} className="text-blue-500" />
                Patient Name
              </label>
              <input 
                type="text" 
                placeholder="Enter patient name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Patient Picture URL
              </label>
              <input 
                type="text" 
                placeholder="Enter image URL" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Patient Age
              </label>
              <input 
                type="number" 
                placeholder="Enter patient age" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Diseases
              </label>
              <select 
                name="diseases"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Select a condition</option>
                <option>Cancer</option>
                <option>Heart Disease</option>
                <option>Diabetes</option>
                <option>Other</option>
                <option>Jan Leva Kuch To Bhi</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Patient Data
            </button>

          </form>
        </section>

      
        <section className="mt-8">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">Name</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">Picture</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">Diseases</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">Update</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {
                  patientList.map((e,i)=>(
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">{e.name}</td>
                      <td className="px-4 py-3"><img src={e.pic} alt="" className="w-12 h-12 rounded-full object-cover" /></td>
                      <td className="px-4 py-3 text-gray-800">{e.diseases}</td>
                      <td className="px-4 py-3"><button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Update</button></td>
                      <td className="px-4 py-3"><button className="bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </section>
      </div>
      <ToastContainer />
    </div>
  )
}