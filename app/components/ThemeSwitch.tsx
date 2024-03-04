'use client'
import React, {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {Dark} from './IconsSvg';
import {Light} from './IconsSvg';

export default function ThemeSwitch(){
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, []);
    if (!mounted){
        return null;
    }
    
    return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <Light /> : <Dark h='25px' w='25px' c='#1C274C'/>}
    </button>
}