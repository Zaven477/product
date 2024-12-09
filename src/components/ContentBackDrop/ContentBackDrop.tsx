import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import productThumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../images/image-product-4-thumbnail.jpg";
import { ICountsImages } from "./types";
import {ReactComponent as IconClose} from '../../images/icon-close.svg';
import {ReactComponent as IconPrev} from '../../images/icon-previous.svg';
import { HoverableIconButton } from '../HoverableIconClose/HoverableIconClose';
import {ReactComponent as IconNext} from '../../images/icon-next.svg';
import { HoverablePrevIconButton } from '../HoverableButtonPrev/HoverableButtonPrev';
import { HoverableNextIconButton } from '../HoverableButtonNext/HoverableButtonNext';






export const ContentBackdrop = ({countsImages, onClickImages, activeIndex, onCloseBackdrop}: ICountsImages) => {
    const listImages = [productThumbnail1, productThumbnail2, productThumbnail3, productThumbnail4];
    

    const handleBtn = (index: number) => {
       return onClickImages(index)
     } 


     let currentIndex = activeIndex;
     
     const btnIconNextClass = currentIndex === 3 ? '0.3' : '';
     const btnIconPrevClass = currentIndex === 0 ? '0.3' : '';

     
     const nextButton = () => {
        currentIndex = currentIndex + 1
        if(currentIndex > 3) {
            return currentIndex;
        }
        return onClickImages(currentIndex);
     }



     const prevButton = () => {
        currentIndex = currentIndex - 1;
        if(currentIndex < 0) {
            return currentIndex;
        }
        return onClickImages(currentIndex);
     }


 return (
      <ImageList sx={{ width: "600px", display: "flex", ml: "40px", flexWrap: "wrap", pt: "20px" }}>
       <HoverablePrevIconButton sx={{ position: 'absolute', top: '315px', left: '415px', zIndex: 7, background: 'white', width: '50px', height: '50px', pl: '3px', opacity: `${btnIconPrevClass}` }} onClick={prevButton}>
          <IconPrev />
       </HoverablePrevIconButton>
       <HoverableNextIconButton sx={{ position: 'absolute', top: '313px', zIndex: 7, left: '990px', background: 'white', width: '48px', height: '48px', opacity: `${btnIconNextClass}` }} onClick={nextButton}>
          <IconNext />
       </HoverableNextIconButton>
        <HoverableIconButton sx={{ ml: 'auto', background: '#FF8C00' }} onClick={onCloseBackdrop}>
         <IconClose/>
       </HoverableIconButton>
       <ImageListItem sx={{ mr: "25px" }}>
          {countsImages.map((item, index) => (
             <img key={index} src={item} alt="sneakers" className="border"/>
          ))}
        </ImageListItem>
        {listImages.map((item, index) => {
        const btnClass = index === activeIndex ? 'border-color' : '';
        return (
           <ImageListItem sx={{ marginRight: "1px", pt: "40px", display: "flex", width: "84px", ml: '46px' }}>
             <img key={index} src={item} alt="show" className={`borderThumbnail ${btnClass}`} onClick={() => handleBtn(index)}/>
           </ImageListItem>
          )
        })}
      </ImageList>
   )
}