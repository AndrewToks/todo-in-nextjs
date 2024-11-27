"use client"
import React, { useState } from 'react'
import Todo from "../Components/Todo.jsx"
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const page = () => {
    const [formData,setFormData] = useState({
        title:"",
        description:""
    })
    const handleChange =(e) =>{
        const {name, value} = e.target
        setFormData({
            ...formData,[name]:value
        })
        console.log(formData);
        
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            //api code
            toast.success('Success')
        } catch (error) {
            toast.error("Error")
        }
        
    };
  return (
    <div>
        <ToastContainer theme='dark' />
        <form onSubmit={handleSubmit} className='flex  items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto'>
            <input onChange={handleChange} value={formData.title} type="text" name='title' placeholder='Enter Title' className='px-3 py-2 border-2 w-full' />
            <textarea onChange={handleChange} value={formData.description} name="description" placeholder='Enter Description' className='px-3 py-2 border-2 w-full'></textarea>
            <button type='submit' className='bg-orange-600 py-3 px-11 text-white'>Add Todo</button>
        </form>
        <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto"> 
        <table  className="w-full  text-sm  text-left  rtl:text-right  text-gray-500  dark:texgra40">
            <thead  className="text-xs  text-gray-700  uppercase  bg-gray-50  dark:bg-gray-700  dark:text-gray-4 0 0"> 
                <tr> 
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th> 
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th> 
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th> 
                    <th  scope="col"  className="px-6  py-3" > 
                        Status
                    </th> 
                    <th  scope="col"  className="px-6  py-3" > 
                        Action
                    </th> 
                </tr> 
            </thead> 
        <tbody>
            <Todo />
            <Todo />
            <Todo />
        </tbody>
        </table> 
 </div> 
    </div>
  )
}

export default page