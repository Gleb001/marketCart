// imports =================================================== //
import { Button } from '@vkontakte/vkui';
import { Icon24CheckSquareOutline, Icon24CheckBoxOff } from "@vkontakte/icons";
import type { SelectListItemsComponent } from './types/index.d.ts';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import styles from "@shared/ui/textButton.module.css";
import { useStore } from '@shared/store/store';

// main ====================================================== //
const SelectListItems: SelectListItemsComponent = (props) => {

    const { cartItemsStore } = useStore();
    const { isSelectAll } = props;

    function handleClick() {
        cartItemsStore.setProps(
            "all",
            { isSelect: isSelectAll }
        );
    }

    return (
        <Button
            size="l"
            mode="secondary"
            before={isSelectAll ? <Icon24CheckSquareOutline /> : <Icon24CheckBoxOff />}
            onClick={action(handleClick)}
        >
            <span className={styles.textButton}>
                {isSelectAll ? "Выделить все" : "Снять выделение"}
            </span>
        </Button>
    );

}

// exports ================================================== //
export default observer(SelectListItems);