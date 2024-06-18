import React from 'react'
import insightfull from "../assest/creative.svg"
const Error = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    <div class="mx-auto max-w-screen-sm text-center items-center justify-center flex flex-col gap-2 ">
      <img src={insightfull} className='w-[13rem]' alt="no image " />
      <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry something went wrong.</p>
      <h3 class="dark:text-primary-500 text-3xl font-extrabold tracking-tight text-gray-600 lg:text-3xl">An error occurred, please reload and check your internet</h3>
    </div>
  </div>
</section>
  )
}

export default Error
