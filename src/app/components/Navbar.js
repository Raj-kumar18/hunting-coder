import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
<header className="text-white body-font bg-gray-800  ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl">HuntingCoder</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className='mr-5 hover:text-white' href="/">Home</Link>
        <Link className='mr-5 hover:text-white' href="/about">About</Link>
        <Link className='mr-5 hover:text-white' href="/blogs">Blogs</Link>
        <Link className='mr-5 hover:text-white' href="/contact">Contact Us</Link>
    </nav>
  </div>
</header>
</>
  )
}

export default Navbar
