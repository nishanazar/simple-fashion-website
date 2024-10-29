import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";



export default function Contact (){
    return(
        <>
        <div className="text-center my-[30px]">
        <h1 className="text-[#000000] text-[30px] font-bold ">Contact Us</h1>
        <p className="text-[#717171]">Any question remarks? just write us a message!</p>
        </div>
        {/* container */}
       <div className="h-[667px] w-[1196px]  flex ml-[80px]">
       <div className="h-[647px] w-[491px] bg-[#000000] text-white ">
       <div className="ml-[40px] pt-[40px]">
       <h2 className="text-[25px] font-bold pb-[10px]">Contact Information</h2>
       <p>Say something to start a live chat! </p>
       <div><MdOutlinePhoneInTalk className="text-[25px] inline-block my-[40px]" />+9210 3456 789 </div>
       <div> 
       <MdOutlineMail  className="text-[25px] inline-block my-[30px]"/>demo@gmail.com</div>
        <div>
        <FaMapMarkerAlt  className="text-[25px] inline-block my-[30px]"/> 132 Dartmouth Street Boston, Massachusets 02415 US</div>
        <div className="h-[150px] w-[150px] bg-[#484848] rounded-[50%] mt-[60px] ml-[250px]">
        </div>
        {/* icon */}
        <div className="text-[25px] flex gap-6">
        <FaTwitter />
        <FaInstagramSquare />
        <FaDiscord /></div></div></div>
{/* 2nd part */}
   <div className="h-[647px] w-[700px]  flex  pl-[20px]">
    <div className="">
   <legend className="pt-[80px] pb-[40px]">First Name:</legend>
   <div className="h-[2px] w-[270px] bg-[#484848]"></div>

   <legend className="pt-[80px] pb-[40px]">Email:</legend>
   <div className="h-[2px] w-[270px] bg-[#484848]"></div>

   <div className="mt-[40px] mr-[10px]  space-x-2">
   <h3 className="font-bold">Select Subject?</h3>
   <input type="checkbox" name="text" id="text"  /> general inquiry
   <input type="checkbox" name="text" id="text"  /> general inquiry
   <input type="checkbox" name="text" id="text"  /> general inquiry
 
   </div>
   {/* message */}
   <div className="mt-[30px]">
    <h3>Message</h3>
    <p>Write your message..</p>
    <div className="h-[2px] w-[400px] bg-[#484848] mt-[15px]"></div>
    <button className="bg-black mt-[50px] py-[9px]  font-semibold px-[20px] ml-[30px] text-white rounded-[5px] ">Send Message</button>

   </div>
   </div>
   <div >

   <legend className="pt-[80px] pb-[40px]">Last Name:</legend>
   <div className="h-[2px] w-[270px] bg-[#484848] "> </div>

   <legend className="pt-[80px] pb-[40px]">Phone Number:</legend>
   <div className="h-[2px] w-[270px] bg-[#484848]"></div>


   
   
   </div>
   
       </div>
       
      
       </div>

       </>
    )
}