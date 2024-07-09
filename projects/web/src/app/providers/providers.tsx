import { Provider } from 'react-redux'
import store from '~app/store'
import { IntlProvider } from 'react-intl'

interface IProviders {
    /** Content that will be wrapped by providers. */
    readonly children: JSX.Element
}

function Providers({ children }: IProviders) {
    // return (
    //     <ErrorBoundary FallbackComponent={Fallback}>
    //         <Provider store={store}>
    //             <PersistGate loading={null} persistor={persistor}>
    //                 <ThemeProvider>{children}</ThemeProvider>
    //             </PersistGate>
    //         </Provider>
    //     </ErrorBoundary>
    // )

    // ErrorBoundary - useful, should be added
    // ThemeProvider - depends on antd integration

    return (
        <Provider store={store}>
            <IntlProvider locale="">{children}</IntlProvider>
        </Provider>
    )
}

export default Providers
