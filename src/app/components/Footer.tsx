import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";


export default function Footer(){
    return(
     <div>
    <footer >
  <div className="h-[330px] bg-black flex justify-center gap-14 ">
  
 <div className="h-[200px]  w-[200px]  mt-[80px]">
<h2 className="text-gray-500 text-[35px]">Little <span className="text-white">Fashion</span></h2>
<p className="text-gray-500">Copyright © 2023 Little Fashion</p>
<p className="text-gray-500">Designed by ♥ Nisha Nazar</p>
</div>
<div className=" h-[200px]  w-[200px]  mt-[80px]">
<h2 className="text-white text-[22px]">Sitemp</h2>
<ul className="text-gray-500">
<li>Story</li>
<li>Privacy policy</li>
<li>Contact</li>
</ul>
</div>
<div className=" h-[200px]  w-[200px]  mt-[80px]">
<ul className="text-gray-500">
<li>Products</li>
<li>FAQs</li>
</ul>
</div>
<div className=" h-[200px] w-[200px]  mt-[80px]">
<h2 className="text-white text-[22px]">Follow Us </h2>
<br />
<div className="text-white flex gap-3">
<FaYoutube /><FaWhatsapp /><FaInstagram /><FaSkype />

</div>
<h3 className="text-[20px] text-white mt-[10px]">Subscribe For Updates & Insights</h3>
<input className="rounded-2xl h-[35px] mt-[5px] p-[5px]" type="text" placeholder="search" />
</div>
</div>
</footer>
</div>
    )
     
 
 
 }