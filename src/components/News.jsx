import React from 'react'
import {Typography,Row,Col,Card} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery} from '../services/newsapi'
import Loader from './Loader';
const {Text,Title}=Typography;



const  News = ({simplified}) => {
    const {data:cryptoNews,isFetching}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count : simplified ? 6: 10})
    

    if (isFetching) return <Loader/>
    return (
        <>
      
        <Row gutter={[24,24]}>
           
            {cryptoNews.value.map((news,i)=>(
                <Col sx={24} sm={12} lg={8} key={i}>
                    <Card hoverable  className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl} alt="news"></img>
                            </div>
                            <p>
                                {news.description>100?`${news.description.substring(0,100)}..`:news.description
                                }
                            </p>
                            <div className="provider-container">
                                <Text>{moment(news.datepublished).startOf('ss').fromNow()}</Text>
                            </div>

                        </a>
                    </Card>



                </Col>


            ))}

        </Row>
       
</>
    )
}
export default News
