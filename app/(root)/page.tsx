import ContactUs from '@/components/sections/ContactUs'
import Faq from '@/components/sections/Faq'
import HeroSection from '@/components/sections/HeroSection'
import SearchSection from '@/components/sections/SearchSection'
import WhyUs from '@/components/sections/WhyUs'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <WhyUs/>
      <Faq/>
      <ContactUs/>
    </>
  )
}
