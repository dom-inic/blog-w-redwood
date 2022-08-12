import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ContactForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.contact?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.contact?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="secondName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Second name
        </Label>

        <TextField
          name="secondName"
          defaultValue={props.contact?.secondName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="secondName" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.contact?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="subject"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subject
        </Label>

        <TextField
          name="subject"
          defaultValue={props.contact?.subject}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="subject" className="rw-field-error" />

        <Label
          name="message"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Message
        </Label>

        <TextField
          name="message"
          defaultValue={props.contact?.message}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="message" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
