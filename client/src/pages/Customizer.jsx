import React from 'react';
import {AnimatePresence,motion} from "framer-motion";
import {useSnapshot} from "valtio"

import state from '../store';
import {download} from '../assets';
import config from '../config/config';
import {downloadCanvasToImage, reader} from '../config/helpers';
import {EditorTabs,FilterTabs,DecalTypes} from '../config/constants';
import {fadeAnimation, slideAnimation} from '../config/motion';

import {
    CustomButton,
    AiPicker,
    ColorPicker,
    FilePicker,
    Tab
} from '../components';


const Customizer = () => {
    // check are we on the homepage or on the customizer
    const snap = useSnapshot(state)

    return (
        <AnimatePresence>
            { ( !snap.intro ) && (
                <>
                Customizer
                </>
            )

            }
            Customizer
        </AnimatePresence>
    );
};

export default Customizer;

/*
AnimatePresence allows components to animate out when they're removed from the React tree.

*/