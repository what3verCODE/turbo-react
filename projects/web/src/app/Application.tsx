import Providers from '~app/providers/providers'
import { RouterProvider } from '@tanstack/react-router'
import router from '~app/router'

function Application() {
    return (
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    )
}

export default Application
