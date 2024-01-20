import react from "react";
import CarrouselCard from "./CarrouselCard";



const Carousel = () =>{
    const images =[
        {
            
            title :"Producto 1",
            price: 12000,
            url:"https://i.postimg.cc/xCfF9VTR/Whats-App-Image-2024-01-20-at-12-10-54-AM.jpg",
            

        },
        {
            title :"Producto 2",
            price: 50000,
            url:"https://i.postimg.cc/Xv8QH1cy/Whats-App-Image-2024-01-20-at-12-10-00-AM-1.jpg",

        },
        {
            title :"Producto 3",
            price: 20000,
            url:"https://i.postimg.cc/rsvJ0Bc7/Whats-App-Image-2024-01-20-at-12-10-00-AM.jpg",

        },
        {
            title :"Producto 4",
            price: 20000,
            url:"https://i.postimg.cc/V6vB7fk3/Whats-App-Image-2024-01-20-at-12-09-59-AM-2.jpg",

        },
        {
            title :"Producto 5",
            price: 20000,
            url:"https://i.postimg.cc/br20hmbg/Whats-App-Image-2024-01-20-at-12-09-59-AM.jpg",

        
        

    ];


    return(
    <>
    
        <div className="w-full ">
            {/*  flex flex-col border-2  rounded-xl bg-slate-100 items-center */}
           {/* <button className="bg-green-500 p-4 py-2 rounded-2xl relative bottom-10 text-white font-bold">
                Oferta
                </button> */}
            <CarrouselCard images={images}/>           

        </div>
   
    </>
    )
}
export default Carousel
