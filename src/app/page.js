"use client"
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Client, Databases, ID } from "appwrite"
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65166a7cb1e31d63ed2d');


export default function Home() {

  const [blogPosts, setblogPosts] = useState([])
  useEffect(() => {
    const databases = new Databases(client);

    const promise = databases.listDocuments(
      '651674ffd19d830499a1',
      '65168d26c5118a511ea8',
    );

    promise.then(function (response) {
      console.log(response);
      setblogPosts(response.documents)
    }, function (error) {
      console.log(error);
    });
  }, [])
  return (
    <>
      <Navbar />
      <h1>Welcome , to Hunting coder</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md">
              <img src={post.image} alt="" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="py-4 px-4">
                <h2 className="tex-xl font-bold mb-2">{post.title}</h2>
                <p>{post.cnntent}</p>
                <Link href={`/blog/${post.slug}`} className='mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600' >Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
