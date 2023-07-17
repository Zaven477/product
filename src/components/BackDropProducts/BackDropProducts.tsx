import Backdrop from "@mui/material/Backdrop";
import Box from '@mui/material/Box';
import { IBackDropProps } from "./types";
import { ContentBackdrop } from "../ContentBackDrop/ContentBackDrop";



export const BackDrop = ({open, onClose, images, onImages, imagesActive}: IBackDropProps) => {

    const handleClickBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
        if(event.target === event.currentTarget) {
            onClose();
        }
    }
    

   return (
        <Backdrop onClick={handleClickBackdrop} open={open} sx={{ zIndex: 10 }}>
          <ContentBackdrop countsImages={images} onClickImages={onImages} activeIndex={imagesActive} onCloseBackdrop={onClose}/>
        </Backdrop>
     )
}