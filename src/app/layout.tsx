
"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import { Inter, Montserrat } from 'next/font/google'
import Header  from "../components/Header/page";
import '../app/styles/global.scss'
import Head from "next/head";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const montserrat = Montserrat({
  weight: '800',
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const metadata = {
  title: 'Agenda',
  description: 'Agenda de Atividade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="" type="" /> 
      </Head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
