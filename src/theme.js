import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#FFFFFF',
        },
        secondary: {
        main: '#F58F3C',
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
