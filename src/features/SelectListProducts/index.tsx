// imports =================================================== //
import { Button } from '@vkontakte/vkui';
import { Icon24CheckSquareOutline, Icon24CheckBoxOff } from "@vkontakte/icons";
import type { SelectListItemsComponent } from './types/index.d.ts';
import styles from "@shared/ui/textButton.module.css";
import { useStore } from '@shared/store/store';
import getSelectDataCartItems from './helpers/getSelectDataCartItems';
import { observer } from 'mobx-react-lite';

// main ====================================================== //
const SelectListItems: SelectListItemsComponent = () => {

    const { cartItemsStore, orderStore } = useStore();
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
            before={isSelect ? <Icon24CheckSquareOutline /> : <Icon24CheckBoxOff />}
            onClick={handleClick}
        >
            <span className={styles.textButton}>
                {isSelect ? "Выделить все" : "Снять выделение"}
            </span>
        </Button>
    );

};

// exports ================================================== //
export default observer(SelectListItems);