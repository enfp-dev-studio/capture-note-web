import "../styles/globals.css"
import "../styles/device.min.css"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import React from "react"
import { ThemeType } from "../types/Type"
import Layout from "../components/Layout"

function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = React.useState<ThemeType>("light") // 다크모드 있는곳 텍스트 !

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme") // 다크모드 삭제
      document.documentElement.classList.remove("dark") // html class에서 dark클래스 삭제 !
      setDark("light")
    } else {
      document.documentElement.classList.add("dark") // html의 class에 dark 클래스 추가 !
      localStorage.setItem("theme", "dark") // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 !
      setDark("dark")
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
