import ProjectDetails from '@/app/(pages)/works/_components/AboutProjectDetails'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutProjectDetails from '../_components/AboutProjectDetails'
import QuestionsChallenges from '../_components/Questions'
import Solution from '../_components/Solution'

function page() {
  return (
    <div className='text-center justify-center items-center h-3/4 text-4xl'>
      <div id='Top-Banner' className='justify-center mx-auto flex'>
          <Image alt='' src={"/aggudoBanner.avif"} height={260} width={1229} className='w-screen'/>
      </div>
      <AboutProjectDetails />
      <QuestionsChallenges />
      <Solution />
    </div>
  )
}

export default page