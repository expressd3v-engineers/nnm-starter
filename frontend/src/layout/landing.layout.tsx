import React, {FC} from 'react';
import {Col, Layout, Row } from 'antd';
import Container from "../components/style/paper/container/index.style";
import HeaderWrap from '../components/style/paper/header/wrap.style';
import Logo from "../assets/logo";
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

interface LayoutProps {
    children?: any;
}

const LandingLayout: FC<LayoutProps> = ({children}) => {

    return (
        <Layout>
            <Header>
                <HeaderWrap>
                    <Container>
                        <Row
                            align='middle'
                            justify='space-between'
                        >
                            <Col>
                                <Row align='middle' gutter={40}>
                                    <Col>
                                        <Link href='/'>
                                            <a>
                                                <Logo color='#000' width={70} height={35}/>
                                            </a>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Row gutter={20}>
                                            <Col>
                                                <Link href={`/blog`}>
                                                    <a>Blog</a>
                                                </Link>
                                            </Col>
                                            <Col>
                                                <Link href={`/blog`}>
                                                    <a>Method</a>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                Logo
                            </Col>
                        </Row>
                    </Container>
                </HeaderWrap>
            </Header>
            <Content>{children}</Content>
            <Footer>
                <Container>
                    <Row>
                        <Col>
                            <Link href='/'>
                                <a>
                                    <Logo color='#ffffff' width={50} height={25}/>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        </Layout>
    );
};

export default LandingLayout;