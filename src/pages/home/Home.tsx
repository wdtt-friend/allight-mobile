import { Box, Typography } from "@mui/material";
import GreetingModal from "../../components/modal/GreetingModal.tsx";

const Home = () => {
    return (
        <>
            <Box>
                <Typography variant="h1">홈이다.</Typography>
                <Typography>Allight에 오신 것을 환영합니다.</Typography>
            </Box>

            <GreetingModal />
        </>
    )
}

export default Home;