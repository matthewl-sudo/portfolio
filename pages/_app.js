import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import {
  ClerkProvider,

} from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  )
}
