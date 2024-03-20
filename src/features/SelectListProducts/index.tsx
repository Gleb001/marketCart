// imports =================================================== //
import { Button, useAdaptivityConditionalRender } from '@vkontakte/vkui';
import { Icon24CheckSquareOutline, Icon24CheckBoxOff } from "@vkontakte/icons";
import type { SelectListItemsComponent } from './types/index.d.ts';
import { useStore } from '@shared/store/store';
import getSelectDataCartItems from './helpers/getSelectDataCartItems';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

// main ====================================================== //
const SelectListItems: SelectListItemsComponent = () => {

    const { cartItemsStore, orderStore } = useStore();
    const { viewWidth } = useAdaptivityConditionalRender();
    const [idCartItems, isSelect] = getSelectDataCartItems(
        Array.from(cartItemsStore.items!.keys()),
        orderStore.idCartItems
    );

    function handleClick() {
        if (isSelect) {
            orderStore.idCartItems.push(...idCartItems);
        } else {
            orderStore.idCartItems = [];
        }
        cartItemsStore.update(idCartItems, { isSelect });
    }

    return (
        <Button
            size="l"
            mode="secondary"
            onClick={action(handleClick)}
        >
            <div style={{ display: "flex", gap: "10px" }}>
                {
                    isSelect ?
                        <Icon24CheckSquareOutline /> :
                        <Icon24CheckBoxOff />
                }
                {
                    viewWidth.tabletPlus &&
                    <span className={viewWidth.tabletPlus.className}>
                        {
                            isSelect ?
                                "Выделить все" :
                                "Снять выделение"
                        }
                    </span>
                }
            </div>
        </Button>
    );

};

// exports ================================================== //
export default observer(SelectListItems);