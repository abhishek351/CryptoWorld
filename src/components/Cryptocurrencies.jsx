import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoapi'
import Loader from './Loader'


import { Card, Row, Col, Input } from 'antd'

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
    
    const [searchCoin, setSearch] = useState('');

    useEffect(() => {
        const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchCoin.toLowerCase()))

        setCryptos(filterData)
    }, [cryptoList, searchCoin])

    if (isFetching) return <Loader/>
    return (
        <>
        
        
            <div className="search-crypto">
                <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col sx={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl}  alt=""/>}
                                hoverable>
                                <p>Price:{millify(currency.price)}</p>
                                <p>Market Cap:{millify(currency.marketCap)}</p>
                                <p>Daily Change:{millify(currency.change)}</p>
                            </Card>


                        </Link>

                    </Col>


                ))}
            </Row>

        </>
    )
}

export default Cryptocurrencies
