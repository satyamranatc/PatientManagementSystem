import React,{useEffect, useState} from 'react'
import axios from "axios"

export default function Patients() {

  let [patientList,setPatientList] = useState([]);

  useEffect(()=>{
    async function getData() 
    {

      let Res = await axios.get("http://localhost:8000/api/patient/list");
      setPatientList(Res.data);
    }
    getData();
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Patient <span className="text-blue-600">Card View</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            patientList.map((e,i)=>(
              <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative mb-4">
                      <img 
                        src={e.pic} 
                        alt={e.name} 
                        className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-blue-100"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{e.name}</h2>
                    
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                      Age: {e.age}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-500 mb-1">Medical Conditions</p>
                      <p className="text-gray-800 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">
                        {e.diseases}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      View Details
                    </button>
                    <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </section>

      </div>
    </div>
  )
}