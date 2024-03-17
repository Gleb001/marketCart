// imports ================================================== //
import useAsync from "@shared/hooks/useAsync";
import type { ProductData } from "@shared/types/product";

// types ==================================================== //
type fetchProductsData = () => Promise<{ products: ProductData[] }>

// main ===================================================== //
const fetchProductsData: fetchProductsData = () => (
    fetch("https://dummyjson.com/carts/1")
        .then((response) => response.json())
);
const getProductsData = useAsync(fetchProductsData);

// exports ================================================= //
export default getProductsData;