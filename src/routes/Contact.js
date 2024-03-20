import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Fotter from '../components/Fotter'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg heading="CONTACT." text="lets have a chat"/>
      <Form></Form>
      <Fotter></Fotter>
    </div>
  )
}

export default Contact
