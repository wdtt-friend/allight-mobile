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
                    color: '#fff',
                    padding: '10px 16px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#C8A792',
                    },
                },
                text: {
                    color: '#000',
                    fontSize: '14px',
                    borderRadius: '6px',
                    textTransform: 'none',
                },
                startIcon: {
                    marginRight: 0,
                    marginLeft: 0,
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
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    maxWidth: '600px',
                    margin: '0 auto',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    overflow: 'hidden',
                    position: 'relative',
                    width: 'auto',
                    height: '100%',
                    minHeight: '100%',
                    maxWidth: '600px',
                    borderRadius: '12px 12px 0 0',
                    boxShadow: 'none',
                    padding: '24px 16px 16px',
                    backgroundColor: '#fff',
                },
                root: {
                    '&.bottomSheet': {
                        position: 'fixed',
                        bottom: '0',
                        left: '0',
                        top: 'auto',
                        width: '100%',
                        maxWidth: '600px',
                        minWidth: '320px',
                        margin: '0 auto',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                },
            },
        },
    },
});

export default theme;