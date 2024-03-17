// imports =================================================== //
import { Button, Spinner } from '@vkontakte/vkui';
import { useState } from 'react';
import postOrderData from './api/postOrder';
import type { SendOrderComponent } from './types';
import { observer } from 'mobx-react-lite';

// main ====================================================== //
const SendOrder: SendOrderComponent = (props) => {

    let [status, setStatus] = useState<"pending" | "waiting">("waiting");
    const { showErrorMessage } = props;
    const isLoading = (status === "pending");

    async function handleClick() {
        setStatus("pending");
        const { status } = await postOrderData({});
        if (status === "success") {
            // ...
            // Переводим пользователя на
            // страницу оформления заказа
            // ...
        } else {
            if (showErrorMessage) {
                showErrorMessage();
            }
        }
        setStatus("waiting");
    }

    return (
        <Button
            loading={isLoading}
            onClick={handleClick}
        >
            {!isLoading && "Перейти к оформлению"}
        </Button>
    );

}

// exports ================================================== //
export default observer(SendOrder);