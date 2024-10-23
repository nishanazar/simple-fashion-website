import { IoMdHeart } from "react-icons/io";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

export default function Home(){
  return(
      <>
   <Navbar/>
   <div className="h-[430px] w-full bg-[url('https://cdn.pixabay.com/photo/2017/09/06/14/50/the-fireplace-2721784_1280.jpg')] bg-cover bg-center flex flex-col justify-center px-[130px]">
  
  <h1 className="text-white text-4xl font-bold font-serif pb-4">Cool Fashion</h1>
  <p className="text-white text-[18px] mr-[20px] pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Earum temporibus, eligendi rerum repellat.</p>
  <Button/>
  </div>
  <h1 className="text-[30px] font-serif font-bold text-center my-[50px]">Get started with <span className="text-orange-600">Little </span>Fashion</h1>
  <div className=" flex justify-between">
  <h2 className="font-bold text-gray-500 ml-28 "> <span className="text-orange-600">introduction</span> <br /> How we work?<br />Capabillites</h2>
  <img className="h-[300px] ml-24" src="https://cdn.pixabay.com/photo/2015/05/31/13/45/working-791849_1280.jpg" alt="idea"/>
  <div className=" flex flex-col text-justify mx-16">
  <h2 className="text-[20px] font-bold pb-4">Good <span className="text-orange-600">Desgin <br /></span>Ideas for <span className="text-orange-600">your </span>fashion</h2>
  <p className="pb-24 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempora ea cum iusto culpa consequuntur explicabo inventore consequatur distinctio amet consectetur Lorem ipsum dolor sit amet .<br/><br/>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat reiciendis ex aliquam amet magni consectetur in itaque illo, eos quasi it amet consectetur Lorem ipsum dolor sit amet .</p>
   <p className="text-gray-500 font-bold">LEARN MORE ABOUT US</p>
   </div>
  </div>
  <hr />
  <div className="mt-[80px] flex justify-evenly  bg-blue-100">
  <img className="h-[350px]" src="https://cdn.pixabay.com/photo/2020/08/06/12/28/woman-5467838_1280.jpg" alt="shop" />
  <div className="flex flex-col justify-center">
  <h2 className="font-bold text-[35px] mb-8"> <span className="text-orange-600">Retail</span> shop owners</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Quaerat deserunt at cum maiores totam dignissimos quia!</p>
  <p className="font-bold mt-8">EXPLORE PRODUCTS</p>
  </div>
  </div>
  <h2 className="text-[35px] font-bold text-center mt-[40px] mb-[30px] ">Featured Products</h2>
  <div className="flex justify-center  gap-12">
  <div className="h-[350px]">
  <div className="relative">
  <img className="h-[240px] w-[280px]" src="https://images.thdstatic.com/productImages/8d4b760b-d4e3-4101-ae61-e9a46671f050/svn/living-luxury-artificial-trees-60422-p-64_1000.jpg" alt="tree pot" />
  <IoMdHeart className="text-[30px] text-white  absolute bottom-[250px] left-[220px]" />
  <p className="absolute bottom-[250px] text-black bg-white p-2 text-[14px] left-3">New Arival</p>
  <h3 className="font-bold text-[20px] mt-[15px]">Tree pot</h3>
  <p className="text-[14px]">Original package desgin from house</p>
  </div>
  </div>
  <div className="h-[350px] ">
  <div className="relative">
  <img className="h-[240px] w-[300px]" src="https://cdn.pixabay.com/photo/2021/02/16/02/56/clothes-6019690_640.jpg" alt="fashion" />
  <IoMdHeart className="text-[30px] text-white  absolute bottom-[250px] left-[220px]" />
  <p className="absolute bottom-[250px] text-black bg-white p-2 text-[14px] left-3">Low Price</p>
  <h3 className="font-bold text-[20px] mt-[15px]">Fashion set</h3>
  <p className="text-[14px]">Customer package</p>
  </div>
  </div> 
  <div className="h-[350px] ">
  <div className="relative">
  <img className="h-[240px] w-[280px]" src="https://cdn.pixabay.com/photo/2020/07/09/20/37/nutrition-5388710_1280.jpg" alt="drinks" />
  <IoMdHeart className="text-[30px] text-white  absolute bottom-[250px] left-[220px]" /><p className="absolute bottom-[250px] text-black bg-white p-2 text-[14px] left-3">Best Quality</p><h3 className="font-bold text-[20px] mt-[15px]">Juice Drinks</h3><p className="text-[14px]">Nature made another world</p></div></div> </div><p className="font-bold text-center underline mb-[50px]">View All Products</p>
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
<h2 className="text-white text-[22px]">Social </h2>
<div className="text-white">
<FaYoutube /><FaWhatsapp /><FaInstagram /><FaSkype />
</div>
</div>
</div>
</footer>
 </>
  )
}
