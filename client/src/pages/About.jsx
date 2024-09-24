import React from 'react'
import { Button, Card, Carousel, Timeline, List } from 'flowbite-react';
import { HiArrowNarrowRight } from "react-icons/hi";

import img from "../assets/about_me.jpg"
import para1 from "../assets/parallax.jpg"
import para2 from "../assets/parallax6.jpg"
import para3 from "../assets/parallax3.jpg"
export default function About() {

  
  return (
    <div>
      <div className="">
        <div className="bg-white dark:bg-gray-900 flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi there,</h1>
                  <p className="max-w-2xl mb-6 mr-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  I’m Mira (Zijie) Pang, a current CS student at UChicago. Previously, I worked as a full-time venture capitalist for two years, focusing on tech industries such as AI and autonomous driving.
                  </p>
                  <div className="hidden lg:flex lg:mt-40">
                    <svg className="w-6 h-6 text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 7 4 4 4-4m-8 6 4 4 4-4"/>
                    </svg>

                    <p className=" text-blue-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 lg:ml-1" >Learn more about me</p>
                  </div>
                  
              </div>

              <Card imgSrc={img} className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded">
              <p className="font-normal text-gray-400 dark:text-gray-400">
                Hook'em! Also an UT-Austin 2021 alum :)
              </p>
              </Card>
                         
          </div>
      </div>
      </div>

      {/*
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax.jpg")' }}>
        <h1 className="text-5xl text-white">Adventure</h1>
      </div>
      */}

      <img className="flex items-center justify-center h-96 w-full object-cover" src={para1}></img>

      <div className = "lg:pb-12">
        <div className="pt-8 px-8 mx-auto max-w-screen-lg lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Education</h2>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>September 2024</Timeline.Time>
                <Timeline.Title className="text-xl">The University of Chicago, Physical Sciences Division &#127891;</Timeline.Title>
                <Timeline.Body>
                  <p className="font-bold pb-1">Master of Science in Computer Science</p>
                  <List className="list-outside ml-5">
                    <List.Item>Curriculum: Java Programming, Algorithms, Computer Systems</List.Item>
                  </List>
                </Timeline.Body>
                
              </Timeline.Content>
            </Timeline.Item>
          
          
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>July 2023</Timeline.Time>
              <Timeline.Title className="text-xl">New York University, Tandon School of Engineering &#128187;</Timeline.Title>
              <Timeline.Body>
                <p className="font-bold pb-1">Tandon Bridge Certificate Program</p>
                <List className="list-outside ml-5">
                  <List.Item>Curriculum: Data Structures and Algorithms in C++, Operating System, Discrete Mathematics</List.Item>
                </List>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>September 2016</Timeline.Time>
                <Timeline.Title className="text-xl">the University of Texas at Austin &#127797;</Timeline.Title>
                <Timeline.Body>
                  <p className="font-bold pb-1">Bachelor and Master of Accounting (iMPA)</p>
                  <List className="list-outside ml-5">
                    <List.Item>Curriculum: Elements of Computers and Programming, Elements of Software Design, Statistics and Modeling</List.Item>
                  </List>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>

        </div>

        <div className="px-4 mx-auto max-w-screen-lg lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Professional Experience</h2>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>June 2022</Timeline.Time>
                <Timeline.Title className="text-xl py-1">Bank of China Group Investment Limited &#128185; </Timeline.Title>
                <Timeline.Body>
                  <p className="font-bold py-1">Venture Capital Researcher - Computer Engineering Team</p>
                  <List className="list-outside ml-5">
                    <List.Item className="py-1">
                    Our team specializes in equity investments for startups, from seed rounds to Series B. 
                    </List.Item>

                    <List.Item className="py-1">
                    As researchers, our role is to dive deep into these companies and their industries, then pitch investment proposals to the committee. 
                    </List.Item>

                    <List.Item className="py-1">
                    And when it comes to learning the cutting-edge tech these startups are working on, we don’t just stop at theory—we get hands-on! 
                    Ex. while researching AI, we went the extra mile and built our own AI-based app, even fine-tuning the model ourselves.
                    </List.Item>

                  </List>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>June 2021</Timeline.Time>
                <Timeline.Title className="text-xl py-1">TalkingData &#128640; </Timeline.Title>
                <Timeline.Body >
                  <p className="font-bold py-1">Software Development Engineer Intern</p>
                  <List className="list-outside ml-5">
                    <List.Item className="py-1">
                      TalkingData is a digital marketing company that helps retail companies and luxury brands to find their target customers.
                    </List.Item>
                    <List.Item className="py-1">
                      I took charge of front-end website development for several products.
                      Some tools I used: JavaScript, HTML, CSS, Vue.js, ECharts, iView UI Toolkit, Jenkins, Git, and Postman. 
                    </List.Item>
                    <List.Item className="py-1">
                      Beyond just coding, I really dove into the software development workflow and sharpened my collaboration skills by working closely with PMs, back-end engineers, UI designers, and QA testers.
                    </List.Item>
                    <List.Item className="py-1">
                      It was all about teamwork and bringing great ideas to life! &#10024;
                    </List.Item>
                  </List>
                
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>

        <div className="pd-8 px-4 mx-auto max-w-screen-lg lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects and Prizes</h2>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>June 2024</Timeline.Time>
                <Timeline.Title className="text-xl">MERN Stack Blog</Timeline.Title>
                <Timeline.Body>
                  <p className="font-bold pb-1">Software Development Engineer Intern</p>
                  <List className="list-outside ml-5">
                  <List.Item className="py-1">
                    In an effort to level up my full-stack skills, I built this blog app (yep, the very website you’re on right now!) using MongoDB, Express, React, and Node.js. 
                    </List.Item>
                    <List.Item className="py-1">
                    Feel free to sign up, sign in, and drop a comment on my posts—I’d love to hear from you! &#128150;
                    </List.Item>
                    <List.Item className="py-1">
                    Some other tools I used: JWT and Google OAuth for authentication, React Router Dom, Redux, Tailwind CSS, and Firebase.
                    </List.Item>
                  </List>

                </Timeline.Body>
                {/*
                <Button color="gray">
                  Learn More
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
                */}
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>February 2020</Timeline.Time>
                <Timeline.Title className="text-xl">Hack for Resilient Communities: Transportation, Pollution, Weather & Health</Timeline.Title>
                <Timeline.Body>
                  <p className="font-bold pb-1">"Best Product" Prize</p>
                  <List className="list-outside ml-5">
                    <List.Item className="py-1">
                    In this hackathon, our team built a Django website to help warn local residents about nearby disease outbreaks.
                    </List.Item>
                    <List.Item className="py-1">
                    We used Python Pandas to visualize past data and even predict the future spread of cases. 
                    </List.Item>
                    <List.Item className="py-1">
                    Pretty handy during the pandemic &#128567;
                    </List.Item>
                  </List>
                  
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>August 2017 </Timeline.Time>
                <Timeline.Title className="text-xl">Delta Sigma Pi &#128176;</Timeline.Title>
                <Timeline.Body>
                  <p className="font-bold pb-1">Vice President of Information Technology</p>
                  <List className="list-outside ml-5">
                    <List.Item>
                    I’m also a Deltasig! I served as VPIT for a year, where I was responsible for maintaining and updating the official website and MySQL database.
                    </List.Item>
                  </List>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>


      

      {/*
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../assets/parallax6.jpg")' }}>
        <h1 className="text-5xl text-white">Experiences</h1>
      </div>
      */}
      <img className="flex items-center justify-center h-96 w-full object-cover" src={para2}></img>


      <div className="h-120">
        <div className="bg-white dark:bg-gray-900">
          <div className="pb-16 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="max-w-screen-md mb-8 lg:mb-16">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Always on the journey of learning new things</h2>
                  <p className="text-gray-500 sm:text-xl dark:text-gray-400"> My background is pretty diverse but always stays on the core track of tech and business. Every little shift in my career path has been fueled by my curiosity for exploring new technologies!</p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold dark:text-white">Accounting</h3>
                      <p className="text-gray-500 dark:text-gray-400"> I earned my undergraduate degree in Accounting from UT-Austin, and along the way, I took several CS and math courses. I also got hands-on with software development in different student organizations!</p>
                  </div>
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold dark:text-white">Investment</h3>
                      <p className="text-gray-500 dark:text-gray-400">I worked as a venture capitalist in China for two years, diving deep into several tech industries as part of the job. To better understand the tech and fuel my curiosity, I took C++ and foundational CS courses at NYU in my free time.</p>
                  </div>
                  <div>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                      </div>
                      <h3 className="mb-2 text-xl font-bold dark:text-white">Computer Science</h3>
                      <p className="text-gray-500 dark:text-gray-400">Living the dream by officially studying computer science, I’m now a Master’s student at UChicago! I’m excited and can’t wait to dive even deeper into the world of tech.</p>
                  </div>
                  
              </div>
          </div>
        </div>
      </div>



      {/*
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax3.jpg")' }}>
        <h1 className="text-5xl text-white">Thank you!</h1>
      </div>
      */}

      <img className="flex items-center justify-center h-96 w-full object-cover" src={para3}></img>

      {/*
      <div className="h-96">
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
              <svg className="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
              <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Maintenance</h1>
              <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">I'm still thinking about what to put here</p>
          </div>
        </div>
      </div>
      */}

      <div className="">
        <div className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto my-auto">
                  <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                  </svg> 
                  <blockquote>
                      <p className="text-2xl font-medium text-gray-900 dark:text-white overflow-hidden">"Fun facts about me: I love traveling, I'm a huge fan of fiction novels, I drink hot water like it’s coffee, I volunteer with Be My Eyes, and I’m dreaming of owning a cat someday!"</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      {/*<img className="w-6 h-6 rounded-full" src="" alt="profile picture" /> */}
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3 font-medium text-gray-900 dark:text-white">Mira</div>
                          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">A future cat mom</div>
                      </div>
                  </figcaption>
              </figure>
          </div>
        </div>
      </div>
      
      
    </div>
    
  )
}
