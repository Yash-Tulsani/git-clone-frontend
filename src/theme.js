import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#FFFFFF',
        },
        secondary: {
        main: '#F58F3C',
        },
        text: {
        primary: '#0E2E50',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
});

export default theme;
