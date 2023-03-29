import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import pic1 from "./pic2.png"
const About = () => {
  return (
        <div>
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
    )
}

export default About