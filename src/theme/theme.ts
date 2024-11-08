import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        fontWeightRegular: 400,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#D8B59F',
                    padding: '10px 16px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#C8A792',
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    maxWidth: '600px',
                    margin: '0 auto',
                    '& .MuiPaper-root': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                backdrop: {
                    maxWidth: '600px',
                    margin: '0 auto',
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    maxWidth: '600px',
                    margin: '0 auto',
                },
            },
        },
    },
});

export default theme;