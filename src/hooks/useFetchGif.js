import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs";

export const useFeychGif = ( category ) =>{

    const [images, setImages] = useState([]);
    const [{isLoading, setLoading}] = useState(true);
   
    const getImages = async() =>{
        const item =  await getGif( category );
        setImages(item);
        setLoading(false);
    }
   useEffect(() => {
   
    return () => {
        getImages();
    };
   }, );
   
      
    return {
     images,
     isLoading
    }
}