import React, { useContext, useEffect } from 'react'
import { gsap } from "gsap";
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react/dist'
import {ScrollTrigger} from 'gsap/all';
import { NavbarColorContext, NavbarContext } from '../context/NavContext';


const Projects = () => {
 



  const projects = [{
    image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
    image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'
  }, {
    image1: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
    image2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda'
  }, {
    image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
    image2: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996'
  }, {
    image1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
    image2: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'
  }, {
    image1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
    image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
  }, {
    image1: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
    image2: 'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860'
  }, {
    image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
    image2: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'
  }]
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })
  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-12 lol'>
        {projects.map(function (elem, idx) {

          return <div key={idx} className='hero w-full  lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2  '>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects
