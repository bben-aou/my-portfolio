import React from 'react'
import { useMediaQuery } from 'react-responsive'


import { CPlain } from 'devicons-react'
import { CplusplusPlain } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { TypescriptPlain } from 'devicons-react';
import { Html5OriginalWordmark } from 'devicons-react';
import { Css3OriginalWordmark } from 'devicons-react';
import { TailwindcssPlain } from 'devicons-react';
import { ReactOriginalWordmark } from 'devicons-react';
import { NextjsLine } from 'devicons-react';
import { SocketioOriginal } from 'devicons-react';
import { ReduxOriginal } from 'devicons-react';
import { DockerOriginalWordmark } from 'devicons-react';
import { FigmaOriginal } from 'devicons-react';
import { GithubOriginalWordmark } from 'devicons-react';

import { AppContext } from '../../App';
import { useContext } from 'react';
import icons from '../../assets/icons/icons';


export default function SkillsIcons() {

    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });

    const {theme} = useContext(AppContext);
    

    return (
        <>
            <CPlain size={(isLgScreen || isMdScreen) ? 90 : 50} color={(theme !== "dark") ? "#151515" : "white"} className='scale-up-center' />
            <CplusplusPlain size={(isLgScreen || isMdScreen) ? 90 : 50} color={(theme !== "dark") ? "#0E2954" : "#3876BF"} className='scale-up-center' />
            <Html5OriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <Css3OriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <TailwindcssPlain size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <JavascriptOriginal size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <TypescriptPlain size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <ReactOriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <NextjsLine size={(isLgScreen || isMdScreen) ? 90 : 50}  color={(theme !== "dark") ? "" : "white"} className='scale-up-center '/>
            {theme !== "dark"  && <SocketioOriginal size={(isLgScreen || isMdScreen) ? 90 : 50}  className='scale-up-center ' />}
            {theme === "dark"  && <img src={icons.socketIconW} width={(isLgScreen || isMdScreen) ? 100 : 50}   alt=' '/>}
            <ReduxOriginal size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <DockerOriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <FigmaOriginal size={(isLgScreen || isMdScreen) ? 90 : 50} />
            {theme !== "dark"  && <GithubOriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50}  className='scale-up-center' />}
            {theme === "dark"  && <img src={icons.gitIconW} width={(isLgScreen || isMdScreen) ? 95 : 50}   alt=' '/>}

        </>
    )
}
