import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useGlobalState } from '../../globalState'
const { Dragger } = Upload;

function CustomerDragger() {
    const [, updateState,] = useGlobalState()
    const props = {
        name: 'file',
        multiple: false, //是否支持多文件
        action: '这里设定后端接受文件的地址',
        beforeUpload: file => {
            console.log(file.type)
            if (!file.type.startsWith('video/')) {
                message.error(`${file.name} is not a video file`);
            }
            return file.type.startsWith('video/') ? true : Upload.LIST_IGNORE;
        }, // 上传前验证文件格式是否为视频文件
        onChange(info) {
            // console.log(info)
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
                updateState('videoFile', info.file)
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }, // 上传后现实是否上传成功
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        }, // 移除上传文件的回调
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
        </>
    )
}

export default CustomerDragger
