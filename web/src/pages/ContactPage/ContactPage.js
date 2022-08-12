import { MetaTags } from '@redwoodjs/web'

import ContactCell from 'src/components/Contact/ContactCell'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <ContactCell />
    </>
  )
}

export default ContactPage
