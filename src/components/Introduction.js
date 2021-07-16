import React from 'react'
import { Drawer, Button } from 'antd';
function Introduction() {

    const [visible, setVisible] = React.useState(true);
    const onClose = () => {
        setVisible(false);
    };
    return (
        <Drawer
            title="智能眼震检测系统"
            placement="top"
            closable={false}
            onClose={onClose}
            visible={visible}
            height='95vh'
            headerStyle={{
                fontSize: '100px',
                height: '40vh',
                fontweight:'bolder',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{
                display: 'flex',
                height: '45vh',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                fontSize: '25px',
                overflow: 'hidden'
            }}>
                <p>这里放置版权信息等</p>
                <Button
                    type="primary"
                    onClick={onClose}
                    size={'large'}
                >
                    开始使用
                </Button>
            </div>
        </Drawer>
    );
}

export default Introduction;
