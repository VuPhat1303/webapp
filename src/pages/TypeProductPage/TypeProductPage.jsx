import React from 'react'
import { Row, Col, Pagination } from 'antd'
import NavBarComponent from '../../components/NavbarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperProducts } from './style'
const TypeProductPage = () => {
  return (
    <div style={{ background: 'efefef' }}>
      <Row style={{ padding: '0 120px ', background: '#efefef', flexWrap: 'nowrap', paddingTop: '10px' }}>
        <Col span={4} style={{ background: '#fff', marginRight: '10px', padding: '10px', borderRadius: '6px' }} >
          <NavBarComponent />
        </Col>
        <WrapperProducts span={20}    >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts >
      </Row>
      <Pagination defaultCurrent={2} total={100} onChange={onchange} style={{ textAlign: 'center', marginTop: '10px' }} />
    </div>
  )
}

export default TypeProductPage