import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import productThumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../images/image-product-4-thumbnail.jpg";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import { ImageContent } from "./ImageContent";
import { BackDrop } from "../BackDropProducts/BackDropProducts";


export const ImagesProduct = () => {
  const listImages = [productThumbnail1, productThumbnail2, productThumbnail3, productThumbnail4];
  const imagesProduct = [product1, product2, product3, product4];
  const [images, setImages] = useState({ product: [product1], active: 0 });
  const [open, setOpen] = useState(false);
  


  const handleClickBtn = (index: number) => {
    setImages({ ...images, product: [imagesProduct[index]], active: index })
  }


  const handleBackdrop = () => {
    setOpen(!open);
  }

  return (
    <Box sx={{ display: "flex", gap: "100px" }}>
      <ImageList sx={{ width: "450px", display: "flex", ml: "110px", flexWrap: "wrap", pt: "70px" }}>
         <ImageListItem sx={{ mr: "25px", cursor: "pointer" }}>
          {images.product.map((item, index) => (
             <img key={index} src={item} alt="sneakers" className="border" onClick={handleBackdrop}/>
          ))}
         </ImageListItem>
        {listImages.map((item, index) => {
        const btnClass = index === images.active ? 'border-color' : '';
        return (
           <ImageListItem sx={{ marginRight: "25px", pt: "40px", display: "flex", width: "84px" }}>
            <img key={index} src={item} alt="show" className={`borderThumbnail ${btnClass}`} onClick={() => handleClickBtn(index)}/>
           </ImageListItem>
        )
       })}
      </ImageList>
      <ImageContent />
      <BackDrop open={open} onClose={handleBackdrop} images={images.product} onImages={handleClickBtn} imagesActive={images.active}/>
    </Box>
  );
};
