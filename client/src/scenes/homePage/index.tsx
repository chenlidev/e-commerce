import { Box } from "@mui/system";
import MyCarousel from "../../components/MyCarousel";
import ProductList from "../../components/ProductList";

const HomePage = () => {

    return (
        <Box>
            <MyCarousel/>
            <ProductList/>
        </Box>
    )
}

export default HomePage;