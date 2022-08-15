import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, {loading, error}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error} formMethods={formMethods} >
      <FormError error={error} wrapperClassName="form-error" />
        <Label htmlFor="firstName" errorClassName="error">
          First Name
        </Label>
        <TextField
          name="firstName"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="firstName" className="error" />

        <Label htmlFor="secondName" errorClassName="error">
          Second Name
        </Label>
        <TextField
          name="secondName"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="secondName" className="error" />

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
        <Submit disabled={loading} >Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
