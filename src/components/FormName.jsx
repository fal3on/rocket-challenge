import { useState } from "react"
import { Form, FormGroup, FormLabel, FormInput, FormTitle, SubmitButton, ErrorBlock } from "./styles/Form.styled"
import { ChatBlock, Avatar, AvatarBlock } from "./styles/ChatBlock.styled"

export default function FormName({ nextStep, step, handleInputChange, values }) {

    // error state
    const [error, setError] = useState(false)

    // validate form data
    function handleSubmit(e) {
        e.preventDefault()

        if (values.pName === '' ||
            values.sName === '' ||
            values.pLastName === '' ||
            values.sLastName === '') {
            setError(true)
        } else {
            //console.log(values)
            nextStep()
            setError(false)
        }
    }

    return (
        <>
        <ChatBlock onScreen={ step === 0 ? true : false }>
            <AvatarBlock>
                <Avatar src="https://i.imgur.com/TdwkiYU.png" alt="avatar" />
            </AvatarBlock>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormTitle>¿Cuál es tu nombre?</FormTitle>
                <FormGroup>
                    <FormLabel htmlFor="pName">Primer Nombre</FormLabel>
                    <FormInput
                        type="text"
                        name="pName"
                        id="pName"
                        value={values.pName}
                        onChange={handleInputChange('pName')}
                        placeholder="Primer Nombre"
                        disabled={step > 0}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="sName">Segundo Nombre</FormLabel>
                    <FormInput
                        type="text"
                        name="sName"
                        id="sName"
                        value={values.sName}
                        onChange={handleInputChange('sName')}
                        placeholder="Segundo Nombre"
                        disabled={step > 0}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="pLastName">Primer Apellido</FormLabel>
                    <FormInput
                        type="text"
                        name="pLastName"
                        id="pLastName"
                        value={values.pLastName}
                        onChange={handleInputChange('pLastName')}
                        placeholder="Primer Apellido"
                        disabled={step > 0}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="sLastName">Segundo Apellido</FormLabel>
                    <FormInput
                        type="text"
                        name="sLastName"
                        id="sLastName"
                        value={values.sLastName}
                        onChange={handleInputChange('sLastName')}
                        placeholder="Segundo Apellido"
                        disabled={step > 0}
                        autoComplete="off"
                    />
                </FormGroup>
                {error && <ErrorBlock>Complete todos los campos</ErrorBlock>}
                <FormGroup>
                    <SubmitButton type="submit">Next</SubmitButton>
                </FormGroup>
            </Form>
        </ChatBlock>
    </>
  )
}
