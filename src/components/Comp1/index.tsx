import styles from './index.module.scss'
import { Button, Space } from 'antd';
import { LogoutOutlined } from '@ant-design/icons'
function Comp1() {
  return(
    <div className={styles.box}>
      <p>这是一个组件</p>
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <LogoutOutlined />
      </Space>
    </div>
  )
}
export default Comp1