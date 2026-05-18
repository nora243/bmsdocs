import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: {
    template: '%s – BMS Docs',
    default: 'BMS Docs',
  },
  description: 'Tài liệu hướng dẫn sử dụng BMS – Business Management System',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const navbar = <Navbar logo={<strong>BMS Docs</strong>} />
  const footer = <Footer>© {new Date().getFullYear()} BMS. All rights reserved.</Footer>

  return (
    <html lang="vi" dir="ltr" suppressHydrationWarning>
      <Head>{}</Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/nora243/bmsdocs"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
