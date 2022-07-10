import { useState } from "react"
import { Form, FormGroup, FormLabel, FormInput, FormTitle, SubmitButton, ErrorBlock } from "./styles/Form.styled"
import { ChatBlock, Avatar, AvatarBlock } from "./styles/ChatBlock.styled";

export default function FormContactDta({ nextStep, step, handleInputChange, values }) {
    // error state
    const [error, setError] = useState(false)

    // validate form data
    function handleSubmit(e) {
        e.preventDefault()

        if (values.phone === '' ||
            values.email === '') {
            setError(true)
        } else {
            //console.log(values)
            nextStep()
            setError(false)
        }
    }

    return (
    <>
        <ChatBlock onScreen={ step === 2 ? true : false }>
            <AvatarBlock>
                <Avatar src="https://i.imgur.com/TdwkiYU.png" alt="avatar" />
            </AvatarBlock>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <FormTitle>Datos de contacto</FormTitle>
            <FormGroup>
                <FormLabel htmlFor="phone">Teléfono</FormLabel>
                <FormInput
                    type="text"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleInputChange('phone')}
                    placeholder="Teléfono"
                    disabled={step > 2}
                    autoComplete="off"
                />
            </FormGroup>
            <FormGroup >
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                    type="text"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleInputChange('email')}
                    placeholder="Email"
                    disabled={step > 2}
                    autoComplete="off"
                />
            </FormGroup>
            { error && <ErrorBlock>Complete todos los campos</ErrorBlock> }
            <FormGroup>
                <SubmitButton type="submit">Next</SubmitButton>
            </FormGroup>
        </Form>
        </ChatBlock>
    </>
  )
}
