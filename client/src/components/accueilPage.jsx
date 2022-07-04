import axios from "axios";
import React,{useEffect, useState} from "react";

const DisplayRoom=() =>{
    
    const [images, setImages]= useState([])
    const getImage=()=>{
        return axios
        .get('http://localhost:5000/userRoutes')
        .then((res)=>{
        setImages(res.data)})
        .catch((err)=>console.error(err))
   }
    useEffect(()=>{
        getImage()
       },[])
    
   console.log(images)
    return(
        <div>
            {images.map((image)=>{
            return(
                <div>
                    <p>{image.email}</p>
                    <p>{image.password}</p>
                    <p>{image.firstName}</p>
                    <p>{image.lastName}</p>
                    <p>{image.adress}</p>
                    <p>{image.adressNumber}</p>
                    <p>{image.isAdmin}</p>
                </div>
            )})}
            
        </div>
    )
}

export default DisplayRoom