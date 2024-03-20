// imports =================================================== //
import {
    useAdaptivityConditionalRender,
    SplitCol,
    FixedLayout,
    Separator
} from '@vkontakte/vkui';
import OrderForm from '@entities/OrderForm';
import type { OrderComponent } from './types/index.d.ts';

// main ====================================================== //
const Order: OrderComponent = () => {

    const { viewWidth } = useAdaptivityConditionalRender();

    return (
        <>
            {
                viewWidth.tabletPlus &&
                <SplitCol
                    fixed
                    width={"25%"}
                    className={viewWidth.tabletPlus.className}
                >
                    <OrderForm />
                </SplitCol>
            }
            {
                viewWidth.tabletMinus &&
                <FixedLayout
                    filled
                    vertical='bottom'
                    className={viewWidth.tabletMinus.className}
                >
                    <Separator wide />
                    <OrderForm />
                </FixedLayout>
            }
        </>
    );

};

// exports ================================================== //
export default Order;