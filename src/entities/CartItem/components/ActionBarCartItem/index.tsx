// imports =================================================== //
import { ButtonGroup } from '@vkontakte/vkui';
import type { ActionBarCartItemComponent } from './types/index.d.ts';
import ChangeBuyCounterCartItem from '@features/ChangeBuyCounterCartItem';
import RemoveCartItem from '@features/RemoveCartItem';

// main ====================================================== //
const ActionBarCartItem: ActionBarCartItemComponent = (props) => {

    const { id } = props;

    return (
        <ButtonGroup mode="horizontal">
            <ChangeBuyCounterCartItem id={id} />
            <RemoveCartItem id={id} />
        </ButtonGroup>
    );

}

// exports ================================================== //
export default ActionBarCartItem;