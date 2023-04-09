import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import pic1 from "./pic2.png"
import ayush from "../../Assets/Team/ayush.jpeg"
import mrinmoy from "../../Assets/Team/mrinmoy.jpeg"
import nikhil from "../../Assets/Team/nikhil.jpeg"
import sujal from "../../Assets/Team/sujal.jpeg"
import rishit from "../../Assets/Team/rishit.jpeg"

const About = () => {
  return (<>

<section class="text-gray-600 body-font">
  <div class="px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Team</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-contain mb-6" src={nikhil} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Front-End Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Nikhil Singh</h2>
          <p class="leading-relaxed text-base">“If you think math is hard, try web design.”– Trish Parr</p>
        </div>
      </div>
      <div class="xl:w-1/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={sujal} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">UI/UX Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Sujal Kumar</h2>
          <p class="leading-relaxed text-base">“People ignore design that ignores people.”— Frank Chimero</p>
        </div>
      </div>
      <div class="xl:w-1/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={rishit} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Front-End Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Rishit Chauhan</h2>
          <p class="leading-relaxed text-base">“If debugging is the process of removing software bugs, then programming must be the process of putting them in”– Edsger Dijkstra</p>
        </div>
      </div>
      <div class="xl:w-1/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={mrinmoy} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Full Stack Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Mrinmoy Saikia</h2>
          <p class="leading-relaxed text-base">“A website without visitors is like a ship lost in the horizon.”– Dr. Christopher Dayagdag</p>
        </div>
      </div>
      <div class="xl:w-1/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={ayush} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Mobile App Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Ayush Kr. Singh</h2>
          <p class="leading-relaxed text-base">“It’s not a bug. It’s an undocumented feature!” -John Doe</p>
        </div>
      </div>
    </div>
  </div>
</section>        




        <div className='w-full'>
		<div id="about-us">
			<h1>Why choosing Us?</h1>
			<p className=''>Our company was founded with a mission to provide affordable and reliable car rental services to people all over the world. We have a diverse fleet of cars to choose from, including compact cars, SUVs, luxury vehicles, and more at extremely affordable prices. Our website offers a user-friendly interface that makes it easy to search for and book the perfect rental car for your needs. Our team is made up of experienced professionals who are dedicated to providing exceptional customer service and making sure that every rental experience is a positive one.</p>

<p>We offer flexible rental options, including daily, weekly, and monthly rentals, to meet the unique needs of each and every customer. Our company is committed to sustainable practices and reducing our carbon footprint. We offer hybrid and electric vehicles as part of our fleet and are always looking for ways to make our operations more environmentally friendly.</p>

<img src={pic1} alt="img"/>

            
<p>We have a convenient online booking system that allows you to reserve your rental car in just a few clicks, making the rental process quick and hassle-free. Our rates are competitive, and we offer special discounts and promotions to make car rental even more affordable. We value our customers' feedback and are always looking for ways to improve our services. If you have any questions or concerns, please don't hesitate to reach out to our friendly customer support team.</p>

<h1>Wanting to contact us?</h1>

<img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_521047180_186951.jpg" alt="img" width="500" height="300"/ >

<p>We value our customers' feedback and are always looking for ways to improve our services. If you have any questions or concerns, please don't hesitate to reach out to our friendly customer support team.</p>
<Link>For further more details you can contact us by click on the given link: <Link to="/contact" class="button">Contact us</Link></Link>
</div>
</div>
</>
    )
}

export default About