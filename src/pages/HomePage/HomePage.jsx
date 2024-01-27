import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperType } from '../../components/TypeProduct/styled'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperButtonMore } from './style'

const HomePage = () => {
  const arr = ['TV', 'Tu lanh', 'Lap top']
  return (
    <>
      <div style={{ width: '1270px', margin: '0 auto' }} >
        <WrapperType>
          {arr.map((item => {
            return (

              <TypeProduct name={item} key={item} />
            )
          }))}
        </WrapperType>
        <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>

            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />


          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textbutton="xem thêm" type="outline" styleButton={{
                border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                width: '240px', height: '38px', borderRadius: '4px'
              }}

            />
          </div>
        </div>
      </div>
    </>

  )
}

export default HomePage