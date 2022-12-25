import React from "react"
import AppBar from "./AppBar"
import Footer from "./Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:container min-h-screen px-10 md:px-24 md:mx-auto dark:bg-dark-background bg-background dark:text-dark-primary text-primary">
      <div className="flex-none">
        <AppBar />
      </div>
      <main className="container min-h-screen">{children}</main>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
