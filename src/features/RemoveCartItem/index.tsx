// imports =================================================== //
import type { RemoveCartItemComponent } from './types/index.d.ts';
import styles from "@shared/ui/textButton.module.css";
import { Button } from '@vkontakte/vkui';
import { Icon24TrashSimpleOutline } from "@vkontakte/icons";
import { observer } from 'mobx-react-lite';
import { useStore } from '@shared/store/store';
import { action } from 'mobx';
import { MouseEvent } from 'react';

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
            before={<Icon24TrashSimpleOutline />}
            onClick={action(handleClick)}
        >
            <span className={styles.textButton}>
                Удалить
            </span>
        </Button>
    );

}

// exports ================================================== //
export default observer(RemoveCartItem);