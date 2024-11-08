import { Box, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <>
            <Box>
                <Typography variant="h1">404 Not Found</Typography>
                <Typography>페이지를 찾을 수 없습니다.</Typography>
            </Box>
        </>
    );
}

export default NotFound;