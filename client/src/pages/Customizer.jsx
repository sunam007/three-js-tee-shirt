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
                <motion.div
                key={"custom"}
                className="absolute top-0 left-0 z-10"
                {...slideAnimation('left')}>
                    <div
                    className="flex items-center min-h-screen">
                        <div className="editortabs-container tabs">
                        {EditorTabs.map(tab => (
                            <Tab
                            key={tab.name}
                            tab={tab}
                            handleClick={() => {} }
                            />
                        ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='absolute z-10 top-5 right-5'
                    {...fadeAnimation}
                >
                    <CustomButton
                    type={"filled"}
                    title={"Go back"}
                    handleClick={() => state.intro = true}
                    customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}

                    />

                </motion.div>

                <motion.div
                className='filtertabs-container absolute z-10 bottom-0 left-1/2'
                {...slideAnimation('up')}
                >
                   {FilterTabs.map(tab => (
                            <Tab
                            key={tab.name}
                            tab={tab}
                            isFilterTab =""
                            isActiveTab=""
                            handleClick={() => {}}
                            />
                        ))}
                </motion.div>

                </>
            )

            }
        </AnimatePresence>
    );
};

export default Customizer;

/*
-- AnimatePresence allows components to animate out when they're removed from the React tree.

-- There's a motion component for every HTML and SVG element, for instance motion.div, motion.circle etc.
https://www.framer.com/motion/component/


*/