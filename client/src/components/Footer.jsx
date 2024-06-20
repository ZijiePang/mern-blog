import React from 'react';
import {Footer} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-gray-300'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex mdLgrid-cols-1'>
                <div className=',t-5'>
                    <Link to="/" className='self-center with whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white'>Mira's</span>
                            Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap=6">
                    <div>
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link 
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'>
                                About Mira
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us' />
                        <Footer.LinkGroup col>
                            <Footer.Link 
                                href='https://github.com/ZijiePang/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                GitHub
                            </Footer.Link>
                            <Footer.Link 
                                href='https://www.linkedin.com/in/zijie-pang/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                LinkedIn
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal' />
                        <Footer.LinkGroup col>
                            <Footer.Link 
                                href='#'>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link 
                                href='#'>
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Mira's Blog" year={new Date().getFullYear()}></Footer.Copyright>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='https://github.com/ZijiePang/' icon={BsGithub}></Footer.Icon>
                    <Footer.Icon href='https://www.linkedin.com/in/zijie-pang/' icon={BsLinkedin}></Footer.Icon>
                </div>
            </div>
            
        </div>
    </Footer>
  )
}
