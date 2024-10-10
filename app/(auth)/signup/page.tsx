
"use client"
import { FormEvent } from 'react'
import { useEffect } from 'react';
 
export default async function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const formdata = new FormData();
    formdata.append("username", "admin");
    formdata.append("password", "admin!@#");
    const response = await fetch('http://www.localhost/socius/wp-json/jwt-auth/v1/token',{
      method: 'POST',
      headers:{
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Access-Control-Allow-Origin' : '*'
      },
      
      mode: 'no-cors',
      body:JSON.stringify({
          username: 'admin',
          password: 'admin!@#'
      }),
      
      });
      const Gtoken = response;
      console.log(Gtoken);
      return response;




  }
    
  return (


    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 justify-center w-96">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="username"
            type="text"
            
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
           
            placeholder="●●●●●●●●●●"
          />
        </div>
      
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
 
  )
}