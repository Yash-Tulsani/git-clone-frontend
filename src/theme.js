import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#FFFFFF',
        dark: '#a8a8a8',
        light: '#FDF6F0',
        },
        secondary: {
        main: '#F58F3C',
        light: '#7b88ad',
        dark: '#fc7c14'
        },
        text: {
        primary: '#0E2E50', 
        secondary: '#464d61',
        },
    },
    typography: {
        fontFamily: ['Montserrat', 'Ubuntu'].join(','),
    },
});

export default theme;
