// imports =================================================== //
import {
    SplitCol,
    Panel,
    FixedLayout,
    Spinner
} from '@vkontakte/vkui';
import type { CartComponent } from './types';
import HeaderCart from '@entities/HeaderCart';
import ListCartItems from '@entities/ListCartItems';
import { Suspense } from 'react';
import { observer } from 'mobx-react-lite';

// main ====================================================== //
const Cart: CartComponent = () => {

    return (
        <SplitCol width={"75%"}>
            <Panel>
                <FixedLayout vertical="top">
                    <HeaderCart />
                </FixedLayout>
                <Suspense fallback={<Spinner />}>
                    <ListCartItems />
                </Suspense>
            </Panel>
        </SplitCol>
    );

}

// exports ================================================== //
export default observer(Cart);