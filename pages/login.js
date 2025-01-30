// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();

        // Authentication logic (e.g., Firebase, etc.)
        if (email === 'user@example.com' && password === 'password') {
            router.push('/dashboard');
        } else {
            alert('Invalid login credentials');
        }
    };

    return ( <
        div >
        <
        h1 > Login < /h1> <
        form onSubmit = { handleLogin } >
        <
        input type = "email"
        placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        required /
        >
        <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        required /
        >
        <
        button type = "submit" > Login < /button> <
        /form> <
        /div>
    );
};

export default Login;