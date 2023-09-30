"use client"
import Navbar from '@/app/components/Navbar';
import { useState, useEffect } from 'react';
import { Client, Databases, ID, Query } from "appwrite"
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65166a7cb1e31d63ed2d');


function blogDetails({ params }) {
    const [blogPost ,setblogPost] = useState()
    const { slug } = params

    useEffect(() => {
        const databases = new Databases(client);
    
        const promise = databases.listDocuments(
          '651674ffd19d830499a1',
          '65168d26c5118a511ea8',
          [
            Query.equal('slug',slug)
          ]
        );
    
        promise.then(function (response) {
          console.log(response);
          setblogPost(response.documents[0])
        }, function (error) {
          console.log(error);
        });
      }, [])


    return (
    <>
<Navbar/>
    <div className="container mx-auto px-4 py-8">

        <h1 className='text-xl mb-4'>{blogPost?.title}</h1>

        <img className="w-70 h-48 object-cover rounded-t-lg" src={blogPost?.image} alt="" />

        <p>{blogPost?.cnntent}</p>


    </div>
    </>
    )
}

export default blogDetails
