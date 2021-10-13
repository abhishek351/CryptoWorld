import React from 'react'
import {Typography,Row,Statistic, Col} from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {useGetCryptosQuery} from '../services/cryptoapi'
import { Cryptocurrencies, News } from '../components'
import Loader from './Loader'
import { Avatar } from 'antd'

import icon from '../images/output-onlinepngtools.png'

const {Title}= Typography;

const Homepage = () => {
    const {data,isFetching}=useGetCryptosQuery(10);
    console.log(data);
    const globalStats=data?.data?.stats;
    if (isFetching) return <Loader/>;
  
    return (
       <>
       <center>

       <div className="container">
                <Avatar src={icon} size={90} />
               

               
                
            </div>
    

       <Typography.Title level={2} className="heading" >Global Crypto Status</Typography.Title>
       <Row>
           <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
           <Col span={12}><Statistic title="Total Exhanges" value={millify(globalStats.totalExchanges)}/></Col>
           <Col span={12}><Statistic title="Total Marketcap" value={millify(globalStats.totalMarketCap)}/></Col>
           <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
           <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
       </Row>
       </center>
       <div className="home-heading-container">
           <Title level={2}  className="home-title" >Top 10 CryptoCurrencies in the World</Title >
           <Title  level={3} className="show-more"><Link to="./Cryptocurrencies">Show More</Link></Title >

       </div>
       <Cryptocurrencies simplified  />
       <div className="home-heading-container">
           <Title  level={2}  className="home-title" >Latest Crypto News</Title >
           <Title  level={3} className="show-more"><Link to="./News">Show More</Link></Title >

       </div>
       <News simplified/>


      
       </>
    )
}

export default Homepage
