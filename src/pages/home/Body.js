import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import backgroundImage from '../../assets/background/bg-img.jpg';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    // Perform any additional actions if needed
    // Then navigate to the new page
    navigate('/dashboard');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  
    // Log more details about the validation errors
    errorInfo.errorFields.forEach((field) => {
      console.log(`Field "${field.name}" has errors:`, field.errors);
    });
  };
  

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          filter: 'opacity(0.5)', // Set the opacity for the background image
        }}
      ></div>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 600,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '20px',
          borderRadius: '10px',
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Form fields go here */}
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Body;
