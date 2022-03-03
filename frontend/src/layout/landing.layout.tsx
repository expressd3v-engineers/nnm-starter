import React, {FC} from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

interface LayoutProps {
    children?: any;
}

const LandingLayout: FC<LayoutProps> = ({children}) => {

    return (
        <Layout>
            <Header>Header</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default LandingLayout;