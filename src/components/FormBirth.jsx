import { useState } from "react"
import { Form, FormGroup, FormLabel, FormInput, FormTitle, SubmitButton, ErrorBlock } from "./styles/Form.styled"
import { ChatBlock, Avatar, AvatarBlock } from "./styles/ChatBlock.styled"

export default function FormBirth({ nextStep, step, handleInputChange, values }) {

    // error state
    const [error, setError] = useState(false)

    // validate form data
    function handleSubmit(e) {
        e.preventDefault()

        if (values.dayOfBirth === '' ||
            values.monthOfBirth === '' ||
            values.yearOfBirth === '') {
            setError(true)
        } else {
            //console.log(values)
            nextStep()
            setError(false)
        }
    }

    return (
        <>
            <ChatBlock onScreen={ step === 1 ? true : false }>
                <AvatarBlock>
                    <Avatar src="https://i.imgur.com/TdwkiYU.png" alt="avatar" />
                </AvatarBlock>
                <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormTitle>¿Cuál es tu fecha de nacimiento?</FormTitle>
                <FormGroup>
                    <FormLabel htmlFor="dayOfBirth">Dia de Nacimiento</FormLabel>
                    <FormInput 
                        type="text"
                        name="dayOfBirth"
                        id="dayOfBirth"
                        value={values.dayOfBirth}
                        onChange={handleInputChange('dayOfBirth')}
                        placeholder="Dia de Nacimiento"
                        disabled={step > 1}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="monthOfBirth">Mes de Nacimiento</FormLabel>
                    <FormInput 
                        type="text"
                        name="monthOfBirth"
                        id="monthOfBirth"
                        value={values.monthOfBirth}
                        onChange={handleInputChange('monthOfBirth')}
                        placeholder="Mes de Nacimiento"
                        disabled={step > 1}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="yearOfBirth">Año de Nacimiento</FormLabel>
                    <FormInput 
                        type="text"
                        name="yearOfBirth"
                        id="yearOfBirth"
                        value={values.yearOfBirth}
                        onChange={handleInputChange('yearOfBirth')}
                        placeholder="Año de Nacimiento"
                        disabled={step > 1}
                        autoComplete="off"
                    />
                </FormGroup>
                {error && <ErrorBlock>Complete todos los campos</ErrorBlock>}
                <FormGroup>
                    <SubmitButton type="submit">Siguiente</SubmitButton>
                </FormGroup>
            </Form>
            </ChatBlock>
        </>
    )
}
