// imports =================================================== //
import type { AppComponent } from './types/index.d.ts';
import "@vkontakte/vkui/dist/cssm/styles/themes.css";
import { AppRoot, Spinner, SplitLayout } from "@vkontakte/vkui";
import ErrorBoundary from '@shared/components/ErrorBoundary';
import Order from '@widgets/Order/index';
import Cart from '@widgets/Cart/index';
import { Suspense } from 'react';

// main ====================================================== //
const App: AppComponent = () => {

    return (
        <AppRoot mode="full">
            <ErrorBoundary>
                <SplitLayout>
                    <Suspense fallback={<Spinner />}>
                        <Cart />
                        <Order />
                    </Suspense>
                </SplitLayout>
            </ErrorBoundary>
        </AppRoot>
    );

}

// exports ================================================== //
export default App;