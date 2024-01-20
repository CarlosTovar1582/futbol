import React from 'react'

export default function Noticias() {
  return (
    <main className="isolate">
    <div className=' rounded-2xl bg-white'>
        <div className=" relative grid grid-cols-3 gap-0 bg-slate-900 ">
            <div className='col-span-3 ...'>
                <h1 className=" text-5xl text-center font-bold border-2 border-t-white rounded-3xl ">
                    MVP de la Semana
                </h1>                 
            </div>
            <br />            
            <div className=' col-span-3 ...  mx-auto'>
                <div className="grid grid-cols-3 gap-4 ">
                    <div className="col-span-2  text-center font-bold text-3xl text-sky-400">
                        Jesus Miguel Perez
                    </div>                    
                    <div className="font-bold  text-center"></div>
                    <div className="col-span-2 ">
                        <img className="relative w-96 rounded-full " src="https://i.postimg.cc/kXtbRz7T/MVP.jpg" />
                    </div>
                    
                    <div className=" font-bold rounded-2xl">
                        - Gran Habilidad con el balon <br />
                        - Vision de Juego
                    </div>
           
                </div>
            </div>
           
        </div>

        <div className=" relative grid grid-cols-3 gap-0 bg-slate-900 ">
            <div className='col-span-3 ...'>
                <h1 className=" text-5xl text-center font-bold border-2 border-t-white rounded-3xl ">
                    Arquero de la Semana
                </h1>                 
            </div>
            <br /> 
            <div className=' col-span-3 ...  mx-auto'>
                <div className="grid grid-cols-3 gap-4 ">
                    <div className="col-span-2  text-center font-bold text-3xl text-sky-400">
                        Omar Malgot
                    </div>                    
                    <div className="font-bold  text-center"></div>
                    <div className="col-span-2 ">
                        <img className="relative w-96 rounded-full " src="https://i.postimg.cc/bNxYFCtv/Arquero.jpg" />
                    </div>
                    
                    <div className=" font-bold rounded-2xl">
                        - Reflejos Felinos <br />
                        - Salidas con el pie 
                    </div>
           
                </div>
            </div>
           
        </div>

     
           
    </div>
</main>
  )
}
