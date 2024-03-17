// imports =================================================== //
import { Component } from 'react';
import type {
    ErrorBoundaryProps,
    ErrorBoundaryState
} from "./types/index";

// main ====================================================== //
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {

        const { hasError } = this.state;
        
        if (hasError) {
            return (<p>{"К сожалению, возникли неполадки :("}</p>)
        } else {
            return this.props.children;
        }

    }

}

// exports ================================================== //
export default ErrorBoundary;