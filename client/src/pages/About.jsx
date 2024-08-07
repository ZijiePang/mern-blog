import React from 'react'
import { Button, Card, Carousel } from 'flowbite-react';
import img from "../assets/about_me.jpg"
export default function About() {

  
  return (
    <div>
      <div className="">
        <div class="bg-white dark:bg-gray-900 flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi there,</h1>
                  <p class="max-w-2xl mb-6 mr-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  I’m Mira (Zijie) Pang, a current CS student at UChicago. Previously, I worked as a full-time venture capitalist for two years, focusing on tech industries such as AI and autonomous driving.
                  </p>
                  <div class="hidden lg:flex lg:mt-40">
                    <svg class="w-6 h-6 text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 7 4 4 4-4m-8 6 4 4 4-4"/>
                    </svg>

                    <p class=" text-blue-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 lg:ml-1" >Learn more about me</p>
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

      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax.jpg")' }}>
        <h1 className="text-5xl text-white">Adventure</h1>
      </div>

      <div className="h-96">
        <div class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure class="max-w-screen-md mx-auto">
                  <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                  </svg> 
                  <blockquote>
                      <p class="text-2xl font-medium text-gray-900 dark:text-white">"I love traveling. Some of my fav destinations: Japan, South Korea, United Kingdom, and Italy."</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                      <img class="w-6 h-6 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/mern-blog-f3c39.appspot.com/o/1722852009691WechatIMG1111.jpg?alt=media&token=c8fd62ed-5ed4-4ff2-b496-38498eeca32e" alt="profile picture" />
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div class="pr-3 font-medium text-gray-900 dark:text-white">Mira</div>
                          <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Traveller</div>
                      </div>
                  </figcaption>
              </figure>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax6.jpg")' }}>
        <h1 className="text-5xl text-white">Experiences</h1>
      </div>

      <div className="h-120">
        <div class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div class="max-w-screen-md mb-8 lg:mb-16">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Always on the journey of learning new things</h2>
                  <p class="text-gray-500 sm:text-xl dark:text-gray-400"> There's my career path. </p>
              </div>
              <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  <div>
                      <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      </div>
                      <h3 class="mb-2 text-xl font-bold dark:text-white">Accounting</h3>
                      <p class="text-gray-500 dark:text-gray-400">I earned my Accounting undergraduate degree at UT-Austin.</p>
                  </div>
                  <div>
                      <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                      </div>
                      <h3 class="mb-2 text-xl font-bold dark:text-white">Investment</h3>
                      <p class="text-gray-500 dark:text-gray-400">Worked as a venture capitalist in China for 2 years.</p>
                  </div>
                  <div>
                      <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                          <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                      </div>
                      <h3 class="mb-2 text-xl font-bold dark:text-white">Computer Science</h3>
                      <p class="text-gray-500 dark:text-gray-400">To learn more about tech industry, I am pursuing for a CS degree at UChicago. </p>
                  </div>
                  
              </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax3.jpg")' }}>
        <h1 className="text-5xl text-white">Thank you!</h1>
      </div>
      
      <div className="h-96">
        <div class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
              <svg class="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
              <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Maintenance</h1>
              <p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">I'm still thinking about what to put here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
