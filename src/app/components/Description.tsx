import { MdOutlineComputer } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

export default function Description(){
    return(
    <div className="h-[350px] bg-gray-100 mt-[80px] flex text-justify justify-evenly">
    <div className=" h-[420px] w-[560px]">
    <MdOutlineComputer className="text-[30px] mt-[40px]" />


    <h2 className="text-[30px] mt-[15px] pb-[30px]">What we do</h2>
    <p>We believe God has called us with a purpose to equip local churches to use the web effectively by getting them set up with creative and functional websites they can use right away. We know that the average church doesn’t have a web developer on staff; It’s Pastors, lay people, youth leaders or the sound guy who is in charge of the church website. We also know by experience that getting it right is an arduous task. We partner with church leadership teams by giving them a simple, effective path to getting the message of their church to the local area and the world!</p>
    </div>

    <div className=" h-[450pxpx] w-[560px]">
    <IoMdHeart  className="text-[30px] mt-[40px]"/>

    <h2 className="text-[30px] pt-[15px] pb-[30px]">Why we do it</h2>
    <p>We believe God has called us with a purpose to equip local churches to use the web effectively by getting them set up with creative and functional websites they can use right away. We know that the average church doesn’t have a web developer on staff; It’s Pastors, lay people, youth leaders or the sound guy who is in charge of the church website. We also know by experience that getting it right is an arduous task. We partner with church leadership teams by giving them a simple, effective path to getting the message of their church to the local area and the world!</p>

    </div>
    </div>
    )
}