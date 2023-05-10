import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import generatePicker from 'antd/es/date-picker/generatePicker';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import { howDidYouFeelOptions } from '../../data/selectData';
import { format } from 'date-fns';

export default function PostForm({entries, setEntries}) {
    const DatePicker = generatePicker(dateFnsGenerateConfig);
    const { TextArea } = Input;
    const handleSubmit = (values) => {
        values.date = format(new Date(values.date), 'MM/dd/yyyy')
        const newEntry = {
            key: entries.length + 1,
            date: values.date,
            techniques: values.techniques,
            howItWent: values.howItWent,
            comments: values.comments
        }
        const newEntries = [...entries];
        newEntries.push(newEntry);
        setEntries(newEntries);
    }

    return (
        <>
            <Form 
                onFinish={handleSubmit} 
                autoComplete='off'
                layout='vertical'
                style={{  marginTop: '15px', marginLeft: '25%', width: '50%', marginRight: '25%' }}
            >
                <Form.Item label="Date" name="date">
                    <DatePicker 
                        placeholder='Enter training date'
                    />
                </Form.Item>
                <Form.Item label="Techniques Learned" name='techniques'>
                    <TextArea 
                        rows={3}
                        placeholder='List techniques learned'
                    />
                </Form.Item>
                <Form.Item label="How Did It Go? (Select all that Apply)" name='howItWent'>
                    <Select mode='multiple' allowClear>
                        {howDidYouFeelOptions.map((option) => (
                            <Select.Option title={option} key={option} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Comments" name='comments'>
                    <TextArea 
                        rows={3}
                        placeholder='Comments'
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};