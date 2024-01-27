import React from 'react'
import { Col, Image, Rate, Row } from 'antd'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import imageProduct from '../../assets/images/test.webp'
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct, WrapperInputNumber, WrapperBtnQualityProduct } from './style'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const onChange = () => {

}

const ProductDetailsComponent = () => {
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px', height: '100%' }} >
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image src={imageProduct} alt='imageProduct' preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4} sty>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>

                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: '10px' }}>
                <WrapperStyleNameProduct>sach tham tu</WrapperStyleNameProduct>
                <div>
                    <Rate />
                    <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>5.000.000</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className='address'>Q1.tphcm</span> -
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>

                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ marginBottom: '10px' }}>Số lượng :</div>
                    <WrapperQualityProduct>


                        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} >
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                        <WrapperInputNumber onChange={onChange} defaultValue={1} size="small" />
                        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} >
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>

                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', aliggItems: 'center', gap: '12px' }}>
                    <div>
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px'
                            }}

                            textbutton={'Chọn mua'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                        {<div style={{ color: 'red' }}>San pham het hang</div>}
                    </div>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px'
                        }}
                        textbutton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent