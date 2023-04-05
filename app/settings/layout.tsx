import React, {ReactNode} from 'react'

type LayoutProps = {
    children: ReactNode
  }

export default function Layout({ children }: LayoutProps)  {
  return (
    <>
      <html lang="en">
      <main>{children}</main>
      </html>
    </>
  )
}
