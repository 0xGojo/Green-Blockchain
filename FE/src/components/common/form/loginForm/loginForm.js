
import React from 'react';
import 'antd/dist/antd.css';
import './loginForm.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            iconLoading: false,
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ iconLoading: true });
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { username, password } = values;
                this.props.onAuthHandler(username, password);
            } else {

            }
            setTimeout(() => {
                this.timeOut = this.setState({ iconLoading: false })
            }, 3000)
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            size="large"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            size="large"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot text-primary-0" href="">
                        Forgot password
                    </a>
                    
                    <Button
                        type="primary"
                        loading={this.state.iconLoading}
                        onClick={this.handleSubmit}
                        className="login-form-button btn-primary-0"
                        size="large"
                    >
                        Log in
                    </Button>
                    Or <a href="" className="text-primary-0">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedLoginForm;
