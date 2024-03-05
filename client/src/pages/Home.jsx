//https://www.framer.com/motion/animate-presence/
import {motion , AnimatePresence} from 'framer-motion';
//https://valtio.pmnd.rs/docs/api/basic/useSnapshot
import {useSnapshot} from "valtio";

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation

} from "../config/motion"

import state from '../store';

import {CustomButton} from '../components'

const Home = () => {
    const snap = useSnapshot(state);
    return (
       <AnimatePresence>
        {
            snap.intro
            &&
            <motion.section
            className='home'
            {...slideAnimation('left')}
            >
                <motion.header
                {...slideAnimation('down')}
                >
                    <img src={'./threejs.png'}
                    alt="logo"
                    className='w-8 h-8 object-contain'
                    />
                </motion.header>

                <motion.div className='home-content'
                {...headContainerAnimation}
                >
                    <motion.div
                    {...headTextAnimation}
                    >
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden'/> DO IT
                        </h1>
                    </motion.div>

                    <motion.div {...headContentAnimation}>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat maxime aliquam earum vitae. Minima facilis voluptate doloremque soluta reiciendis.
                        </p>
                        <br />
                        <CustomButton
                            type="filled"
                            title="Customize It"
                            handleClick = { () =>( state.intro = false )}
                            customStyles="w-fit px-4 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>

            </motion.section>
        }

       </AnimatePresence>
    );
};

export default Home;

/*

### Creating state

create a store folder >> index.js

import {proxy} from 'valtio'; and create a state using the proxy.

proxy takes an object which contains the initial values;

const state = proxy( { initial object values } ) ;

then export the state as default

### Accessing the state value ( anywhere in the react app )

import {useSnapshot} from "valtio";

also import the state that we cratet in the store

import state from '../store';

--- inside the Component function craete a snap using the state --


const Home = () => {
    const snap = useSnapshot(state);

    return (
       // jsx
    );
};


** now we can use the default state value within our app.

*/