// imports ================================================== //
import type { Order } from "@shared/types/order";

// types ==================================================== //
type postOrder = (data: Order) => Promise<{ status: "success" | "error" }>

// main ===================================================== //
const postOrder: postOrder = (data) => {

    return new Promise((resolve) => {
        setTimeout(
            () => { resolve({ status: "success" }) },
            1000
        );
    });

};

// exports ================================================= //
export default postOrder;