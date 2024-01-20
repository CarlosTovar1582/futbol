import React from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'



export default function Menu() {
    return(
        <div className="bg-white font-normal text-xl">
            <main className="isolate">
                <div className= "bg-gradient-to-r from-red-800 to-transparent">                
                    <div
                    className="absolute inset-y-6 right-10 -z-2 -mr-90 w-[80%] origin-top-right 
                    skew-x-[-10deg] shadow-xl shadow-red-800 bg-black"
                    aria-hidden="true"
                    >
                        {/* Header */}
                        <Header/>
                        <div className='columns-1'>
                        
                       
                    
                          
                            {/* 
                            <div className='border-2 border-yellow-500-500 ...'>
                                <img class="w-full aspect-video ..." src="https://i.postimg.cc/wvmvyth8/pelota-quemada.png" />
                                
                            </div>
                            */}
                        </div> 
                                
                    </div>   
                            
                </div>
            </main>
        </div>
        
    )
}