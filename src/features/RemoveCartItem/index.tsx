// imports =================================================== //
import type { RemoveCartItemComponent } from './types/index.d.ts';
import { Button, useAdaptivityConditionalRender } from '@vkontakte/vkui';
import { Icon20TrashSimpleOutline } from "@vkontakte/icons";
import { useStore } from '@shared/store/store';
import { MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

// main ====================================================== //
const RemoveCartItem: RemoveCartItemComponent = (props) => {

    const { id, mode } = props;
    const { cartItemsStore, orderStore } = useStore();
    const { viewWidth } = useAdaptivityConditionalRender();

    function handleClick(event: MouseEvent) {
        event.stopPropagation();
        if (mode === "all") {
            cartItemsStore.remove(orderStore.idCartItems);
            orderStore.idCartItems = [];
        } else if (id) {
            cartItemsStore.remove([id]);
            orderStore.idCartItems = orderStore.idCartItems.filter(
                idCartItem => idCartItem !== id
            );
        }
    }

    return (
        <Button
            size="l"
            mode="secondary"
            onClick={action(handleClick)}
        >
            <div style={{ display: "flex", gap: "10px" }}>
                <Icon20TrashSimpleOutline />
                {
                    viewWidth.tabletPlus &&
                    <span className={viewWidth.tabletPlus.className}>
                        Удалить
                    </span>
                }
            </div>
        </Button>
    );

}

// exports ================================================== //
export default observer(RemoveCartItem);