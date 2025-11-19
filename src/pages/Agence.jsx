import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";



const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
   "/team/Carl.jpg",
   "/team/Olivier.jpg",
   "/team/ChantalG.jpg",
   "/team/CAMILLE.jpg",
   "/team/HugoJoseph.jpg",
   "/team/Lawrence.jpg",
   "/team/MEGGIE.jpg",
   "/team/PLP2.jpg",
   "/team/MEL.jpg",
   "/team/Michele.jpg",
   "/team/SophieA.jpg",
   "/team/joel.jpg",
   
  ]

  useGSAP(function(){
    imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
    gsap.to(imageDivRef.current,{
      
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:'top 28%',
        end:'top -70%',
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType: 'transform',
        scrub:1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
             imageIndex = (Math.floor(elem.progress * imageArray.length))
          } else {
            imageIndex = imageArray.length-1
          }
          imageRef.current.src = imageArray[imageIndex]
          
          
          
        }
       
      }
    })
  })
  return (
<div className="parent">
   <div id="page1" className="py-1">
  <div ref={imageDivRef} className=" absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw]  top-96 left-[30vw]">
    <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
   </div>
     <div className=" relative font-[font2]">
      <div className= "mt-[55vh]" >
        <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
          SEVEN7Y <br />
          TWO
        </h1>
      </div>
      <div className="pl-[40%] mt-20">
        <p className="text-6xl ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
    </div>
 </div>
  <div id="page2" className="h-screen">
  
  </div>
</div>
  );
};
export default Agence;
