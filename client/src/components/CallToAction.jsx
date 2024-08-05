import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-gray-300 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about me?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my resume
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="/about" target='_blank' rel='noopener noreferrer'>
                    Mira's Resume
                </a>
            </Button>
        </div>
    </div>
  )
}