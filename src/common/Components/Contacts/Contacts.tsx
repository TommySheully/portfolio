import React from 'react'
import s from './Contacts.module.scss'
import { useFormik } from 'formik'
import { Contact, sendMessageTC, setAppStatusAC, setErrorMessageAC, setIsOpenAC, Title } from 'common'
import { callIcon, emailIcon, localIcon } from 'assets'
import { useAppDispatch } from 'app'

type FormikErrorType = {
  name?: string
  email?: string
  message?: string
}

export const Contacts = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'You must fill in the field.'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email'
      }
      if (!values.name) {
        errors.name = 'Name'
      }
      if (!values.message) {
        errors.message = 'Message'
      }
      return errors
    },
    onSubmit: (values) => {
      dispatch(
        setErrorMessageAC({
          name: values.name,
          email: values.email,
          message: values.message
        })
      )
      formik.resetForm()
    }
  })

  const sendMessageHandler = () => {
    if (formik.errors.message || formik.errors.name || formik.errors.email) {
      dispatch(setAppStatusAC('failed'))
      dispatch(setIsOpenAC(true))
    } else {
      dispatch(
        sendMessageTC({
          name: formik.values.name,
          email: formik.values.email,
          message: formik.values.message
        })
      )
      formik.resetForm()
    }
  }

  return (
    <div className={s.contactBlock} id='Contacts'>
      <div className={s.container}>
        <Title title={'GET IN TOUCH'} />

        <div className={s.containerMini}>
          <div className={s.contactContainer}>
            <Contact title='Phone' text='write to TG' icon={callIcon} link={'https://t.me/tommysheully'} />
            <Contact title='Email' text='dfgthii@gmail.com' icon={emailIcon} />
            <Contact title='Location' text='Minsk, Belarus' icon={localIcon} />
          </div>

          <form className={s.formContainer} onSubmit={formik.handleSubmit}>
            <div className={s.inputContainer}>
              <input type='text' placeholder='Your Name' {...formik.getFieldProps('name')} />
            </div>
            <div className={s.inputContainer}>
              <input type='email' placeholder='Your Email' {...formik.getFieldProps('email')} />
            </div>
            <div className={s.textareaContainer}>
              <textarea placeholder='Your Message' {...formik.getFieldProps('message')}></textarea>
            </div>
            <div className={s.buttonContainer}>
              <button type='submit' className={s.btn} onClick={sendMessageHandler}>
                SEND ME
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
