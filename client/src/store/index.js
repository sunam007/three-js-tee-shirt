import {proxy} from 'valtio';
// valtio is a state management library like redux or zustand

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default state;