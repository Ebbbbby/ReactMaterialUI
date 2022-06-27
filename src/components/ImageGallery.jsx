import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import {itemData} from './itemData';
console.log(itemData)


const ImageGallery = () => {
  return (
      <ImageList>
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>

          );
        })}
      </ImageList>


  );
 
};

export default ImageGallery;
