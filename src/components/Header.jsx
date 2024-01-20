
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Fragment, useState ,React} from 'react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const [active, setActive] = useState("main")
    const [menuHeight, setMenuHeight] = useState(null)
    return (
        <>
        <div>
            <Popover.Group className="relative hidden lg:flex  ">
                        <div className='relative grid grid-rows-5  gap-10 '>
                         
                            <div>
                                <Link to="/Home" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                                Inicio
                                </Link>
                            </div>                         
                            <div>
                                <Link to="/Partidos" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                                Partidos
                                </Link>
                            </div>                         
                            <div>
                                <Link to="/Posiciones" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                                Posiciones
                                </Link> 
                            </div>                          
                            <div>
                                <Link to="/Noticias" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                                Noticias
                                </Link>
                            </div>                           
                            <div>
                                <Link to="/Carousel" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
                                Imagenes
                                </Link>
                            </div> 
                        </div>                                               
            </Popover.Group>

        </div>
        <div className='flex lg:hidden'>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
              >
              <span className="sr-only">Open main menu</span>
              
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
      
                 


                    { /* mobileMenuOpen */}                  
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-10" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-950 text-white  font-bold px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                         
                            </a>
                            <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                            >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-10 w-10  font-bold text-white" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a href="/Home"
                                className="-mx-3 block rounded-full px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-red-900"
                                >
                                Inicio
                                </a>
                                <a
                                href="/Partidos"
                                className="-mx-3 block rounded-full px-3 py-2 text-2xl  font-semibold leading-7 text-white hover:bg-red-900"
                                >
                                Partidos
                                </a>                                      
                                <a
                                href="/Posiciones"
                                className="-mx-3 block rounded-full px-3 py-2 text-2xl  font-semibold leading-7 text-white hover:bg-red-900"
                                >
                                Posiciones
                                </a>
                                <a
                                href="/Noticias"
                                className="-mx-3 block rounded-full px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-red-900"
                                >
                                Noticias
                                </a>
                                <a
                                href="/Carousel"
                                className="-mx-3 block rounded-full px-3 py-2 text-2xl font-semibold leading-7 text-white hover:bg-red-900"
                                >
                                Imagenes
                                </a>
                                
                                
                            </div>           
                            </div>
                        </div>
                        </Dialog.Panel>
                    </Dialog> 
    
        </>
    )
}