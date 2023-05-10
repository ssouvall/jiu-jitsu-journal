import React from 'react';
import { Table } from 'antd';
import { postListColumns } from '../addPost/tableProps';

export default function PostList({entries}) {
    return (
        <>
            <Table dataSource={entries} columns={postListColumns} />
        </>
    )
};