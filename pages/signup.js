// pages/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async(e) => {
        e.preventDefault();

        // Signup logic (e.g., Firebase, etc.)
        if (name && email && password) {
            alert('Account created successfully');
            router.push('/login');
        } else {
            alert('Please fill in all fields');
        }
    };

    return ( <
        div >
        <
        h1 > Signup < /h1> <
        form onSubmit = { handleSignup } >
        <
        input type = "text"
        placeholder = "Full Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        required /
        >
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
        button type = "submit" > Create Account < /button> <
        /form> <
        /div>
    );
};

export default Signup;