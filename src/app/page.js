"use client"
import Navbar from './components/Navbar';
import Image from 'next/image';
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


      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to,
        <br className="hidden lg:inline-block"/>Hunting Coder
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Blog</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src="/hero.jpg" width="500" height="500">
        </Image>
    </div>
  </div>
</section>





      <div className="container mx-auto px-4 py-8">

      <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900 text-center ">BLOGS
      </h1>


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
