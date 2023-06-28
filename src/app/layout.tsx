"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import { Noto_Serif } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'

const inter = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  
})



export default function RootLayout({
  children,
}: { 
  children: React.ReactNode
})
 {
  return (
    <html lang="en">
    <title> EBSB</title>
      <body className={inter.className}>
      <AnimatePresence>
        <Navbar  />
        <motion.div initial={{ opacity: 0, y:15 }}
        animate={{ opacity: 10 ,y:0 }}
        exit={{ opacity: 0 ,y:15}}
        transition={{delay:0.25}}>        {children}
        </motion.div>
        <Footer />
        </AnimatePresence>
        </body>
     
    </html>
  )
}
