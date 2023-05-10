import React from 'react';
import { Layout } from 'antd';

export default function AppHeader() {
    const { Header } = Layout;
    return (
        <>
            <Header>
                <h3 style={{color: 'white'}}>Welcome to Jiu-Jitsu Journal</h3>
            </Header>
        </>
    )
}