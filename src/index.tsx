// imports ================================================== //
import { createRoot } from 'react-dom/client';
import App from './app/index';
import {
    ConfigProvider,
    AdaptivityProvider
} from "@vkontakte/vkui";

// constants ================================================ //
const RootElement = document.getElementById("root")!;

// main ===================================================== //
const root = createRoot(RootElement);
root.render(
    <ConfigProvider appearance='light'>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>
);