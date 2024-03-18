// imports =================================================== //
import {
    SplitCol,
    Panel,
} from '@vkontakte/vkui';
import type { CartComponent } from './types';
import HeaderCart from '@entities/HeaderCart';
import ListCartItems from '@entities/ListCartItems';
import { observer } from 'mobx-react-lite';

// main ====================================================== //
const Cart: CartComponent = () => {

    return (
        <SplitCol width={"75%"}>
            <Panel>
                <HeaderCart />
                <ListCartItems />
            </Panel>
        </SplitCol>
    );

};

// exports ================================================== //
export default Cart;