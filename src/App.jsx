

import React from "react";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import Partidos from './components/Partidos'
import Posiciones from './components/Posiciones'
import Noticias from './components/Noticias'
import  Carousel  from './components/Carousel' 


//<img className="relative w-32 h-32 " src="https://i.postimg.cc/kXMbSJyn/uefa-champions.jpg" />


function App() {
 return(

              <BrowserRouter>
              <div className=" relative grid grid-cols-3 gap-0">
                <div className="col-span-3 ...  bg-slate-900 text-white ">
                  <div className="col-span-3 ... relative flex ...">
                      <div className="lg:w-1/6 ... sm:w-full bg-slate-900 flex lg:flex-1 . ">
                        
                      </div>
                      <div className="lg:w-5/6 ... sm:w-full ">
                        <button className=" font-bold text-5xl text-center  rounded-2xl text-green-600 bg-blue-800 sm:w-full">
                            2º Edicion  de la Uefa Champions League el Olivar                      
                        </button>
                      </div>
                    <br />  

                  </div>
                                 
                  <div className="relative flex ... ">
                    <div className="lg:w-1/6 ... sm:w-full bg-slate-900 "><Header/></div>
                    <div className="lg:w-5/6 ... sm:w-full ">
                          <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/Home" element={<Home/>}/>
                            <Route path="/Partidos" element={<Partidos/>}/>
                            <Route path="/Posiciones" element={<Posiciones/>}/>
                            <Route path="/Noticias" element={<Noticias/>}/>
                            <Route path="/Carousel" element={<Carousel/>}/>
                          </Routes>
                    </div>
                  </div>              
                </div>
              </div>       
                                   
                
              </BrowserRouter>
   
 
 )
}
export default  App

{ 
  /*    <div className='container mx-auto mt-20'>
 <Header/>  
  <div className='mt-12 md:flex'> 
   
  </div>    
 </div>   */ 
/*
 <div    className= "bg-gradient-to-r from-red-800 to-transparent">                
 <div
 className="absolute inset-y-6 right-10 -z-2 -mr-90 w-[80%] origin-top-right 
 skew-x-[-10deg] shadow-xl shadow-red-800 bg-black"
 aria-hidden="true"
 >
         </div>
      </div>*/


}
