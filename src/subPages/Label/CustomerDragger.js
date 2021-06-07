import React from 'react'
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './CustomerDragger.css'
const { Dragger } = Upload;

function CustomerDragger() {

    const props = {
        name: 'file',
        multiple: false, //是否支持多文件
        action: '这里设定后端接受文件的地址',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
            </p>
            </Dragger>
            <div className="ButtonGroup">
            <Button type="primary" shape="round">开始</Button>
            <Button type="primary" shape="round" danger>结束</Button>
            <Button type="dashed" shape="round">添加选项</Button>
            </div>
        </>
    )
}

export default CustomerDragger
