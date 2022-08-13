import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} >
        <Label htmlFor="firstname" errorClassName="error">
          First Name
        </Label>
        <TextField
          name="firstname"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="firstname" className="error" />

        <Label htmlFor="secondname" errorClassName="error">
          Second Name
        </Label>
        <TextField
          name="secondname"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="secondname" className="error" />

        <Label htmlFor="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label htmlFor="subject" errorClassName="error">
          Subject
        </Label>
        <TextField
          name="subject"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="subject" className="error" />

        <Label htmlFor="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
