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
        // markers:true,
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
             imageIndex = Math.floor(elem.progress * imageArray.length)
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
  <div ref={imageDivRef} className=" absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw]  lg:top-96 -top-80 lg:left-[30vw] left-[30vw]">
    <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
   </div>
     <div className=" relative font-[font2]">
      <div className= "lg:mt-[55vh] mt-[30vh]" >
        <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
          SEVEN7Y <br />
          TWO
        </h1>
      </div>
      <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
        <p className="lg:text-6xl text-xl leading-tight ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
    </div>
 </div>
  <div id="page2" className="h-screen">
  
  </div>
</div>
  )
}
export default Agence



// import React from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// const Agence = () => {
//   const imageDivRef = React.useRef(null);

//   // original image paths (use same paths you had)
//   const imageArray = [
//     "/team/Carl.jpg",
//     "/team/Olivier.jpg",
//     "/team/ChantalG.jpg",
//     "/team/CAMILLE.jpg",
//     "/team/HugoJoseph.jpg",
//     "/team/Lawrence.jpg",
//     "/team/MEGGIE.jpg",
//     "/team/PLP2.jpg",
//     "/team/MEL.jpg",
//     "/team/Michele.jpg",
//     "/team/SophieA.jpg",
//     "/team/joel.jpg",
//   ];

//   useGSAP(() => {
//     let stTween = null;
//     let createdURLs = [];

//     // preload via fetch -> blob -> createObjectURL (reliable for painting)
//     const preload = async (paths) => {
//       const out = [];
//       for (const p of paths) {
//         try {
//           const r = await fetch(p, { cache: "force-cache" });
//           if (!r.ok) {
//             // fallback to original path if fetch fails
//             out.push(p);
//             continue;
//           }
//           const b = await r.blob();
//           const url = URL.createObjectURL(b);
//           createdURLs.push(url);
//           out.push(url);
//         } catch (e) {
//           out.push(p);
//         }
//       }
//       return out;
//     };

//     (async () => {
//       const preloaded = await preload(imageArray);

//       // set initial background immediately
//       if (imageDivRef.current && preloaded[0]) {
//         const el = imageDivRef.current;
//         el.style.backgroundImage = `url("${preloaded[0]}")`;
//         el.style.backgroundSize = "cover";
//         el.style.backgroundPosition = "center";
//         el.style.opacity = "1";
//         // small compositing hints
//         el.style.transform = "translateZ(0)";
//         el.style.willChange = "background-image, opacity, transform";
//       }

//       // create ScrollTrigger that swaps wrapper background-image
//       stTween = gsap.to({}, {
//         scrollTrigger: {
//           trigger: imageDivRef.current,
//           markers: true,
//           start: "top 28%",
//           end: "top -70%",
//           pin: true,
//           pinSpacing: true,
//           pinReparent: false,
//           pinType: "transform",
//           scrub: 1,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             if (!imageDivRef.current) return;
//             const idx = self.progress < 1
//               ? Math.floor(self.progress * preloaded.length)
//               : preloaded.length - 1;
//             const newUrl = preloaded[idx] || imageArray[idx];

//             const wrapper = imageDivRef.current;
//             // avoid reassigning same background
//             if (wrapper._currentBg === newUrl) return;
//             wrapper._currentBg = newUrl;

//             // fade out -> change bg -> fade in (smooth)
//             wrapper.style.transition = "opacity 180ms linear";
//             wrapper.style.opacity = "0";

//             requestAnimationFrame(() => {
//               // set background
//               wrapper.style.backgroundImage = `url("${newUrl}")`;

//               // small delay then fade in
//               setTimeout(() => {
//                 wrapper.style.opacity = "1";
//               }, 30);
//             });
//           },
//         },
//       });

//       // ensure ScrollTrigger layout recalc after preloads
//       ScrollTrigger.refresh();
//     })();

//     return () => {
//       if (stTween && stTween.scrollTrigger) stTween.scrollTrigger.kill();
//       // revoke created object URLs to free memory
//       createdURLs.forEach(u => { try { URL.revokeObjectURL(u); } catch(e) {} });
//     };
//   });

//   return (
//     <div className="parent">
//       <div id="page1" className="py-1">
//         {/* wrapper uses background-image now instead of <img> */}
//         <div
//           ref={imageDivRef}
//           className="absolute overflow-hidden rounded-3xl top-96 left-[30vw]"
//           style={{
//             height: "20vw",
//             width: "15vw",
//             backgroundColor: "#eee",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             opacity: 0,
//             transition: "opacity 180ms linear",
//             transform: "translateZ(0)",
//             willChange: "background-image, opacity, transform",
//           }}
//         />
//         <div className="relative font-[font2]">
//           <div className="mt-[55vh]">
//             <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
//               SEVEN7Y <br />
//               TWO
//             </h1>
//           </div>
//           <div className="pl-[40%] mt-20">
//             <p className="text-6xl ">
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div id="page2" className="h-screen"></div>
//     </div>
//   );
// };

// export default Agence;


