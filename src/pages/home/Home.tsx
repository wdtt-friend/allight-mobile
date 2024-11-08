import LandingModal from "../../components/modal/LandingModal.tsx";
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <>
            <Box>
                <Typography variant="h1">홈이다.</Typography>
                <Typography>Allight에 오신 것을 환영합니다.</Typography>
            </Box>

            <LandingModal/>
        </>
    )
}

export default Home;