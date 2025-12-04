import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <p className="absolute lg:w-[17vw] w-64 lg:right-20 right-0 lg:bottom-72 bottom-28 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      <div className="lg:border-4 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-2 lg:px-14 border-white rounded-full uppercase">
         <Link className="text-[6vw] lg:mt-6" to='/projects'>Projects</Link>
      </div>
      <div className="lg:border-4 border-2  hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-2 lg:px-14 border-white rounded-full uppercase">
              <Link className="text-[6vw] lg:mt-6" to='/agence'>Agence</Link>

      </div>
    </div>
  )
}
export default HomeBottomText