import React from 'react'
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import "./Footer.css";
import { Collapse } from 'antd'
import bigarrow from "../Assets/bigarrow.png";
import bigarrowup from "../Assets/bigarrowup.png";
import digital1 from "../Assets/bg11.jpg";
import Header2 from './Header2';
import Form1 from './Form1';
import Hero from './Hero';
import Footer1 from './Footer1';
import TestCard from './TestCard'

const text = 
<div className='h-[280vh] '>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-16'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-16'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-16'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text2 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 ml-28 rounded-lg mt-12 '>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-12'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-12'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text3 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg  mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text4 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>

const text5 =
<div className='h-[280vh]'>
<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-96 font-semibold' >App Modernization</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex    '>
<div className='  '>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Microservices-Based Web Application Development</h1>
   
</div>
<div className='h-60' >
<h1 className='pt-10 ml-28 mr-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-28'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Buisness Mobility Solution</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Cloud & DevOps</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Quality Engineering</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />

<div className='flex  gap-20'>
<div>
    <h1 className='text-4xl mt-12 ml-12 w-[460px] font-semibold' >Continous Management Services</h1>
   
</div>
<div className='h-60' >
    <h1 className='pt-10 ml-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima, nihil fugiat cumque laborum doloribus sit voluptate rerum dolore, mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi vitae adipisci accusamus quos.
    </h1>
    <button className=' border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8'>Book Service</button>
</div>
</div>
<hr className='bg-black h-[2px]' />
<div>
<div className='text-base font-bold absolute right-5  '>
<img className='size-16' src={bigarrowup} alt="" />
       <button className='ml-2'>Close</button>
       
       
       </div>
</div>

</div>


const items = [
    {
      key: '1',
      label: <div className='  flex lg:text-6xl text-2xl  relative font-semibold h-96 '> 
      {/* <img className='-ml-10 w-screen' src="https://unsplash.it/2700/600/?random" alt="" /> */}
        <h1 className='pt-72 absolute '> Digital Enterprise</h1> 
       <div className='text-base font-bold absolute bottom-7 right-5 '>
       <button className='-ml-2'>Tap for more</button>
       <img className='size-16' src={bigarrow} alt="" />
       
       </div>
      </div>,
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: <div className=' flex lg:text-6xl text-2xl relative font-semibold h-96 '> 
      <h1 className='pt-72'> Digital Experience</h1> 
     <div className='text-base font-bold absolute bottom-7 right-5 '>
     <button className='-ml-2'>Tap for more</button>
     <img className='size-16' src={bigarrow} alt="" />
     
     </div>
    </div>,
      children: <p>{text2}</p>,
    },
    {
      key: '3',
      label: <div className=' flex lg:text-6xl text-2xl relative font-semibold h-96 '> 
      <h1 className='pt-72'> Digital Marketing</h1> 
     <div className='text-base font-bold absolute bottom-7 right-5 '>
     <button className='-ml-2'>Tap for more</button>
     <img className='size-16' src={bigarrow} alt="" />
     
     </div>
    </div>,
      children: <p>{text3}</p>,
    },
    {
        key: '4',
        label: <div className=' flex lg:text-6xl text-2xl relative font-semibold h-96 '> 
        <h1 className='pt-72'> Digital Innovation</h1> 
       <div className='text-base font-bold absolute bottom-7 right-5 '>
       <button className='-ml-2'>Tap for more</button>
       <img className='size-16' src={bigarrow} alt="" />
       
       </div>
      </div>,
        children: <p>{text4}</p>,
      },
      {
        key: '5',
        label: <div className=' flex lg:text-6xl text-2xl relative font-semibold h-96 '> 
        <h1 className='pt-72'> Cloud Transformation</h1> 
       <div className='text-base font-bold absolute bottom-7 right-5 '>
       <button className='-ml-2'>Tap for more</button>
       <img className='size-16' src={bigarrow} alt="" />
       
       </div>
      </div>,
        children: <p>{text5}</p>,
      },
  ];

const ServicePage = () => {
  return (
    <>

    <Header2/>
    
<hr />
    <main className=' lg:flex grid grid-cols-1  bg-[#1c1c1e] w-full h-[60vh]'> 
    <div> 
        <h1 className='text-white lg:text-6xl text-2xl lg:mt-32 lg:ml-20 ml-36 font-bold'>
            Our Company <br />
             <h1 className='mt-4'>Services!</h1>
        </h1>
    </div>

    <div >
        <div className='bg-slate-200 lg:mx-0 mx-10 relative h-8 w-12 rounded-full lg:mt-48  lg:ml-44 ml-40 '>
                    <div className=' absolute top-[10px] left-[13px] h-3 w-5 rounded-full bg-white'>
                        <div className='absolute top-[4.7px] left-[8px] w-[4px] h-[2.9px] bg-black rounded-full'></div>
                    </div>
                
        </div>
    </div>
    <div className='  h-full w-96'>
       <div className='   lg:ml-24  lg:-mt-0 -mt-10 h-full lg:font-light font-thin lg:text-[14px] text-[10px] w-[20rem]'>
        <h1 className='text-white lg:pt-40 lg:mx-0 lg:ml-0 ml-20 '>
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia unde alias ex officia ipsum totam minima saepe qui sit maxime vitae praesentium cum, odio repellendus dignissimos quo earum eum officiis? Corrupti deleniti, voluptatum placeat illo, nisi quas dignissimos vel et, id dolorem distinctio amet. Unde modi officia pariatur ipsa neque.
            "
        </h1>
       </div>
    </div>
    </main>
 <div>
 <Collapse accordion items={items} />
 </div>


<div className='bg-[#1c1c1e] h-full w-full'>
<div className='fontTest text-white pt-20 lg:ml-20 ml-5'>
    <h1 className='lg:text-6xl text-2xl  font-bold'>Industries </h1> <br />
    <p className='font-light '>Discover Our Diverse Industry Partnerships</p>
</div>

<div className=' mt-10 lg:ml-20 ml-10 mr-20 grid grid-cols-1 lg:grid  gap-5 lg:grid-cols-3  lg:gap-20  justify-evenly'>
    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?random" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?rando" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?randm" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?ranom" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?radom" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>

    <div className='bg-white text-3xl font-bold h-56 w-80 rounded-xl border'>
        <img className='rounded-t-xl' src="https://unsplash.it/800/400/?rndom" alt="" />
       <h1 className=' ml-24 mt-3 '>Fashion </h1>
    </div>
</div>

</div>
<Form1/>
<Hero />
         <TestCard />
        <Footer1 /> 

    </>
  )
}

export default ServicePage