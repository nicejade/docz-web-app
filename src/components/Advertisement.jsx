import React from 'react'
import { Carousel } from 'element-react'

import '@styles/index.sass'

const advertItemList = [
  {
    path: '//click.dji.com/AAMD9H5ODH2wTVtxUWwxxw?pm=link&as=0004',
    image: '//u.djicdn.com/uploads/ad_image_file/file/1670/%E5%A4%A7%E7%96%86%E6%8E%A8%E5%B9%BF%E8%81%94%E7%9B%9Fbanner_970-250.jpg',
    alt: '“御”Mavic 2 - 全新 Hasselblad 镜头与你一同高瞻远瞩，以小见大'
  },
  {
    path: '//click.dji.com/AHT8n4-15xfguKCaOzzEPA?pm=link&as=0004',
    image: '//u.djicdn.com/uploads/ad_image_file/file/1234/970_250.jpg',
    alt: '特洛Tello-迷你无人机'
  },
  {
    path: '//click.dji.com/AHT8n4-15xfguKCaOzzEPA?pm=link&as=0004',
    image: '//u.djicdn.com/uploads/ad_image_file/file/1242/970_250.jpg',
    alt: '特洛Tello-益智编程无人机'
  },
  {
    path: '//click.dji.com/AHT8n4-15xfguKCaOzzEPA?pm=link&as=0004',
    image: '//u.djicdn.com/uploads/ad_image_file/file/992/970___250.jpg',
    alt: '大疆无人机-DJI "御" Mavic Air'
  }
]

const advertisementImg = {
  width: '100%'
}

export const Advertisement = ({ children, ...props }) => {
  return <Carousel indicatorPosition="outside">
    {
      advertItemList.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <a href={item.path} target="_blank" rel="noopener">
              <img style={advertisementImg} src={item.image} alt={item.alt}></img>
            </a>
          </Carousel.Item>
        )
      })
    }
  </Carousel>
}