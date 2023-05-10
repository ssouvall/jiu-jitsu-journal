import { Tag } from 'antd';
import { feelingsColorIndex } from '../../data/selectData';

export const postListColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
        title: 'Techniques Learned',
        dataIndex: 'techniques',
        key: 'techniques',
    },
    {
      title: 'How It Went',
      dataIndex: 'howItWent',
      key: 'howItWent',
      render: (_, record) => (
        record.howItWent.map((hiw) => (
            <Tag 
            color={
                feelingsColorIndex[hiw] ?? 'default'
            }
            >
                {hiw}
            </Tag>
        ))
      )
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
  ];