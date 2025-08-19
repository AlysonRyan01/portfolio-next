'use client'
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="max-w-[100vw] overflow-hidden">
        <div id="inicio" className="w-full flex justify-center mt-[70px] lg:mt-[120px]">
            <section className="flex flex-col justify-center text-start lg:flex-row w-[95%] lg:w-[80%] gap-10">
                <section className="flex flex-col gap-7 lg:max-w-[45%] self-center">

                    <section className="flex flex-col text-center lg:text-start">
                        <h2
                            className="text-6xl lg:text-8xl 2xl:text-[140px] font-light"
                            data-aos="fade-down-right"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                        >
                            Alyson R.
                        </h2>
                        <h2
                            className="text-6xl lg:text-8xl 2xl:text-[140px] font-light ml-[80px]"
                            data-aos="fade-up-left"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            Ullirsch
                        </h2>
                    </section>

                    <section
                        className="text-center lg:text-start"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        data-aos-duration="800"
                    >
                        <p className="text-lg xl:text-2xl text-hover font-bold text-[#F83132]">Desenvolvedor Web Full Stack</p>
                    </section>

                    <section
                        className="flex flex-col text-center lg:text-start gap-4"
                        data-aos="fade-up"
                        data-aos-delay="700"
                        data-aos-duration="1000"
                    >
                        <p className="text-base lg:text-lg text-[#585a5b]">
                            Olá, eu sou desenvolvedor full stack, construindo sistemas sólidos com C# .NET e aplicações modernas com Next.js.
                        </p>
                        <p className="text-base lg:text-lg text-[#585a5b]">
                            Aqui é onde mostro como transformo desafios em soluções reais.
                        </p>
                        <span className="font-bold text-xl text-[#270065] mb-5">Seja bem-vindo!</span>
                        <button onClick={() => window.open('/curriculo.pdf', '_blank')} className="flex flex-row self-center shadow-lg items-center gap-2 bg-[#F83132] lg:self-start cursor-pointer py-[14px] hover:shadow-xl px-[50px] text-white font-bold rounded-xl transition-transform duration-300 hover:scale-110">
                            Currículo <ArrowRightIcon className="w-5 h-5 scale-125" />
                        </button>
                    </section>

                </section>

                <section
                    className="hidden lg:flex relative flex-col gap-7 w-[45%]"
                    data-aos="fade-left"
                    data-aos-delay="1100"
                    data-aos-duration="1200"
                >
                    <Image src="/img01.svg" alt="desenho" width={600} height={400} style={{ width: "100%", height: "auto" }}/>
                </section>
            </section>
        </div>

        <div>
            <hr data-aos="zoom-in" data-aos-duration="2000" className="border-t border-[#d0d0d0] my-[100px] w-[70%] md:w-[40%] mx-auto" />
        </div>

        <div id="sobremim" className="w-full flex justify-center">
            <section className="flex flex-col w-[95%] lg:w-[80%] mx-auto gap-6 text-center">
                <h2
                    className="text-hover text-3xl lg:text-4xl mb-6 text-[#F83132]"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    Um Pouco Sobre Mim
                </h2>

                <p
                    className="text-base md:text-lg text-[#585a5b] leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="700"
                >
                    Me chamo Alyson Ryan Ullirsch e atualmente moro em uma cidade do Paraná chamada Campo Largo.
                </p>

                <p
                    className="text-base md:text-lg text-[#585a5b] leading-relaxed"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="700"
                >
                    Estudo programação desde 2022, mas apenas em 2024 iniciei meus estudos acadêmicos em Análise e Desenvolvimento de Sistemas.
                </p>

                <p
                    className="text-base md:text-lg text-[#585a5b] leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="700"
                >
                    Comecei estudando JavaScript em 2022, mas procrastinava bastante. Após pesquisar um pouco, conheci o ecossistema .NET,
                    e foi aí que realmente comecei a estudar com dedicação, tendo como mentores professores excelentes como Nélio Alves (Udemy)
                    e Balta (Balta.io).
                </p>

                <p
                    className="text-base md:text-lg text-[#585a5b] leading-relaxed"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="700"
                >
                    Me aprofundei em criação e manutenção de APIs REST utilizando C#,
                    aplicando boas práticas como arquitetura em camadas, princípios SOLID e o uso de bibliotecas como Dapper e Entity Framework para acesso a dados.
                    Também desenvolvi conhecimentos em autenticação, versionamento de API, e integração com bancos de dados relacionais, especialmente SQL Server.
                </p>
            </section>
        </div>

        <div>
            <hr data-aos="zoom-in" data-aos-duration="2000" className="border-t border-[#d0d0d0] my-[100px] w-[70%] md:w-[40%] mx-auto" />
        </div>

        <div id="trabalhos" className="w-full flex justify-center">
            <section className="flex flex-col w-[95%] md:w-[80%] mx-auto gap-6 text-center items-center">
                <h2 className="font-normal text-hover text-3xl lg:text-4xl mb-6 text-[#F83132]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-once="true">
                    Meus Trabalhos
                </h2>

                <section className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] w-[95%] md:w-[80%] justify-center">

                    <section className="flex w-full md:w-[20vw] md:min-w-[390px] h-[520px] bg-[#DDDDDD] rounded-3xl border border-[#d0d0d0] shadow-xl"
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                        <section className="flex flex-col justify-between w-full gap-4 p-3">
                            <div className="relative inline-block">
                                <img src="/gerenciamento.png" alt="site TVS Eletronica" className="rounded-t-2xl max-h-[150px] cursor-pointer transition-transform duration-300 hover:scale-95" />
                                <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-[#DDDDDD] to-transparent rounded-t-2xl"></div>
                            </div>
                            <div className="flex flex-col w-full text-start">
                                <h2 className="font-sans font-bold text-xl text-hover">Gerenciam. Ordens de Serviço</h2>
                                <h2 className="font-sans font-bold text-xl text-principal">Empresa: TVS Eletrônica</h2>
                            </div>
                            <div className="flex flex-col w-full text-start">
                                <p className="font-sans font-light text-base">
                                    Projeto para modernizar a TVS Eletrônica, substituindo sistema desktop legado por uma aplicação web com acesso simultâneo e dados seguros no Azure SQL Server.
                                    Usa C# .NET Core, Entity Framework, QuestPDF e Blazor WebAssembly, com arquitetura limpa e padrões DDD e CQS para garantir organização e manutenção fácil.
                                </p>
                            </div>
                            <div className="flex flex-row w-full text-start">
                                <ul className="flex flex-row justify-evenly">
                                    <li>
                                        <a href="https://github.com/AlysonRyan01/TVS-Manager" target="_blank" rel="noopener noreferrer"
                                        className="p-2 rounded-full hover:bg-hover transition-colors duration-300 inline-block">
                                            <img src="/github.png" alt="logo github" className="w-[32px]"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </section>

                    <section className="flex w-full md:w-[20vw] md:min-w-[390px] h-[520px] bg-[#DDDDDD] rounded-3xl border border-[#d0d0d0] shadow-xl"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                        <section className="flex flex-col justify-between w-full gap-4 p-3">
                            <div className="relative inline-block">
                                <img src="/site-tvs.png" alt="site TVS Eletronica" className="rounded-t-2xl max-h-[150px] cursor-pointer transition-transform duration-300 hover:scale-95" />
                                <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-[#DDDDDD] to-transparent rounded-t-2xl"></div>
                            </div>
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="flex flex-col w-full text-start">
                                    <h1 className="font-sans font-bold text-xl text-hover">Landing Page TVS</h1>
                                    <h1 className="font-sans font-bold text-xl text-principal">Empresa: TVS Eletrônica</h1>
                                </div>
                                <div className="flex flex-col w-full text-start">
                                    <p className="font-sans font-light text-base ">
                                        Landing page para consulta e solicitação de orçamentos, permitindo que os clientes entrem em contato facilmente e recebam propostas personalizadas de forma rápida e eficiente.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full text-start">
                                    <ul className="flex flex-row justify-evenly">
                                        <li>
                                            <a href="https://github.com/AlysonRyan01/TVS" target="_blank" rel="noopener noreferrer"
                                            className="p-2 rounded-full hover:bg-hover transition-colors duration-300 inline-block">
                                                <img src="/github.png" alt="logo github" className="w-[32px]"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://tvseletronica.com" target="_blank" rel="noopener noreferrer"
                                            className="p-2 rounded-full hover:bg-hover transition-colors duration-300 inline-block">
                                                <img src="/navegador.png" alt="logo navegador"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </div>

        <div>
            <hr data-aos="zoom-in" data-aos-duration="2000" className="border-t border-[#d0d0d0] my-[100px] w-[70%] md:w-[40%] mx-auto" />
        </div>

        <section id="habilidades" className="bg-gradient-to-b from-white to-gray-50" data-aos="fade-up" data-aos-duration="1000">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-center text-hover mb-12 text-[#F83132]"
                    data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
                    Minhas Habilidades
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="fade-right" data-aos-delay="100">
                        <p className="text-[#270065] font-bold text-lg mb-4">Linguagens</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/c%23icon.png" alt="Ícone C#" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/javascripticon.png" alt="Ícone JavaScript" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="fade-left" data-aos-delay="200">
                        <p className="text-[#270065] font-bold text-lg mb-4">Frameworks</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/blazoricon.png" alt="Ícone Blazor" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/entityframework.png" alt="Ícone Entity Framework" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/aspneticon.png" alt="Ícone ASP.NET" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/nextjs.webp" alt="Ícone REACT.JS" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/React-icon.png" alt="Ícone NEXT.JS" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="zoom-in" data-aos-delay="300">
                        <p className="text-[#270065] font-bold text-lg mb-4">Micro-ORM</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/dappericon.png" alt="Ícone Dapper" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="flip-left" data-aos-delay="400">
                        <p className="text-[#270065] font-bold text-lg mb-4">Banco de Dados</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/sqlservericon.png" alt="Ícone SQL Server" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="fade-up" data-aos-delay="500">
                        <p className="text-[#270065] font-bold text-lg mb-4">Versionamento</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/giticon.png" alt="Ícone Git" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/githubicon.png" alt="Ícone GitHub" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="fade-down" data-aos-delay="600">
                        <p className="text-[#270065] font-bold text-lg mb-4">Plataformas</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/azureicon.png" alt="Ícone Azure" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="flip-up" data-aos-delay="700">
                        <p className="text-[#270065] font-bold text-lg mb-4">Ferramentas</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/swaggericon.png" alt="Ícone Swagger" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/postmanicon.webp" alt="Ícone Postman" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="zoom-out" data-aos-delay="800">
                        <p className="text-[#270065] font-bold text-lg mb-4">Containers</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/dockericon.png" alt="Ícone Docker" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
                        data-aos="fade-right" data-aos-delay="900">
                        <p className="text-[#270065] font-bold text-lg mb-4">Estilização</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <img src="/htmlicon.png" alt="Ícone HTML" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/cssicon.png" alt="Ícone CSS" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/tailwindicon.png" alt="Ícone Tailwind" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                            <img src="/bootstrapicon.png" alt="Ícone Bootstrap" className="h-16 w-16 object-contain hover:scale-110 transition-transform"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div>
            <hr data-aos="zoom-in" data-aos-duration="2000" className="border-t border-[#d0d0d0] my-[100px] w-[70%] md:w-[40%] mx-auto" />
        </div>

        <div id="contato" className="w-full pb-12 md:pb-20">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <h2 className="text-3xl md:text-4xl text-center text-hover mb-12 text-[#F83132]"
                    data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
                    Social e Contato
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
                    <a href="https://www.linkedin.com/in/alyson-ullirsch" target="_blank"
                    className="group flex flex-col items-center p-4 md:p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <div className=" p-4 rounded-full mb-3">
                            <img src="/linkedincontato.png" className="h-8 md:h-12 w-auto" alt="LinkedIn ícone"/>
                        </div>
                        <p className="font-semibold text-sm md:text-base">
                            LinkedIn
                        </p>
                    </a>

                    <a href="https://github.com/AlysonRyan01" target="_blank"
                    className="group flex flex-col items-center p-4 md:p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                        <div className=" p-4 rounded-full mb-3">
                            <img src="/githubcontato.png" className="h-8 md:h-12 w-auto" alt="GitHub ícone"/>
                        </div>
                        <p className="font-semibold text-sm md:text-base ">
                            GitHub
                        </p>
                    </a>

                    <a href="mailto:alysonullirsch8@gmail.com" target="_blank"
                    className="group flex flex-col items-center p-4 md:p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <div className=" p-4 rounded-full mb-3">
                            <img src="/emailcontato.png" className="h-8 md:h-12 w-auto" alt="Email ícone"/>
                        </div>
                        <p className="font-semibold text-sm md:text-base">
                            Email
                        </p>
                    </a>

                    <a href="https://wa.me/5541997561468" target="_blank"
                    className="group flex flex-col items-center p-4 md:p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                        <div className="p-4 rounded-full  mb-3">
                            <img src="/whatsappcontato.png" className="h-8 md:h-12 w-auto" alt="WhatsApp ícone"/>
                        </div>
                        <p className="font-semibold text-sm md:text-base ">
                            WhatsApp
                        </p>
                    </a>
                </div>
            </section>
        </div>

        <div>
            <hr data-aos="zoom-in" data-aos-duration="2000" className="border-t border-cinzaescuro mt-[100px] w-[70%] md:w-[40%] mx-auto" />
        </div>

    </main>
  );
}
