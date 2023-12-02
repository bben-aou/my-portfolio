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


export default function SkillsIcons() {

    const isMdScreen = useMediaQuery({ minWidth: 768 });
    const isLgScreen = useMediaQuery({ minWidth: 1200 });

    return (
        <>
            <CPlain size={(isLgScreen || isMdScreen) ? 90 : 50} color="#151515" className='scale-up-center' />
            <CplusplusPlain size={(isLgScreen || isMdScreen) ? 90 : 50} color='#0E2954' className='scale-up-center' />
            <Html5OriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <Css3OriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <TailwindcssPlain size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <JavascriptOriginal size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <TypescriptPlain size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <ReactOriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <NextjsLine size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <SocketioOriginal size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <ReduxOriginal size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <DockerOriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />
            <FigmaOriginal size={(isLgScreen || isMdScreen) ? 90 : 50} />
            <GithubOriginalWordmark size={(isLgScreen || isMdScreen) ? 90 : 50} className='scale-up-center' />

        </>
    )
}
