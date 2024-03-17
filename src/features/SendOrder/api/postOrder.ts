// imports ================================================== //
import useAsync from "@shared/hooks/useAsync";

// types ==================================================== //
type postOrderData = (data: {}) => Promise<{ status: "success" | "error" }>

// main ===================================================== //
const postOrderData: postOrderData = (data) => {

    return new Promise((resolve) => {
        setTimeout(
            () => { resolve({ status: "error" }) },
            1000
        );
    });

};

// exports ================================================= //
export default postOrderData;