
import Header from "../../header/Header";
import './projects.css'
import { CPlain } from "devicons-react";
import icons from "../../assets/icons/icons";
import Card from "./Card";
import projectsData from "./data";


function Projects() {


    const cards = projectsData.map(item => (
        <Card
          title={item.projectTitle}
          description={item.projectDescription}
          img={item.projectImgCard}
          technologies= {item.technologies}
        />
      ));

    return (
        <>
            <Header />
            <div class="w-full h-[92vh] lg:h-[88vh] lg:px-[50px] flex flex-col justify-evenly ">

                <div className="w-full h-1/3  flex flex-col items-center  gap-6 justify-end ">
                    <h1 className=" text-[54px] font-black font-roboto text-dark-900">
                        My Recent Projects
                    </h1>
                    <p className="text-right text-dark-800 text-[1.1rem] font-normal font-roboto">
                        Explore more of my coding projects and view the source code on my GitHub repository.
                    </p>
                </div>




                <div class="flex overflow-x-scroll  hide-scroll-bar py-2 ">
                    <div class="flex  flex-nowrap  mx-10  ">



                        {/* <div className="w-[17rem] h-[19rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-dark-900 hover:shadow-xl transition-shadow duration-300 ease-in-out mx-3">
                            <img className="h-[45%] w-full bg-cover bg-center rounded-t-lg" src={icons.cardImg} alt="" />
                            <div className="p-5 pt-[0.4rem] flex flex-col items-center">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                    Libfit
                                </h5>
                                <p className="mb-1 font-normal  text-center text-[0.9rem] text-gray-700 dark:text-gray-400 ">
                                    Create a versatile C library for essential functions in C projects.
                                </p>
                                <CPlain size={24} color="white" className="mb-2" />
                                <a href="github.com/bben-aou" className="w-[60%] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    source code
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div> */}

                        

                        {cards}
                        
      
                    </div>
                </div>


            </div>

        </>

    )
}
export default Projects;
