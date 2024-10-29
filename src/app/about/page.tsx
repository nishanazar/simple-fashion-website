import Description from "../components/Description"

import Text from "../components/Text"
import Fashion from "../components/Fashion"
import Footer from "../components/Footer"


export default function About(){
    return(
    <>
    {/* navbar about  */}

    <div>
   
    <div className="h-[450px] w-full bg-[url('https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399_1280.jpg')] bg-cover bg-center flex flex-col justify-center px-[130px]">
    <h1 className="text-[150px] text-orange-600 text-center font-serif">About</h1></div>
    </div>

    <div className="mt-[80px] flex justify-center gap-9 bg-slate-100">
    <div className="h-[450px]  w-[450px]">
    <h3 className="text-[30px]">Our team’s goal is <br />to build you a <br /> <span className="text-orange-600">creative, functional <br /> church website.</span></h3>
    <p className="text-[#282922] my-[10px]">Our team is headed up by a married couple who love Jesus and feel God’s calling on their lives to serve Him in what they do best – design & websites. We currently have seven team members with a myriad of skills and talents who each bring something unique to the table.</p>
    <h2 className="text-[20px] font-bold">Our # 1 goal is to make <br /> disciples for Jesus Christ.</h2>
    <h4 className="text-orange-600 font-bold mt-[15px]">More about us</h4>
    </div>

    <img className="h-[380px]" src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg" alt="picture" />
     </div>
     <Text/>
     <Description/>
    <Fashion/>
 <Footer/>
    </>
    )
}