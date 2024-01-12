import { FC } from "react";
import {Modal,Box} from "@mui/material"

type Props={
  open:boolean;
  setOpen:(open:boolean)=>void;
  activeItem:any;
  component:any
  setRoute?:(route:string)=>void;
}

const CustomModal:FC<Props> = ({open,setOpen,setRoute,activeItem,component:Component}) => {
  return (  <Modal
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >

    <Box
    className="absolute
     top-[1%]
      left-[50%] 
    -translate-x-1/2
     translate-y-1/2
      w-[450px] 
      bg-white
       dark:bg-gray-900
        shadow
         p-4
         rounded-[8px]
         outline-none
          "
         
    >
      <Component setOpen={setOpen} setRoute={setRoute}>

      </Component>

    </Box>

  </Modal>);
}
 
export default CustomModal;