import Image from 'next/image';
import banner from '../../../public/assets/banner.png'
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';

const Hero = () => {
  return ( <div className="w-full 1000px:flex items-center">
<div className="absolute
 top-[100px] 
 100px:top-[unset] 
 1500px:h-[700px] 
 1500px:w-[700px] 
  1100px:h-[600px]
   1500px:6-[600px] 
   h-[50vh]
   w-[50vh]
   hero_animation
   rounded-full
   bg-blue-900
    ">

</div>

<div className=" 1000px:w-[40%] 1000px:min-h-screen flex items-center justify-center pt-[70px] 1000px:pt-[0]  z-[10]">
  <Image
   src={banner} 
  alt=''
  className='object-contain 1100px:max-w-[90%]  w-[80%]  1500px:max-w-[85%] z-[10]  '
  />
</div>


<div className="1000px:w-[60%] flex flex-col items-center text-center 1000px:mt-[0] 1000px:text-left mt-[150px]">

  <h2 className='dark:text-white text-[#000000ac] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px-leading-[75px]'>
    Improve Your Online Learning Exprience Instantly
  </h2>
  <br />
  <p className='dark:text-[#edfff4] text-[#000000ac] font-Josefin text-[18px] font-[600] 1500px:!w-[55%] 1100px:!w-[78%]'>We have 40k+ Online Courses & 500k+ Online registered Students. Find Your desired Courses From them</p>
  <br />
  <br />
  <div className="1500px:w-[55%] 1100px:w-[78%] h-[50px] w-[90%] bg-transparent relative">
    <input type="search" 
     placeholder='search courses'
     className='
     bg-transparent
     border
     dark:border-none
     dark:bg-[#575757]
     rounded-[5px]
     dark:placeholder-[#ffffffdd]
     p-2 
     w-full
     h-full
     outline-none

     ' 
     />
     <div className="absolute 
     flex
      items-center
      justify-center
      cursor-pointer
      w-[50px]
      h-[50px]
      top-0
      right-0
      rounded-r-[5px]
      bg-[#39c1f3]
      ">

<BiSearch size={30} classname="text-white"/>
     </div>
  </div>
<br />
<br />

  <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] items-center flex mt-10 ">

    <img src="https://www.adfactorspr.com/hubfs/images/home%20banner/aa0463c_1.jpg" alt="" className='rounded-full h-[60px] w-[60px]' />
    <img src="https://media.pocketgamer.biz/2022/12/119854/vickie-chen-r225x225.jpg" alt="" className='rounded-full ml-[-20px] h-[60px] w-[60px]' />
    <img src="https://www.immigration.ca/wp-content/uploads/elementor/thumbs/62412035_s-pmce64hp31yr5a6rk3zrcw40afv21rzyway1td0ykg.jpg" alt="" className='rounded-full ml-[-20px] h-[60px] w-[60px]' />
    <p
    className='
    dark:text-[#edfff4] 
    text-[#000000ac] 
    font-Josefin 
    text-[18px]
     font-[600]
     1000px:pl-3'
    >500k+ Already trusted us.
    <Link href="/courses" className='dark:text-[#46e256] text-[crimson]'> View Courses</Link>
    </p>
  </div>
</div>


  </div> );
}
 
export default Hero;