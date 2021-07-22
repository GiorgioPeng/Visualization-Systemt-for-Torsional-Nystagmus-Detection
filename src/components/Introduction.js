import React from 'react'
import { Drawer, Button } from 'antd';
function Introduction() {
    const [visible, setVisible] = React.useState(true);
    const onClose = () => {
        setVisible(false);
    };
    return (
        <Drawer
            // title="基于人工智能的头晕/眩晕辅助智能诊断系统"
            placement="top"
            closable={false}
            onClose={onClose}
            visible={visible}
            height='95vh'
            style={{
                overflow: 'hidden',
            }}
        >
            <div style={{
                display: 'flex',
                height: '75vh',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '80px',
                fontWeight: 'bolder',
                textAlign: 'center'
            }}>
                基于人工智能的头晕/眩晕辅助智能诊断系统
            </div>
            <div style={{
                height: '15vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <p>2021©️北京交通大学</p>
                <p>版本号：1.0.0</p>
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
