import "./styles/global.css";
import { Metadata } from "next";
import Navigation from "./components/navigation"

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading..",
  },
  description:`The best movies`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
