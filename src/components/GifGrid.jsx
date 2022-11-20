
import { GifItem } from './GifItem';
import { useFeychGif } from '../hooks/useFetchGif';

export const GIfGrid = ({category}) =>{
 
  
    const {images, isLoading} = useFeychGif( category );
    
    console.log(images, isLoading);
    
    const categoryStyle = {
        textAlign: "center"
       }


    return(
    <>
     <h1 style={ categoryStyle }>{category}</h1>
    <div className='card-grid'>
        { 
            images.map(( image )=>(
            <GifItem
             key={image.id}
             { ...image }
            />
         
            ))
          }

     </div>
      
    </>
    )
}