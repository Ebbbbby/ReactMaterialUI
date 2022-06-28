import React from "react";
import {Box}from '@mui/material'
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import {itemData} from './itemData';
console.log(itemData)


const ImageGallery = () => {
  return (
    <Box>
      <ImageList sx={{width:350, height:100}} cols={3} rowHeight={100}>
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
    </Box>
  );

};

export default ImageGallery;
