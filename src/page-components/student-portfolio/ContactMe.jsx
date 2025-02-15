import React from 'react'

const ContactMe = () => {
  return (
    <div>
        <h1 className='text-3xl'>Contact Me</h1>
        <p className='text-xl'>Feel free to reach out if you have any questions.</p>
        <ul className='flex gap-5 mt-4'>
          <li>Email: <a href="mailto:your@email.com">your@email.com</a></li>
          <li>Phone: (123) 456-7890</li>
        </ul>
  
    </div>
  )
}

export default ContactMe