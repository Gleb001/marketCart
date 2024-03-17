// imports =================================================== //
import type { AppComponent } from './types/index.d.ts';
import "@vkontakte/vkui/dist/cssm/styles/themes.css";
import { AppRoot, SplitLayout } from "@vkontakte/vkui";
import ErrorBoundary from '@shared/components/ErrorBoundary';
import Order from '@widgets/Order/index';
import Cart from '@widgets/Cart/index';

// main ====================================================== //
const App: AppComponent = () => {

    return (
        <AppRoot mode="full">
            <ErrorBoundary>
                <SplitLayout>
                    <Cart />
                    <Order />
                </SplitLayout>
            </ErrorBoundary>
        </AppRoot>
    );

}

// exports ================================================== //
export default App;