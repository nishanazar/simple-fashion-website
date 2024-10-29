import Link from "next/link"
export default function Navbar(){
    return(
       
     <div className="font-bold text-[19px] my-4  ">
     <ul className="flex justify-between mx-28 ">
     <li className="text-orange-600 text-[25px]  ">Little <span className="text-black">Fashion</span></li>
     <li><Link href="/"className="text-orange-600">Home</Link></li>
     <li><Link href="/about">About</Link></li>
     <li><Link href="/contact">Contact</Link></li>
     </ul>
     </div> 
    )
}