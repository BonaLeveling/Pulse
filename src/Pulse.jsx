import './index.css'
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import {useRef, useState, useEffect} from 'react'
import { gsap } from "gsap";
import useScrollReveal from './useScrollReveal';
import { CgMathPlus } from "react-icons/cg";





function Pulse() {
    
    const [isOpen, setIsOpen] = useState(false);

    
    const rotateRef = useRef(null);
    const allRef = useRef(null);

    useScrollReveal(allRef);

    useEffect(() => {
      if (!rotateRef.current || !allRef.current) return;
    
      // 🔄 Rotation infinie
      const rotateTween = gsap.to(rotateRef.current, {
        rotation: 360,
        scale: 1.1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "linear",
      });
      return () => {
        rotateTween.kill();
      };
    }, []);
    
  
    const toggleMenu= () => {
        setIsOpen(prev => !prev);
    }
    const menuClasses = `
    absolute top-full right-0 p-4 py-8 border-t border-[#337eff]
    w-full shadow-lg z-5  bg-[#0f1729]
    text-white/60 text-base font-normal
    ${isOpen ? 'hidden' : 'flex flex-col gap-12 ' }
    `;

    return (
        <>
            <header> 
                <nav className='relative flex justify-between items-center p-4 lg:px-8 lg:py-6 bg-[#0a0f1f] text-white'>
                    <div className='cursor-default flex items-center gap-2'>
                        <div className='border-4 border-[#337eff] rounded-full w-8 h-8 flex items-center justify-center'>
                            <div className='bg-[#337eff] rounded-full w-4 h-4 animate-pulse'></div>
                        </div>
                        <span className='text-2xl uppercase'>Pulse</span>
                    </div>
                    <ul className='flex items-center gap-6 max-lg:hidden'>
                        <li>
                            <Link to="services" spy={true} smooth={true} offset={-65} duration={500} className='cursor-default hover:text-[#337eff]'>Services</Link>
                        </li>
                        <li>
                            <Link to="sécurité" spy={true} smooth={true} offset={-95} duration={500} className='cursor-default'>Sécurité</Link>
                        </li>
                        <li>
                            <Link to="technologie" spy={true} smooth={true} offset={-70} duration={500} className='cursor-default'>Technologie</Link>
                        </li>
                        <li>
                            <Link to="aPropos" spy={true} smooth={true} offset={-70} duration={500} className='cursor-default'>A propos</Link>
                        </li>
                    </ul>
                    <ul className='flex items-center gap-6 font-semibold max-md:hidden'>
                        <li className='cursor-default'>
                            Connexion
                        </li>
                        <li className='cursor-default relative group'>
                            <span className="absolute -inset-1 rounded-md bg-linear-to-r from-[#407fff] to-[#a382ff] blur-xs opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></span>
                            <Link to=''  className='relative block bg-linear-to-r from-[#407fff] to-[#a382ff] py-2 px-4 shadow-sm rounded-md text-white group-hover:bg-linear-to-r group-hover:from-[#206aff] group-hover:to-[#9973ff]'>Ouvrir un compte</Link>    
                        </li>
                    </ul>
                    <div onClick={toggleMenu} className="relative md:hidden w-8 h-8">
                        <CgMathPlus
                            size={30}
                            className={`absolute transition-all duration-300 rotate-45 ${
                            isOpen ? "opacity-0 rotate-105" : "opacity-100"
                            }`}
                        />
                        <FiMenu
                            size={30}
                            className={`absolute transition-all duration-300 ${
                            isOpen ? "opacity-100 rotate-0" : "opacity-0"
                            }`}
                        />
                        </div>
         
                        <ul className={menuClasses}>
                            <li>
                                <Link to="services" spy={true} smooth={true} offset={-65} duration={500} className='cursor-default hover:text-[#337eff]'>Services</Link>
                            </li>
                            <li>
                                <Link to="sécurité" spy={true} smooth={true} offset={-95} duration={500} className='cursor-default hover:text-[#337eff] '>Sécurité</Link>
                            </li>
                            <li>
                                <Link to="technologie" spy={true} smooth={true} offset={-70} duration={500} className='cursor-default hover:text-[#337eff]'>Technologie</Link>
                            </li>
                            <li>
                                <Link to="aPropos" spy={true} smooth={true} offset={-70} duration={500} className='cursor-default hover:text-[#337eff] '>A propos</Link>
                            </li>
                            <li className='rounded-md text-center cursor-default  py-1 hover:bg-black/40 mt-4'>
                                Connexion
                            </li>
                            <li className='text-center cursor-default -mt-10  '>
                                <Link to=''  className=' block bg-linear-to-r from-[#407fff] to-[#a382ff] py-1 px-4 shadow-sm rounded-md text-white hover:bg-linear-to-r hover:from-[#206aff] hover:to-[#9973ff] '>Ouvrir un compte</Link>    
                            </li>
                        </ul>
                
                </nav>
               
            </header>
           
            <main ref={allRef}  className='bg-[#0a0f1f] text-white'>
                <div className='flex flex-col items-center px-6 pt-20 relative'>
                    <p className='flex items-center gap-2 text-[#4fa1ff] border border-[#4fa1ff] rounded-full bg-[#4fa1ff]/10 py-1 px-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-3 h-3 sm:w-4 sm:h-4 text-blue-400" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                        <span className='text-xs md:text-base'>Banque 100% Digitale propulsée par l'IA</span>
                    </p>
                    <div className='flex flex-col items-center gap-4 my-12'>
                        <h2 className='text-4xl text-center lg:text-6xl'>La banque du <span className='text-transparent bg-clip-text bg-linear-to-r from-[#4592ff] to-[#ada8ff]'>futur</span></h2>
                        <p className='text-base  md:text-xl md:w-full lg:w-[65%] text-center text-white/60'>
                            Expérience bancaire automatisée et intelligente. Pulse réinvente la finance avec une sécurité maximale, une transparence totale et une innovation continue.
                        </p>
                    </div>
                    
                    <div className='flex justify-center max-sm:flex-wrap items-center gap-4 font-semibold w-full'>
                        <div className='max-sm:w-full cursor-default relative group'>
                            <span className=" absolute -inset-1 rounded-md bg-linear-to-r from-[#407fff] to-[#a382ff] blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300"></span>
                            <Link to=''  className='max-sm:w-full justify-center flex gap-1 items-center  relative bg-linear-to-r from-[#407fff] to-[#a382ff] py-2 sm:py-3 px-8 shadow-sm rounded-md text-white group-hover:bg-linear-to-r group-hover:from-[#206aff] group-hover:to-[#9973ff]'>
                                <span>Commencer maintenant</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </Link>    
                        </div>
                        <div  className='cursor-default py-2 sm:py-3 px-8 bg-white rounded-md text-[#4592ff] max-sm:w-full max-md:flex max-md:justify-center'>
                            <Link to=''>Découvrir pulse</Link>
                        </div>  
                    </div>
                    <div className='w-full lg:w-[60%] flex justify-center gap-4 md:gap-8 mt-8'>
                        <div className='z-10 border border-[#263c78] w-1/3  rounded-xl bg-[#263c78]/10 flex flex-col items-center justify-center gap-3 text-center '>
                            <span className='text-2xl md:text-4xl'>24/7</span>
                            <span className='text-xs md:text-base text-white/60'>Disponibilité</span>
                        </div>
                        <div className='z-10 border border-[#263c78] w-1/3  rounded-xl bg-[#263c78]/10 flex flex-col items-center justify-center gap-3 text-center '>
                            <span className='text-2xl md:text-4xl'>100%</span>
                            <span className='text-xs md:text-base text-white/60'>Digital</span>
                        </div>
                        <div className='z-10 border border-[#263c78] w-1/3 py-4 rounded-xl bg-[#263c78]/10 flex flex-col items-center justify-center gap-3 text-center '>
                            <span className='text-2xl md:text-4xl'>0€</span>
                            <span className='text-xs md:text-base text-white/60'>Frais cachés</span>
                        </div>
                    </div>
                    <svg className="absolute bottom-0 w-full md:h-30 h-20" viewBox="0 0 1440 128" preserveAspectRatio="none"><path d="M0,64 L48,64 L48,32 L96,32 L96,64 L144,64 L144,96 L192,96 L192,64 L240,64 L240,32 L288,32 L288,64 L336,64 L336,96 L384,96 L384,64 L432,64 L432,32 L480,32 L480,64 L528,64 L528,96 L576,96 L576,64 L624,64 L624,32 L672,32 L672,64 L720,64 L720,96 L768,96 L768,64 L816,64 L816,32 L864,32 L864,64 L912,64 L912,96 L960,96 L960,64 L1008,64 L1008,32 L1056,32 L1056,64 L1104,64 L1104,96 L1152,96 L1152,64 L1200,64 L1200,32 L1248,32 L1248,64 L1296,64 L1296,96 L1344,96 L1344,64 L1392,64 L1392,32 L1440,32 L1440,128 L0,128 Z" fill="#121a36"></path><defs></defs></svg>
                </div>
                <div className='py-18 px-4 lg:px-8'>
                    <div className='text-center mb-10'>
                        <span id='services' className=' border border-[#393161] bg-[#393161]/10 rounded-full py-2 px-4 text-[#393161]'>Services</span>
                        <h2 className='text-3xl my-4 lg:text-5xl'>Tout ce dont vous avez besoin</h2>
                        <div className='flex justify-center'>
                            <p className='text-white/60 lg:text-xl lg:w-[50%]'>Une plateforme complète pour gérer, économiser et investir votre argent intelligemment</p>

                        </div>
                    </div>
                    <div className='grid  lg:grid-cols-3 md:grid-cols-2 gap-6'>
                        <div className='overflow-x-hidden group relative border border-[#393161] bg-[#393161]/10 rounded-xl flex flex-col gap-3 p-4 hover:bg-[#4592ff]/10 hover:border-[#4592ff] duration-500 ease-in-out'>
                            <svg  className="-right-50 absolute top-0" ><circle cx="80" cy="20" r="3" fill="currentColor" className="text-[#393161]"></circle><circle cx="60" cy="20" r="2" fill="currentColor" className="text-[#393161]"></circle><circle cx="80" cy="40" r="2" fill="currentColor" className="text-[#393161]"></circle><line x1="80" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line><line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line></svg>
                            <div className='relative group'>
                                <span className='absolute -inset-1 rounded-md bg-[#407fff] blur-lg opacity-60 w-12'></span>
                                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-[#216fff] p-3 rounded-lg lucide lucide-credit-card w-12 h-12 mb-2 text-white relative z-10" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                            </div>
                            <h2 className='font-semibold text-xl'>Comptes intelligents</h2>
                            <p className='text-white/60 -mt-1'>
                                Gestion automatisée de vos comptes avec IA pour optimiser vos finances au quotidien.
                            </p>
                        </div>
                        <div className='overflow-x-hidden group relative border border-[#393161] bg-[#393161]/10 rounded-xl flex flex-col gap-3 p-4 hover:bg-[#4592ff]/10 hover:border-[#4592ff] duration-500 ease-in-out'>
                            <svg  className="-right-50 absolute top-0" ><circle cx="80" cy="20" r="3" fill="currentColor" className="text-[#393161]"></circle><circle cx="60" cy="20" r="2" fill="currentColor" className="text-[#393161]"></circle><circle cx="80" cy="40" r="2" fill="currentColor" className="text-[#393161]"></circle><line x1="80" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line><line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line></svg>
                            <div className='relative group'>
                                <span className='absolute -inset-1 rounded-md bg-linear-to-tl from-[#a07aff] to-[#9059ff] blur-lg opacity-60 w-12'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-right bg-linear-to-tl from-[#9059ff] to-[#a07aff] w-12 h-12 mb-2 p-3 rounded-lg text-white relative z-10" aria-hidden="true"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>                            </div>
                            <h2 className='font-semibold text-xl'>Transferts instantanés</h2>
                            <p className='text-white/60 -mt-1'>
                                Transferts instantanés Virements en temps réel, partout dans le monde, sans frais cachés.
                            </p>
                        </div>
                        <div className='overflow-x-hidden group relative border border-[#393161] bg-[#393161]/10 rounded-xl flex flex-col gap-3 p-4 hover:bg-[#4592ff]/10 hover:border-[#4592ff] duration-500 ease-in-out'>
                            <svg  className="-right-50 absolute top-0" ><circle cx="80" cy="20" r="3" fill="currentColor" className="text-[#393161]"></circle><circle cx="60" cy="20" r="2" fill="currentColor" className="text-[#393161]"></circle><circle cx="80" cy="40" r="2" fill="currentColor" className="text-[#393161]"></circle><line x1="80" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line><line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line></svg>
                            <div className='relative group'>
                                <span className='absolute -inset-1 rounded-md bg-linear-to-tr from-[#355dfc] to-[#8254ff] blur-lg opacity-60 w-12'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-piggy-bank bg-linear-to-tr from-[#355dfc] to-[#8254ff] w-12 h-12 p-3 rounded-lg text-white relative z-10" aria-hidden="true"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path><path d="M16 10h.01"></path><path d="M2 8v1a2 2 0 0 0 2 2h1"></path></svg>                            </div>
                            <h2 className='font-semibold text-xl'>Épargne automatique</h2>
                            <p className='text-white/60 -mt-1'>
                                Algorithmes intelligents pour épargner sans effort et atteindre vos objectifs.
                            </p>
                        </div>
                        <div className='overflow-x-hidden group relative border border-[#393161] bg-[#393161]/10 rounded-xl flex flex-col gap-3 p-4 hover:bg-[#4592ff]/10 hover:border-[#4592ff] duration-500 ease-in-out'>
                            <svg  className="-right-50 absolute top-0" ><circle cx="80" cy="20" r="3" fill="currentColor" className="text-[#393161]"></circle><circle cx="60" cy="20" r="2" fill="currentColor" className="text-[#393161]"></circle><circle cx="80" cy="40" r="2" fill="currentColor" className="text-[#393161]"></circle><line x1="80" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line><line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line></svg>
                            <div className='relative group'>
                                <span className='absolute -inset-1 rounded-md bg-linear-to-br from-[#355dfc] to-[#8254ff] blur-lg opacity-60 w-12'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up bg-linear-to-br from-[#355dfc] to-[#8254ff] rounded-lg w-12 h-12 p-3 text-white relative z-10" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>                            </div>
                            <h2 className='font-semibold text-xl'>Investissements</h2>
                            <p className='text-white/60 -mt-1'>
                                Portefeuilles diversifiés gérés par IA avec analyse prédictive des marchés.
                            </p>
                        </div>
                        <div className='overflow-x-hidden group relative border border-[#393161] bg-[#393161]/10 rounded-xl flex flex-col gap-3 p-4 hover:bg-[#4592ff]/10 hover:border-[#4592ff] duration-500 ease-in-out'>
                            <svg  className="-right-50 absolute top-0" ><circle cx="80" cy="20" r="3" fill="currentColor" className="text-[#393161]"></circle><circle cx="60" cy="20" r="2" fill="currentColor" className="text-[#393161]"></circle><circle cx="80" cy="40" r="2" fill="currentColor" className="text-[#393161]"></circle><line x1="80" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line><line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line></svg>
                            <div className='relative group'>
                                <span className='absolute -inset-1 rounded-md bg-linear-to-tl from-[#9973ff] to-[#bba6ff] blur-lg opacity-60 w-12'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-12 h-12 mb-2 bg-linear-to-tl from-[#9973ff] to-[#bba6ff] p-3 rounded-lg  text-white relative z-10" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>                            </div>
                            <h2 className='font-semibold text-xl'>Réactivité extrême</h2>
                            <p className='text-white/60 -mt-1'>
                                Toutes vos opérations traitées en millisecondes grâce à notre infrastructure cloud.
                            </p>
                        </div>
                        <div className='overflow-x-hidden group relative border border-[#393161] bg-[#393161]/10 rounded-xl flex flex-col gap-3 p-4 hover:bg-[#4592ff]/10 hover:border-[#4592ff] duration-500 ease-in-out'>
                            <svg  className="-right-50 absolute top-0" ><circle cx="80" cy="20" r="3" fill="currentColor" className="text-[#393161]"></circle><circle cx="60" cy="20" r="2" fill="currentColor" className="text-[#393161]"></circle><circle cx="80" cy="40" r="2" fill="currentColor" className="text-[#393161]"></circle><line x1="80" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line><line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" className="text-[#393161]"></line></svg>
                            <div className='relative group'>
                                <span className='absolute -inset-1 rounded-md bg-[#407fff] blur-lg opacity-60 w-12'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-[#216fff] p-3 rounded-lg lucide lucide-globe w-12 h-12 mb-2 text-white relative z-10" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>                            
                                <h2 className='font-semibold text-xl'>Multi-devises</h2>
                            <p className='text-white/60 -mt-1'>
                                Gérez plus de 150 devises avec conversion en temps réel aux meilleurs taux.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-12 items-center px-4 py-20 md:py-40 lg:px-8  max-lg:flex-wrap'>
                    <div className='w-1/2 max-lg:w-full'>
                        <span id='sécurité' className='border border-[#ada1e6] bg-[#ada1e6]/10 rounded-full py-2 px-4 text-[#ada1e6]'>Cybersécurité maximale</span>
                        <h2 className='lg:text-5xl mt-8 w-[95%] max-lg:text-4xl max-md:text-3xl max-sm:w-full'>Votre sécurité est notre <span className='text-transparent bg-clip-text bg-linear-to-r from-[#c1b0ff] to-[#a785ff]'>priorité absolue</span> </h2>
                        <p className='mt-6 text-white/60 text-sm md:text-base lg:text-xl sm:w-[95%] max-sm:w-full'>
                            Nous utilisons les technologies de cybersécurité les plus avancées pour garantir la protection totale de vos données et de vos actifs financiers.
                        </p>
                        <div className='flex gap-6 mt-8'>
                            <div className='w-1/2 flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/40 rounded-xl p-4'>
                                <span className='text-xl md:text-3xl'>256-bit</span>
                                <span className='text-white/60 text-xs md:text-base'>Cryptage-AES</span>
                            </div>
                            <div className='w-1/2 flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/40 rounded-xl p-4'>
                                <span className='text-xl md:text-3xl'>99.99%</span>
                                <span className='text-white/60  text-xs md:text-base'>Uptime garanti</span>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
                        <div className='cursor-default flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/10 rounded-xl p-4 relative group hover:bg-[#3a3069]/40 hover:border-violet-900 hover:transition-all hover:ease-in hover:duration-300'>
                            <div className='relative'>
                                <span className='absolute -inset-1 rounded-md bg-[#3a3069] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-10 h-10 p-2 rounded-lg bg-[#403470] text-violet-300 relative z-10 mb-2" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                            </div>
                            <h3 className='text-sm md:text-xl'>Cryptage militaire</h3>
                            <p className='text-white/60 text-xs md:text-sm'>
                                Vos données sont protégées par un cryptage AES-256, le meme utilisé par les gouvernements.
                            </p>
                        </div>
                        <div className='cursor-default flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/10 rounded-xl p-4 relative group hover:bg-[#3a3069]/40 hover:border-violet-900 hover:transition-all hover:ease-in hover:duration-300'>
                            <div className='relative'>
                                <span className='absolute -inset-1 rounded-md bg-[#3a3069] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint-pattern w-10 h-10 p-2 rounded-lg bg-[#403470] text-violet-300 relative z-10 mb-2" aria-hidden="true"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
                            </div>
                            <h3 className='text-sm md:text-xl'>Biométrie avancée</h3>
                            <p className='text-white/60 text-xs md:text-sm'>
                                Authentification par emprunte digitale et reconnaissance faciale de derniere génération.
                            </p>   
                        </div>
                        <div className='cursor-default flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/10 rounded-xl p-4 relative group hover:bg-[#3a3069]/40 hover:border-violet-900 hover:transition-all hover:ease-in hover:duration-300'>
                            <div className='relative'>
                                <span className='absolute -inset-1 rounded-md bg-[#3a3069] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-10 h-10 p-2 rounded-lg bg-[#403470] text-violet-300 relative z-10 mb-2" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                            <div className='relative'>
                                <span className='absolute -inset-1 rounded-md bg-[#3a3069] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                            </div>
                            <h3 className='text-sm md:text-xl'>Blockchain sécurisé</h3>
                            <p className='text-white/60 text-xs md:text-sm'>
                                Transaction enregistrée sur une blockchain privée pour une traçabilité totale.                            
                            </p>   
                        </div>
                        <div className='cursor-default flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/10 rounded-xl p-4 relative group hover:bg-[#3a3069]/40 hover:border-violet-900 hover:transition-all hover:ease-in hover:duration-300'>
                            <div className='relative'>
                                <span className='absolute -inset-1 rounded-md bg-[#3a3069] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-10 h-10 p-2 rounded-lg bg-[#403470] text-violet-300 relative z-10 mb-2" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <h3 className='text-sm md:text-xl'>Surveillance 24/7</h3>
                            <p className='text-white/60 text-xs md:text-sm'>
                                Systemes IA de détection de fraudes actifs en permanence pour votre protection.                           
                            </p>   
                        </div>
                        <div className='cursor-default flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/10 rounded-xl p-4 relative group hover:bg-[#3a3069]/40 hover:border-violet-900 hover:transition-all hover:ease-in hover:duration-300'>
                            <div className='relative'>
                                <span className='absolute -inset-1 rounded-md bg-[#3a3069] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server w-10 h-10 p-2 rounded-lg bg-[#403470] text-violet-300 relative z-10 mb-2" aria-hidden="true"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                            </div>
                            <h3 className='text-sm md:text-xl'>Infrastructure redondante</h3>
                            <p className='text-white/60  text-xs md:text-sm'>
                                Datacenter distribués avec backup en temps réel pour une disponibilité maximale.                           
                            </p>   
                        </div>
                        <div className='cursor-default flex flex-col gap-2 border border-[#3a3069] bg-[#3a3069]/10 rounded-xl p-4 relative group hover:bg-[#3a3069]/40 hover:border-violet-900 hover:transition-all hover:ease-in hover:duration-300'>
                            <div className='relative'>
                                <span className='absolute -inset-1 rounded-md bg-[#3a3069] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-10 h-10 p-2 rounded-lg bg-[#403470] text-violet-300 relative z-10 mb-2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>                            </div>
                            <h3 className='text-sm md:text-xl'>Alertes instantanées</h3>
                            <p className='text-white/60 text-xs md:text-sm'>
                                Notifications en temps réel pour chaque transaction et activité suspecte détectée.                           
                            </p>   
                        </div>
                    </div>
                </div>
                <div className='bg-[#0c1224] py-18 px-4 lg:px-8'>   
                    <div className='flex justify-center'>
                        <h2  className='flex items-center justify-center w-45 md:w-55 gap-2 text-[#4fa1ff] border border-[#4fa1ff] rounded-full bg-[#4fa1ff]/10 py-1 px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-3 h-3 sm:w-4 sm:h-4 text-blue-400" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
                            <span id='technologie' className='text-xs md:text-base'>Intelligence Artificielle</span>
                        </h2>   
                    </div>
                    <div className='flex flex-col items-center gap-4 my-12'>
                        <h2 className='text-4xl text-center lg:text-6xl'>Propulsé par une <span className='text-transparent bg-clip-text bg-linear-to-r from-[#4592ff] to-[#ada8ff]'>IA de pointe</span></h2>
                        <p className='text-base  md:text-xl w-[90%] lg:w-[65%] text-center text-white/60'>
                            Notre intelligence artificielle analyse vos habitudes financières en temps réel pour vous proposer des recommandations personnalisées et optimiser automatiquement votre patrimoine.                        
                        </p>
                    </div>
                    <div>
                        <div className='flex max-lg:flex-col gap-4 justify-center border border-[#192a59] rounded-3xl px-4 md:px-8 pt-10 pb-16 bg-[#192a59]/20'>
                            <div className='lg:order-2 lg:w-1/2'>
                                <h2 className='text-2xl md:text-3xl'>Automatisation Intelligente</h2>
                                <p className='text-white/60 text-sm md:text-base text-left my-4 lg:my-6'>
                                    Laissez notre IA gérer vos finances pendant que vous vous concentrez sur ce qui compte vraiment. Analyse prédictive, optimisation fiscale, et gestion de portefeuille entièrement automatisées.
                                </p>
                                <ul className='text-left flex flex-col gap-4 mt-2'>
                                    <li className='flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target p-2 bg-[#313f7d] rounded-lg w-8 h-8 text-blue-400" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                                        <span className='text-white/70 text-sm md:text-base w-[80%]'>Objectifs financiers personnalisés</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line p-2 bg-[#313f7d] rounded-lg w-8 h-8 text-blue-400" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                                        <span className='text-white/70 text-sm md:text-base w-[80%]'>Prévisions précises des marchés</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles p-2 bg-[#313f7d] rounded-lg w-8 h-8 text-blue-400" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                                        <span className='text-white/70 text-sm md:text-base w-[80%]'>Optimisation automatique des dépenses</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap p-2 bg-[#313f7d] rounded-lg w-8 h-8 text-blue-400" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                        <span className='text-white/70 text-sm md:text-base w-[80%]'>Décisions en temps réel</span>
                                    </li>
                                </ul>
                            </div>
                            <div  className='mt-10 flex justify-center items-center lg:order-1 lg:w-1/2 '>
                                <svg ref={rotateRef} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain lg:p-8 p-6 rounded-full bg-linear-to-r from-[#8082ff] to-[#a382ff] w-24 h-24 md:w-32 md:h-32 text-white max-lg:mt-8" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg></div>                        
                            </div>
                        <div className='mt-8 grid gap-4 md:grid-cols-3'>
                            <div className=' flex flex-col gap-2 border border-[#2a2c3d] bg-[#2a2c3d]/10 rounded-xl p-4 relative group  hover:border-blue-600 hover:transition-all hover:ease-in hover:duration-300 lg:p-8'>
                                <div className='relative'>
                                    <span className='absolute -inset-1 rounded-md bg-[#2a2c3d] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu w-10 h-10 bg-[#1b2a4a] p-2 rounded-lg text-blue-400 relative z-10" aria-hidden="true"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>
                                </div>
                                <h3 className='text-sm md:text-xl'>Machine Learning</h3>
                                <p className='text-white/60 text-xs md:text-sm'>
                                    Algorithmes auto-apprenants qui s'améliorent avec chaque transaction                           
                                </p>   
                            </div>
                            <div className=' flex flex-col gap-2 border border-[#2a2c3d] bg-[#2a2c3d]/10 rounded-xl p-4 relative group  hover:border-blue-600 hover:transition-all hover:ease-in hover:duration-300 lg:p-8'>
                                <div className='relative'>
                                    <span className='absolute -inset-1 rounded-md bg-[#3a3361] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line p-2 rounded-lg h-10 w-10 bg-[#3a3361] text-violet-400 relative z-10" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                                </div>
                                <h3 className='text-sm md:text-xl'> Analyse prédictive</h3>
                                <p className='text-white/60 text-xs md:text-sm'>
                                    Anticipation des tendances de marché avec 95% de précision                   
                                </p>   
                            </div>
                            <div className=' flex flex-col gap-2 border border-[#2a2c3d] bg-[#2a2c3d]/10 rounded-xl p-4 relative group  hover:border-blue-600 hover:transition-all hover:ease-in hover:duration-300 lg:p-8'>
                                <div className='relative'>
                                    <span className='absolute -inset-1 rounded-md bg-[#3a3361] blur-lg opacity-10 w-12 group-hover:opacity-100'></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target p-2 rounded-lg h-10 w-10 bg-[#3a3361] text-violet-400 relative z-10" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>                                </div>
                                <h3 className='text-sm md:text-xl'>Personnalisation totale</h3>
                                <p className='text-white/60 text-xs md:text-sm'>
                                    Recommandations adaptées à votre profil financier unique                           
                                </p>   
                            </div>
                        </div>                       
                    </div>
                </div>
                <div className='bg-[#181436] px-6 xl:px-40 py-14'>
                    <div className='border border-[#524f69] bg-[#524f69]/30 rounded-3xl px-4 py-10 '>
                        <div className='flex justify-center'>
                            <p className='w-55 md:w-70 flex items-center justify-center  gap-2 text-[#4fa1ff] border border-[#4fa1ff] rounded-full bg-[#4fa1ff]/10 py-1 px-4'>
                                <span className='w-2 h-2 rounded-full bg-[#4fa1ff] animate-pulse'></span>
                                <span className='text-xs md:text-base'>Rejoignez le futur de la banque</span>
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-6 mt-8'>
                            <h2 className='text-4xl text-center md:text-5xl md:w-[90%] lg:text-6xl'>Prêt à transformer votre <span className='text-transparent bg-clip-text bg-linear-to-r from-[#4592ff] to-[#ada8ff]'>expérience bancaire ?</span></h2>
                            <p className='text-base  md:text-xl md:md:w-[95%] lg:w-[65%] text-center text-white/60'>
                                Rejoignez des milliers d'utilisateurs qui ont déjà choisi Pulse pour sa technologie de pointe et sa simplicité d'utilisation.
                            </p>
                        </div>
                        <div className='mt-8 text-white/60 grid gap-2 md:grid-cols-2 md:p-6 lg:ml-[15%]'>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 align-middle max-lg:mt-1 lg:mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                <span>Ouverture de compte en 5 minutes</span>
                            </div>
                            <div className='flex gap-2 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 align-middle max-lg:mt-1 lg:mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                <span>Aucun dépôt minimum requis</span>
                            </div>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 align-middle max-lg:mt-1 lg:mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                <span>Carte virtuelle gratuite immédiate</span>
                            </div>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 align-middle max-lg:mt-1 lg:mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                <span>Support client IA 24/7</span>
                            </div>
                        </div>
                        
                        <div className='my-8 flex justify-center max-sm:flex-wrap items-center gap-4 font-semibold w-full'>
                            <div className='max-sm:w-full cursor-default relative group'>
                                <span className=" absolute -inset-1 rounded-md bg-linear-to-r from-[#407fff] to-[#a382ff] blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300"></span>
                                <Link to=''  className='max-sm:w-full justify-center flex gap-1 items-center  relative bg-linear-to-r from-[#407fff] to-[#a382ff] py-2 sm:py-3 px-8 shadow-sm rounded-md text-white group-hover:bg-linear-to-r group-hover:from-[#206aff] group-hover:to-[#9973ff]'>
                                    <span>Commencer maintenant</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </Link>    
                            </div>
                            <div  className='-mt-2 cursor-default py-2 sm:py-3 px-8 bg-white rounded-md text-[#4592ff] max-sm:w-full max-md:flex max-md:justify-center'>
                                <Link to=''>Planifier une démo</Link>
                            </div>  
                        </div>
                        <p className='text-center text-xs text-white/50'>
                            🔒 Vos données sont protégées • ACPR régulé • Garantie des dépôts jusqu'à 100 000€
                        </p>
                    </div>
                </div>
                
            </main>
            <footer className=' bg-[#0c1224] text-white px-4 py-6 md:px-6 relative'>
                <div className=' lg:flex items-center'>
                    <div className='lg:w-[40%]'>
                        <div className='cursor-default flex items-center gap-2'>
                            <div className='border-4 border-[#337eff] rounded-full w-8 h-8 flex items-center justify-center'>
                                <div className='bg-[#337eff] rounded-full w-4 h-4'></div>
                            </div>
                            <span className='text-2xl uppercase'>Pulse</span>
                        </div>
                        <p className='text-sm lg:text-base text-white/60 my-4 md:w-[40%] lg:w-[75%]'>
                            PULSE La banque 100% digitale propulsée par l'IA. Innovation, sécurité et transparence pour une nouvelle génération de services financiers
                        </p>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter text-white/60 w-10 h-10 p-2 bg-[#161b29] rounded-xl hover:text-blue-500 transition duration-300" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white/60 w-10 h-10 p-2 bg-[#161b29] rounded-xl hover:text-blue-500 transition duration-300" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github text-white/60 w-10 h-10 p-2 bg-[#161b29] rounded-xl hover:text-blue-500 transition duration-300" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram text-white/60 w-10 h-10 p-2 bg-[#161b29] rounded-xl hover:text-blue-500 transition duration-300" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </div>
                    </div>
            
                    <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 lg:w-[60%]'>
                        <ul className='flex flex-col gap-3 lg:gap-6'>
                            <h1 className='text-sm'>Produit</h1>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Comptes
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Epargne
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Investissements
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                API
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3 lg:gap-6'>
                            <h1 className='text-sm'>Entreprise</h1>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                A propos
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Carriere
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Blog
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Presse
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Partenaires
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3 mt-6 lg:mt-0 lg:gap-6'>
                            <h1 className='text-sm'>Ressources</h1>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Documentation
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Support
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Sécurité
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Status
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                API Docs
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3 mt-6 lg:mt-0 lg:gap-6'>
                            <h1 className='text-sm'>Légal</h1>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Confidentialité
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Conditions
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Mentions légales
                            </li>
                            <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                                Cookies
                            </li>
                        </ul>
                        
                    </div>
                </div>
                
                <div className='border-t border-[#2d3b61] mt-6 text-center py-4 md:flex items-center justify-between'>
                    <p className='text-xs text-white/60 mt-2 '>
                        © 2025 Pulse. Tous droits réservés. • Régulé par l'ACPR
                    </p>
                    <ul className='flex gap-4 justify-center mt-4 md:mt-2'>
                        <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                            Confidentialité
                        </li>
                        <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                            Conditions
                        </li>
                        <li className='cursor-default text-xs text-white/60 hover:text-blue-500'>
                            Accessibilité
                        </li>
                    </ul>
                    <div className='absolute bottom-9 h-px left-[19%] md:left-[40%] md:bottom-10 inline-block w-54 bg-[#16366b]'></div>
                </div>
            </footer>
        </>
    )
}
export default Pulse