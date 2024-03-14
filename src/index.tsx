// imports ================================================== //
import { createRoot } from 'react-dom/client';
import App from './app/index';

// constants ================================================ //
const RootElement = document.getElementById("root")!;

// main ===================================================== //
const root = createRoot(RootElement);
root.render(<App />);