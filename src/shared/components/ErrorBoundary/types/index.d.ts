// imports ================================================== //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
interface ErrorBoundaryProps {
    children: ReactNode | ReactNode[]
}
interface ErrorBoundaryState {
    hasError: boolean
}

// exports ================================================== //
export type { ErrorBoundaryProps, ErrorBoundaryState };