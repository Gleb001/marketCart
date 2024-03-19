// imports =================================================== //
import { Component } from 'react';
import styles from "./ui/styles.module.css";
import type {
    ErrorBoundaryProps,
    ErrorBoundaryState
} from "./types/index";
import { Icon28SadFaceOutline } from "@vkontakte/icons";
import { Group, Title } from "@vkontakte/vkui";

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
            return (
                <div className={styles.error_message}>
                    <Icon28SadFaceOutline width={35} height={35} />
                    <Title level="1">
                        К сожалению возникли неполадки
                    </Title>
                </div>
            );
        } else {
            return this.props.children;
        }

    }

}

// exports ================================================== //
export default ErrorBoundary;