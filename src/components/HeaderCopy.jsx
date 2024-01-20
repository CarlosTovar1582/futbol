export default function Header() {
    return (
        <>
        <header className="bg-white">
           
                <div   div className= "bg-gradient-to-r from-red-800 to-transparent">                
                    <div
                    className="absolute inset-y-6 right-10 -z-2 -mr-90 w-[80%] origin-top-right 
                    skew-x-[-10deg] shadow-xl shadow-red-800 bg-black"
                    aria-hidden="true"
                    >
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Link to="" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                            Inicio
                        </Link>  
                        <Link to="" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                            Partidos
                        </Link> 
                        <Link to="" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                            Posiciones
                        </Link> 
                        <Link to="" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                            Avatar
                        </Link> 
                        <Link to="" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                            Imagenes
                        </Link>                                                 
                    </Popover.Group>
                    </div> 
                                
                </div>   
                  
        </header>
        </>
    )
}