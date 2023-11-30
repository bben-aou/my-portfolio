
import Header from "../../header/Header";
import './projects.css'
import { CPlain } from "devicons-react";
import icons from "../../assets/icons/icons";
import Card from "./Card";
import projectsData from "./data";
import { useRef } from "react";


function Projects() {
    const containerRef = useRef(null);

    const handleWheelScroll = (event) => {
        event.preventDefault();
        const container = containerRef.current;
        container.scrollLeft += event.deltaY;
    };

    const cards = projectsData.map(item => (
        <Card
            title={item.projectTitle}
            description={item.projectDescription}
            img={item.projectImgCard}
            technologies={item.technologies}
            githubPath = {item.githubPath}
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


                <div className="flex overflow-x-scroll hide-scroll-bar py-2 "
                    ref={containerRef}
                    onWheel={handleWheelScroll}
                >
                    <div className="flex flex-nowrap  mx-10  "  >

                        {cards}


                    </div>
                </div>


            </div>
        </>

    )
}
export default Projects;
