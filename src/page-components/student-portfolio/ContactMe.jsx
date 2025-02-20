import React from 'react'

const ContactMe = () => {
  return (
    <div>
        <h1 className='text-3xl text-center'>Contact Me</h1>
        <p className='text-xl text-center'>Feel free to reach out if you have any questions.</p>
        <ul className='grid grid-cols-2 gap-6 mt-6'>
          <li>Email: <a href="mailto:your@email.com">your@email.com</a></li>
          <li>Phone: (123) 456-7890</li>
          <li>Twitter: abc2</li>
          <li>Github: abc2</li>
          <li>LinkedIn: abc2</li>
          <li>Instagram: abc2</li>
        </ul>
  
    </div>
  )
}

export default ContactMe