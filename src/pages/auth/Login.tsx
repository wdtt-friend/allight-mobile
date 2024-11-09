import { Box, Typography, Button } from "@mui/material";
import BottomSheet from "../../components/common/bottom-sheet/BottomSheet.tsx";
import styles from "./Login.module.scss";
import { useState, useEffect } from "react";

const Login = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    const socialAuthList = [
        {
            name: 'Google',
            url: '/oauth2/authorization/google',
            iconUrl: '/icon/social-google.svg',
        },
        {
            name: 'Naver',
            url: '/oauth2/authorization/naver',
            iconUrl: '/icon/social-naver.svg',
        },
        {
            name: 'Kakao',
            url: '/oauth2/authorization/kakao',
            iconUrl: '/icon/social-kakao.svg',
        },
    ]

    return (
        <>
            <Box className={styles.loginBg}>
                <Box className={styles.imgWrap}>
                    <img
                        src="/images/login-bg.png"
                        alt="Login Background"
                    />
                </Box>
            </Box>

            <BottomSheet
                open={open}
                onClose={() => setOpen(false)}
                className={styles.loginBottomSheet}
            >
                <Box className={styles.textArea}>
                    <Typography variant="h3">
                        Login or sign up
                    </Typography>
                    <Typography>
                        Please select your preferred method<br/>
                        to continue setting up your account
                    </Typography>
                </Box>

                <Box className={styles.btnGroup}>
                    {socialAuthList.map(item => (
                        <Button
                            variant="text"
                            key={item.name}
                            href={item.url}
                            className={styles.btnAuth}
                            startIcon={
                                <span className={styles.btnIcon}>
                                    <img src={item.iconUrl} alt="Social Button Icon" />
                                </span>
                            }
                        >
                            <span className={styles.btnName}>{item.name}</span>
                        </Button>
                    ))}
                </Box>

                <Box className={styles.termsNotice}>
                    <Typography>
                        If you are creating a new account,<br/>
                        <Typography component="span">Terms & Conditions</Typography> and <Typography component="span">Privacy Policy</Typography> will apply.
                    </Typography>
                </Box>
            </BottomSheet>
        </>
    )
}

export default Login;