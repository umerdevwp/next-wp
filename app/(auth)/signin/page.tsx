"use client"
import { FormEvent } from 'react'
 
export default function SignInPage() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //const baseUrl = process.env.WORDPRESS_URL;
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    let username = 'admin';
    let password = 'admin!@#';
    const response = await fetch('http://localhost/socius/wp-json/wp/v2/users', {
      method: 'POST',
      body: formData,
      headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Basic' + Buffer.from(username + ":" + password).toString('base64'),
        },
    })
 
    // Handle response if necessary
    const data = await response.json();
    console.log(data);
    // ...
  }
 
  return (


    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 justify-center w-96">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form onSubmit={onSubmit}>
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
          Sign In
        </button>
      </form>
    </div>
 
  )
}