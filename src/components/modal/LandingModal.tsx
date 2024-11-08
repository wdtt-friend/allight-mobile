import { useState } from "react";
import { Dialog, Box, Button, Typography } from "@mui/material";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./LandingModal.module.scss";

const LandingModal = () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            transitionDuration={0}
            fullScreen
        >
            <Box className={styles.dialogBody}>
                {/* TODO: Swiper Start */}
                <Box className={styles.carousel}>
                    <Box className={styles.carouselImg}>
                        슬라이드 이미지다.
                    </Box>
                    <Box className={styles.carouselText}>
                        <Typography variant="h3" className={styles.title}>
                            슬라이드 타이틀이다.
                        </Typography>
                        <Typography className={styles.description}>
                            슬라이드 설명이다.<br/>
                            슬라이드 설명이야.
                        </Typography>
                    </Box>
                </Box>
                {/* TODO: Swiper End */}
            </Box>
            <Box className={styles.dialogFooter}>
                <Button className={styles.btnGoHome} variant="contained" onClick={handleClose}>
                    Get Started
                </Button>
            </Box>
        </Dialog>
    );
}

export default LandingModal;
