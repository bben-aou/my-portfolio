import Header from "../../header/Header";
import homeArt from '../../assets/home-art.svg'
import icons from '../../assets/icons/icons'
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <>
            <Header />
            <div className='w-full h-[88vh] flex items-center justify-center text-white text-4xl '>
                <div className="w-full h-[90%]  flex">
                    <div className="h-full w-[50%] text-dark-800">
                        <div className="w-full h-[50%]  flex flex-col justify-center">
                            <div className="w-full flex items-center  ">
                                <span className="text-[18px] font-poppins font-medium tracking-wide"> Hi Everyone</span>
                                <div className="h-full  w-[50%] flex items-center px-[10px]">
                                    <img src={icons.hiIcon} alt="Hi-everyone" className="w[25px] h-[25px] "/>
                                    <span className="text-[18px] font-poppins font-medium pl-[10px] tracking-wide">I'm </span>
                                </div>
                            </div>
                            <div className="w-full   flex items-center">
                                <div className="w-full  font-bold leading-tight	flex flex-col "> 
                                    <div className="text-[60px] uppercase "> Bilal Ben Aouad </div>
                                    <div className="text-[35px] font-medium uppercase pl-[20px] flex">
                                        <span className="pr-[10px]">{"> "} </span>
                                        <Typewriter
                                            options={{
                                                strings:
                                                    [
                                                        ' Front-end developer',
                                                        ' React developer',
                                                        ' NextJs developer'
                                                    ],
                                                autoStart: true,
                                                loop: true,

                                            }}
                                        />
                                    </div>
                                        <span className="text-[16px] font-poppins font-medium tracking-wide pl-[2px] pt-[20px]">I help startups launch and and grow their products</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[50%] bg-cyan-500"></div>
                    </div>
                    <div className="h-full w-[50%] flex items-center justify-center ">
                            <img src={homeArt} alt="home-art" />
                    </div>

                </div>
            </div>
        </>

    )
}
export default Home;