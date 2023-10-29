import Header from "../../header/Header";
import LeftSide from "../../header/components/sides/LeftSide";
import RightSide from "../../header/components/sides/RightSide";
import './home.css'
import { AppContext } from "../../App";
import { useContext } from 'react';

function Home() {
    const { openMenu } = useContext(AppContext);
    return (
        <>
            <Header />
            <div className={!openMenu ? `main-home` : `hidden`}>
                <div className="w-full h-full  lg:h-[90%]  flex flex-col-reverse lg:flex-row  ">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
        </>

    )
}
export default Home;