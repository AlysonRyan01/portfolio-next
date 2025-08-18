"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
        if (element == inicio) {
        element.scrollIntoView({ 
            behavior: "smooth", 
            block: "end" });
            setIsDrawerOpen(false);
        } else {
            element.scrollIntoView({ 
            behavior: "smooth", 
            block: "center" });
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // inicializa o AOS
    }, []);

    return (
        <div className="flex min-h-screen w-full">
        {/* Navegação lateral */}
        <nav
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="hidden lg:flex w-[100px] flex-col justify-start items-center fixed h-screen p-6"
        >
            <img
            className="cursor-pointer"
            onClick={() => scrollTo("inicio")}
            src="/A.png"
            alt="logo"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="900"
            />
            <div
            className="h-full flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            >
                <ul className="space-y-3">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/alyson-ryan-ullirsch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full inline-block transition-transform duration-300 hover:scale-140"
                        >
                            <img src="/linkedin.png" alt="linkedin" className="w-[32px]" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/AlysonRyan01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full inline-block transition-transform duration-300 hover:scale-140"
                        >
                            <img src="/github.png" alt="github" className="w-[32px]" />
                        </a>
                    </li>
                        <li>
                        <a
                            href="mailto:alysonullirsch8@gmail.com"
                            className="p-2 rounded-full inline-block transition-transform duration-300 hover:scale-140"
                        >
                            <img src="/email.png" alt="email" className="w-[32px]" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/5541997561468"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full inline-block transition-transform duration-300 hover:scale-140"
                        >
                            <img src="/whatsapp.png" alt="whatsapp" className="w-[32px]" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        {/* Conteúdo principal */}
        <div className="flex flex-col flex-1 overflow-auto lg:ml-[100px]">
            <header className="w-full flex md:justify-center" data-aos="fade-down">
                <div className="hidden lg:flex w-[80%] flex-row justify-between p-3 mt-5">
                    <section className="gap-2 flex flex-row">
                        <a
                            href="mailto:alysonullirsch8@gmail.com"
                            className="relative flex flex-row gap-2 group cursor-pointer"
                        >
                            <img src="/email.png" alt="email icone" className="w-[24px]" />
                            <p className="font-semibold text-base border-b-2 border-[#f83132]">
                            alysonullirsch8@gmail.com
                            </p>
                        </a>
                    </section>
                    <section className="gap-10 flex flex-row">
                        <button
                            onClick={() => scrollTo("sobremim")}
                            className="flex flex-row gap-2 group cursor-pointer relative"
                        >
                            <img src="/perfil.png" alt="perfil" />
                            <p className="text-base relative whitespace-nowrap">
                                Sobre mim
                                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#f83132] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                            </p>
                        </button>
                        <button onClick={() => scrollTo("trabalhos")}
                            className="flex flex-row gap-2 group cursor-pointer relative">
                            <img src="/worker.png" alt="trabalhos" />
                            <p className="text-base relative">
                                Trabalhos
                                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#f83132] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                            </p>
                        </button>
                        <button onClick={() => scrollTo("habilidades")} className="flex flex-row gap-2 group cursor-pointer">
                            <img src="/tecnologia.png" alt="habilidades" />
                            <p className="text-base relative">
                                Habilidades
                                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#f83132] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                            </p>
                        </button>
                    </section>
                </div>

                {/* Menu Mobile */}
                <div className="lg:hidden w-full">
                    <section className="p-5 flex flex-row justify-between">
                    <img onClick={() => scrollTo("inicio")} src="/A.png" alt="logo" className="h-[70px] cursor-pointer" />
                    <button onClick={toggleDrawer}>
                        <img src="/hamburger.png" alt="menu" className="w-[50px]" />
                    </button>
                    </section>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-[100vw] overflow-hidden">{children}</main>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
            <div onClick={toggleDrawer} className="fixed inset-0 bg-opacity-50 z-40"></div>
        )}

        {/* Drawer */}
        <div
            className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <button onClick={toggleDrawer} className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl">
            &times;
            </button>

            <div className="p-4 mb-10">
                <img src="/A.png" alt="logo" />
            </div>

            <nav className="mt-10 flex flex-col gap-6 p-4">
            <button onClick={() => scrollTo("sobremim")} className="flex gap-2">
                <img src="/perfil.png" alt="perfil" />
                <p className="text-principal font-sans text-base">Sobre mim</p>
            </button>
            <button onClick={() => scrollTo("trabalhos")} className="flex gap-2">
                <img src="/worker.png" alt="trabalhos" />
                <p className="text-principal font-sans text-base">Trabalhos</p>
            </button>
            <button onClick={() => scrollTo("habilidades")} className="flex gap-2">
                <img src="/tecnologia.png" alt="habilidades" />
                <p className="text-principal font-sans text-base">Habilidades</p>
            </button>
            </nav>
        </div>
        </div>
  );
}
