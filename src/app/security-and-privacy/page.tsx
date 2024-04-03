import { Metadata } from 'next'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Security } from '~/components/sections/legal/security'

export const metadata: Metadata = {
  title: 'Security and Privacy'
}

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="px-4">
        <Security />
      </div>
      <Footer />
    </>
  )
}

export default Privacy
