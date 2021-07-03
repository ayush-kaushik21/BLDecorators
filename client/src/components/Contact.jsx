import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import StoreIcon from '@material-ui/icons/Store'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  let name, value

  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  let changeHandler = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })
  }

  let submitForm = async (e) => {
    e.preventDefault()
    const { name, phone, email, message } = user

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
      }),
    })

    const data = await res.json()

    if (res.status === 422 || !data) {
      const notify = (text) => toast.error(text)
      notify('Form Not Submitted')
    } else {
      const notifys = (text) => toast.success(text)
      notifys('Form Submitted')
      setUser({ name: '', phone: '', email: '', message: '' })
    }
  }

  return (
    <div id='contact'>
      <div className='contact'>
        <h1 className='heading text-center'>Get In Touch</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-11 mx-auto left__details'>
              <h1>BILLU LIGHT DECORATORS</h1>
              <div className='owner__details'>
                <h5 className='mt-2 small__screen'>
                  <IconButton>
                    <StoreIcon className='contact__icon' />
                  </IconButton>
                  Shambha Bazar, Near Jain Mandir, Bijnor
                </h5>
                <h5 className='mt-2 big__screen'>
                  <IconButton>
                    <StoreIcon className='contact__icon' />
                  </IconButton>
                  Shambha Bazar, Near Jain Mandir,
                </h5>
                <h5 className='text-center pinCode big__screen'>Bijnor</h5>
                <h6>
                  <IconButton>
                    <PhoneIcon className='contact__icon' />
                  </IconButton>
                  9837336602, 9639045228
                </h6>
                <p>
                  <IconButton>
                    <MailIcon className='contact__icon' />
                  </IconButton>
                  shubhamgolu852@gmail.com
                </p>
              </div>
            </div>
            <div className='col-md-6 col-11 mx-auto right__form'>
              <form method='POST'>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    onChange={changeHandler}
                    id='exampleInputName'
                    placeholder='Name'
                    name='name'
                    value={user.name}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='number'
                    className='form-control'
                    onChange={changeHandler}
                    id='exampleInputPhone'
                    placeholder='Mobile No.'
                    value={user.phone}
                    name='phone'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    onChange={changeHandler}
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Email'
                    name='email'
                    value={user.email}
                    required
                  />
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className='mb-3'>
                  <textarea
                    className='form-control'
                    onChange={changeHandler}
                    id='exampleFormControlTextarea1'
                    rows='4'
                    placeholder='Message'
                    value={user.message}
                    name='message'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='btn__contact'
                  // type='submit'
                  // class='submit__btn'
                  onClick={submitForm}
                >
                  Submit
                </button>
                <ToastContainer
                  position='top-center'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
