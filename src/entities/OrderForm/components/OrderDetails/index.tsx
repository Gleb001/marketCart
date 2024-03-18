// imports =================================================== //
import styles from './ui/styles.module.css';
import type { OrderDetailsComponent } from './types/index.d.ts';
import getNoun from './helpers/getNoun';

// main ====================================================== //
const OrderDetails: OrderDetailsComponent = (props) => {

    const { totalPrice, totalBuyQuantities } = props;

    const noun = getNoun(
        totalBuyQuantities,
        ["товар", "товара", "товаров"]
    );

    return (
        <div className={styles.order_details}>
            <span>Итого {totalBuyQuantities} {noun}:</span>
            <span>{totalPrice} руб.</span>
        </div>
    );

}

// exports ================================================== //
export default OrderDetails;