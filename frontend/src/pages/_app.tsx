import React, {ReactElement, ReactNode} from "react";
import type {NextPage} from "next";
import {AppProps} from "next/app";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import {ConnectedRouter} from "connected-next-router";

import {store} from "../redux/store";
import GlobalStyles from "../components/style";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App({Component, pageProps}: AppPropsWithLayout) {
    const theme = store.getState().theme;

    return(
        <Provider store={store}>
            <ConnectedRouter>
                <ThemeProvider theme={theme.settings}>
                    <GlobalStyles/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;