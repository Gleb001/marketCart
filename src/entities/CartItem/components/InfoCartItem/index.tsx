// imports =================================================== //
import styles from './ui/styles.module.css';
import type { InfoCartItemComponent } from './types/index.d.ts';
import { Paragraph, Title } from '@vkontakte/vkui';

// main ====================================================== //
const InfoCartItem: InfoCartItemComponent = (props) => {

    const { title, description, buyQuantities, price } = props;

    return (
        <div className={styles.info_cart_item}>
            <div>
                <Title className={styles.title_cart_item} level="3">
                    {title}
                </Title>
                <Paragraph className={styles.description_cart_item}>
                    {description}
                </Paragraph>
            </div>
            <Paragraph weight='1'>
                {buyQuantities * price} руб.
            </Paragraph>
        </div>
    );

};

// exports ================================================== //
export default InfoCartItem;