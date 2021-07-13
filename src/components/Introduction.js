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
                fontSize: '40px',
                height: '10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{
                display: 'flex',
                height: '85vh',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                fontSize: '25px',
                overflow: 'hidden'
            }}>
                <div>这里放流程图</div>
                <p>这里写系统介绍</p>
                <p>这里放置贡献者姓名</p>
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
