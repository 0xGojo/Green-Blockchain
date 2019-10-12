import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { Alert, Button } from 'react-bootstrap';
import './alert.css';

class AlertComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShowAlert: false,
        }
    }
    render() {
        const { t } = this.props;
        const { isShowAlert } = this.state;
        return (
            <div>
                <Alert show={isShowAlert} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                        fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => this.setState({isShowAlert: false})} variant="outline-success">
                        Close me ya'll!
                    </Button>
                    </div>
                </Alert>

                {!isShowAlert && <Button onClick={() => this.setState({isShowAlert: true})}>Show Alert</Button>}
            </div>
        )
    }
}

export default withNamespaces('common')(AlertComponent);