import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./GreetingModal.module.scss";
import FullLayerModal from "../../components/common/modal/FullLayerModal";

const GreetingModal = () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);

    return (
        <FullLayerModal
            open={open}
            onClose={handleClose}
        >
            <Box className={styles.dialogBody}>
                <Box className={styles.carousel}>
                    <Box className={styles.carouselImg}>슬라이드 이미지다.</Box>
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
            </Box>
            <Box className={styles.dialogFooter}>
                <Button className={styles.btnGoHome} variant="contained" onClick={handleClose}>
                    Get Started
                </Button>
            </Box>
        </FullLayerModal>
    );
};

export default GreetingModal;
