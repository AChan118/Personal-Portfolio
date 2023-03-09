import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { HiDocumentDownload } from 'react-icons/hi'
import Image from 'next/image'
import adamphoto from 'public/adam-photo.png'
import teeBagLogin from 'public/tee-bag-login.png'
import grassWorksLogin from 'public/grass-works-login.png'
import resumeOne from 'public/resume-portfolio-one.jpg'
import resumeTwo from 'public/resume-portfolio-two.jpg'

import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Adam Chance Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className=' min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between dark:text-white'>
              <h1 className='text-xl text-sky-600 dark:text-sky-400 font-sans'>developedbyAdam</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-sky-600 dark:text-sky-400' />
                </li>
                <li>
                  <a className='bg-gradient-to-r from-cyan-500 to-sky-500 bg-cyan-500 text-white border-none px-4 py-2 rounded-md ml-4 md:ml-8'
                    href='https://www.linkedin.com/in/adamchance/'
                  >
                    LinkedIn
                  </a>
                </li>

              </ul>

            </nav>
            <div className=' text-center p-10'>
              <h2 className='text-5xl py-2 text-sky-600 font-medium dark:text-sky-400'>Adam Chance</h2>
              <h3 className='text-2xl py-2 text-black dark:text-white'>Full Stack Web Developer</h3>
              <p className='text-slate-500 dark:text-slate-400 text-xl py-2'>A software developer with a diverse background in both consumer sales and technology. After spending 5 years in sales, I made the transition to software development, driven by my passion and fascination for technology. I am committed to continuously improving my technical skills and staying current with the latest industry trends and technologies to provide the best possible service to my clients</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 '>
              <a className='hover:scale-150 transition duration-500 ease-in-out'
                href='https://www.linkedin.com/in/adamchance/'>
                <AiFillLinkedin />
              </a>
              <a className='hover:scale-150 transition duration-500 ease-in-out'
                href='https://github.com/AChan118'>
                <AiFillGithub />
              </a>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-sky-500 rounded-full  w-80 h-80 md:w-96 md:h-96 mt-20 overflow-hidden'>
              <Image src={adamphoto} layout="fill" objectFit='cover' />
            </div>
          </section>
          {/* Second Page */}
          <section className='py-10'>
            <div >
              <h3 className="text-3xl py-1 font-medium text-sky-600 dark:text-white ">Projects</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="text-2xl text-center basis-1/3 flex-1 flex flex-col gap-2 text-black dark:text-sky-400 hover:scale-125 transition duration-500 ease-in-out"> Teebag
                <a href='https://teebag.app'>
                  <Image
                    className="rounded-lg object-cover "
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={teeBagLogin}

                  />
                </a>
              </div>
              <div className="text-2xl text-center basis-1/3 flex-1 flex flex-col gap-2 text-black dark:text-sky-400 hover:scale-125 transition duration-500 ease-in-out"> GrassWorks
                <a href='https://github.com/AChan118/Grass-Works'>
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={grassWorksLogin}

                  />
                </a>
              </div>
            </div>

            <div className='flex flex-row gap-2 items-center py-10' >
              <h3 className="text-3xl py-1 font-semibold text-sky-600 dark:text-white ">Resume</h3>
              <a
                className="text-2xl text-sky-400"
                href="/adam-chance-resume.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              ><HiDocumentDownload/></a>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={resumeOne}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={resumeTwo}
                />
              </div>
            </div>

          </section>
        </main>
      </div>
    </>
  )
}
