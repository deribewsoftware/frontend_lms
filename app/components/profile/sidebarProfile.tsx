import Image from "next/image";
import avatarDefault from '../../../public/assets/avatar.png'
import {RiLockPasswordLine} from 'react-icons/ri'
import {SiCoursera} from 'react-icons/si'
import {AiOutlineLogout} from 'react-icons/ai'

interface SidebarProfileProps{
  user:any;
  avatar:string |null;
  active:number;
  setActive:(active:number) => void;
  logouthandler:() => void;
}

const SidebarProfile:React.FC<SidebarProfileProps> = ({user,avatar,active,setActive,logouthandler}) => {
  return ( <div className="w-full">
    <div className={`
    w-full
    flex
    items-center
    px-3
     py-4
     cursor-pointer
     ${active===1? 'dark:bg-slate-800 bg-white':'bg-transparent'}

    `}
    onClick={()=>setActive(1)}
    >
<Image
src={user.avatar || avatar? user.avatar|| avatar: avatarDefault}
alt={user.name}
className="
w-[20px]
h-[20px]
800px:h-[30px]
800px:w-[30px]
cursor-pointer
rounded-full
"
/>
<h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">My account</h5>

    </div>









    <div className={`
    w-full
    flex
    items-center
    px-3
     py-4
     cursor-pointer
     ${active===2? 'dark:bg-slate-800 bg-white':'bg-transparent'}

    `}
    onClick={()=>setActive(2)}
    >
<RiLockPasswordLine size={20} />
<h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">Change Password</h5>

    </div>

    <div className={`
    w-full
    flex
    items-center
    px-3
     py-4
     cursor-pointer
     ${active===3? 'dark:bg-slate-800 bg-white':'bg-transparent'}

    `}
    onClick={()=>setActive(3)}
    >
<SiCoursera size={20} />
<h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">Enrolled Courses</h5>

    </div>

    <div className={`
    w-full
    flex
    items-center
    px-3
     py-4
     cursor-pointer
     ${active===4? 'dark:bg-slate-800 bg-white':'bg-transparent'}

    `}
    onClick={()=>logouthandler()}
    >
<AiOutlineLogout size={20} />
<h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">Logout</h5>

    </div>
    
    
    </div> );
}
 
export default SidebarProfile;