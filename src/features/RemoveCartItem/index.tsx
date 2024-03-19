// imports =================================================== //
import type { RemoveCartItemComponent } from './types/index.d.ts';
import styles from "@shared/ui/textButton.module.css";
import { Button } from '@vkontakte/vkui';
import { Icon20TrashSimpleOutline } from "@vkontakte/icons";
import { useStore } from '@shared/store/store';
import { MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';

// main ====================================================== //
const RemoveCartItem: RemoveCartItemComponent = (props) => {

    const { id, mode } = props;
    const { cartItemsStore, orderStore } = useStore();

    function handleClick(event: MouseEvent) {
        event.stopPropagation();
        if (mode === "all") {
            cartItemsStore.remove(orderStore.idCartItems);
            orderStore.idCartItems = [];
        } else if (id) {
            cartItemsStore.remove([id]);
            orderStore.idCartItems = orderStore.idCartItems.filter(idCartItem => idCartItem !== id);
        }
    }

    return (
        <Button
            size="l"
            mode="secondary"
            before={<Icon20TrashSimpleOutline />}
            onClick={handleClick}
        >
            <span className={styles.textButton}>
                Удалить
            </span>
        </Button>
    );

}

// exports ================================================== //
export default observer(RemoveCartItem);