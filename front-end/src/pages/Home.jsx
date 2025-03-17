import HeroSection from "../components/HeroSection"

import { motion } from "framer-motion";
import NavBar from "../components/NavBar"
import ShortAbout from "../components/ShortAbout"
import HomeProducts from "../components/HomeProducts"
import HomeAwards from "../components/HomeAwards"
import "../styles/Home.css"
import PrideInspiration from "../components/PrideInspiration"
import Testimonial from "../components/Testimonial"
import VirtualTour from "../components/VirtualTour"
import { useEffect, useState } from "react";

function Home() {
    const [backgroundImage, setBackgroundImage] = useState("");
      const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
      }, []);
    
      const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      };
    
      
    
      const fadeRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      };
    return (
        <div className="flex flex-col items-center ">

       
            {/* <NavBar></NavBar> */}
            {/* Video Background Section */}
            <HeroSection></HeroSection>
            {/* short about */}
            <ShortAbout></ShortAbout>


            {/*Years Section */}
            <div className="w-screen min-h-[100vh]">
            <div
              className="w-screen h-[100vh] flex items-center justify-start"
              style={{
                backgroundImage: "url('/assets/images/persons/KEITH CERAMIC TEAM-min.JPG')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-screen min-h-[100vh]">
            <div
              className="w-screen h-[100vh] flex items-start justify-center"
              style={{
                backgroundImage: "url('/assets/images/persons/KEITH CERAMIC TEAM-min.JPG')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeRight}
                viewport={{ amount: "some" }}
                className="h-auto mx-5 md:mx-10 w-[90%] md:w-[60%] lg:w-[40%] mt-4 md:mt-20 flex flex-col rounded-md gap-4 justify-center items-center bg-gray-200 opacity-90 p-6 md:p-10"
              >
                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center text-gray-800">
                  Keith Ceramic - Since 1992
                </h1>
                <img
                  src="./assets/images/logo.png"
                  alt="Keith Ceramic Handmade Pottery Logo"
                  loading="lazy"
                  className="h-[50px] md:h-[80px] lg:h-[100px] object-contain"
                />
              </motion.div>
            </div>
          </div>
            </div>
          </div>
            {/* virutal tour */}
            <VirtualTour></VirtualTour>
            {/*product  section*/}
            <HomeProducts></HomeProducts>
            
            {/*Our Pride our Inspiration */}
            <PrideInspiration></PrideInspiration>
            {/*Awards */}
            <HomeAwards></HomeAwards>
            {/* testimonial */}
            <Testimonial></Testimonial>
            
            {/* <Footer></Footer> */}
            
          
    </div>
    )
}

export default Home
