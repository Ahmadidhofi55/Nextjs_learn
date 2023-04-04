import React, { ReactNode } from "react"
//import boostarpt
import 'bootstrap/dist/css/bootstrap-grid.min.css'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en">
      <main>{children}</main>
      </html>
    </>
  )
}
