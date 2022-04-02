import {createTheme} from "@mui/material/styles";

const lightTheme = createTheme({
    shape: {
        borderRadius: 32
    },
    typography: {
        fontFamily: ' Quicksand, IBM Plex Mono,Raleway, Spartan, Inconsolata, Quicksand,  Chakra Petch, IBM Plex Sans, IBM Plex Serif, Nunito'
    },
    palette: {
        mode: "light",
        primary: {
            main: '#05f2db',
        },
        secondary: {
            main: '#f631a7',
        },
        background: {
            default: '#f1eefd',
            paper: '#ffffff'
        },
        text: {
            primary: '#323130',
            secondary: '#909091',
            title: '#323130',
            light: '#909091',
            link: '#0597f2'
        },
        action: {
            active: '#31cc62',
            disabledOpacity: 0.55,
            special: '#f2db05',
            focusOpacity: 0.85,
            hover: '#31cc62',
            hoverOpacity: 0.85,
            selected: '#31cc62',
            selectedOpacity: 0.85
        }
    }
});


const darkTheme = createTheme({
    shape: {
        borderRadius: 32
    },
    typography: {
        fontFamily: ' Quicksand, IBM Plex Mono, Raleway, Spartan, Inconsolata, Chakra Petch, IBM Plex Sans, IBM Plex Serif, Nunito'
    },
    palette: {
        mode: "dark",
        primary: {
            main: '#05f2db',
        },
        secondary: {
            main: '#f631a7',
        },
        background: {
            default: '#000000',
            paper: '#13132b'
        },
        text: {
            primary: '#eefffd',
            secondary: '#0597f2',
        },
        action: {
            active: '#31cc62',
            disabledOpacity: 0.55,
            special: '#f2db05',
            focusOpacity: 0.85,
            hover: '#31cc62',
            hoverOpacity: 0.85,
            selected: '#31cc62',
            selectedOpacity: 0.85
        }
    }
});

export const THEMES = {lightTheme, darkTheme};
