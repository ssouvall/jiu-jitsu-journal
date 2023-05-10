import React, { useState } from 'react';
import { Layout } from 'antd';
import PostForm from './addPost/PostForm';
import PostList from './postList/PostList';
import AppHeader from './ui/AppHeader';

export default function Journal() {
    const { Content, Footer } = Layout;
    const [entries, setEntries] = useState([]);
    return (
        <>
            <Layout>
                <AppHeader />
                <Content>
                    <PostForm entries={entries} setEntries={setEntries} />
                    <PostList entries={entries} />
                </Content>
                <Footer/>
            </Layout>
        </>
    )
};