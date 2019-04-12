import React from 'react'

import { Card, Icon } from 'antd';

import './index.sass'


export default function () {
    return (
        <div className='solarSystem'>
            <Card
                style={{ width: 300 }}
                cover={<img alt="mercury" src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2015/whatsimporta.jpg" />}
                actions={[<Icon type="plus-circle" />]}
                title="Mercury"
            />
            <Card
                style={{ width: 300 }}
                cover={<img alt="venus" src="https://cosmos-images1.imgix.net/file/spina/photo/14590/180403-venus-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835" />}
                actions={[<Icon type="plus-circle" />]}
                title="Venus"
            />
            <Card
                style={{ width: 300 }}
                cover={<img alt="earth" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Nasa_blue_marble.jpg" />}
                actions={[<Icon type="plus-circle" />]}
                title="Earth"
            />
            <Card
                style={{ width: 300 }}
                cover={<img alt="mars" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg" />}
                actions={[<Icon type="plus-circle" />]}
                title="Mars"
            />
            <Card
                style={{ width: 300 }}
                cover={<img alt="jupiter" src="https://space-facts.com/wp-content/uploads/jupiter.png" />}
                actions={[<Icon type="plus-circle" />]}
                title="Jupiter"
            />
            <Card
                style={{ width: 300 }}
                cover={<img alt="saturn" src="http://www.seasky.org/solar-system/assets/images/saturn02_sk12.jpg" />}
                actions={[<Icon type="plus-circle" />]}
                title="Saturn"
            />
            <Card
                style={{ width: 300 }}
                cover={<img alt="uranus" src="http://www.seasky.org/solar-system/assets/images/uranus01_sk12.jpg" />}
                actions={[<Icon type="plus-circle" />]}
                title="Uranus"
            />
            <Card
                style={{ width: 300 }}
                cover={<img alt="neptune" src="https://cdn.mos.cms.futurecdn.net/eNTJrysq4A6DqXncBtsRrB-320-80.jpg" />}
                actions={[<Icon type="plus-circle" />]}
                title="Neptune"
            />
        </div>
    )
}