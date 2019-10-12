import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { Toast } from 'react-bootstrap';
import './toast.css';

class ToastComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { t, show, messages, title, onCloseToast } = this.props;
        return (
            <div 
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                    minHeight: '200px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                >
                    <Toast onClose={onCloseToast} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">{title}</strong>
                        </Toast.Header>
                        <Toast.Body>{messages}</Toast.Body>
                    </Toast>
                </div>
            </div>
        )
    }
}

export default withNamespaces('common')(ToastComponent);