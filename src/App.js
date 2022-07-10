//import './App.css';
import { useState } from 'react';
import FormName from './components/FormName';
import FormBirth from './components/FormBirth';
import FormContactDta from './components/FormContactDta';
import { MdContentPaste, MdAccessAlarm } from 'react-icons/md';

import { AppContainer } from './components/styles/AppContainer.styled';
import { ChatContainer, ChatHeader, ChatHeaderText, HeaderTitle, HeaderIcon, HeaderParagraph, ChatBody, ChatFooter } from './components/styles/ChatContainer.styled';
import { ChatBubble, ChatBubbleText } from './components/styles/ChatBubble.styled';
import { ChatButton } from './components/styles/ChatButton.styled';
import { ChatFinal } from './components/styles/ChatFinal.styled';

function App() {

  // state for steps
  const [step, setStep] = useState(0);

  // state for completed form data
  const [completed, setCompleted] = useState(false);

  // state for required data
  const [formData, setFormData] = useState ({
    // step one
    pName : '',
    sName : '',
    pLastName : '',
    sLastName : '',
    // step two
    dayOfBirth : '',
    monthOfBirth : '',
    yearOfBirth : '',
    // step three
    email : '',
    phone : '',
  })

  // func to set next step to be rendered
  function nextStep() {
    setStep(step + 1);
  }

  // func to set previous step to be rendered
  function prevStep() {
    setStep(step - 1);
  }

  function completedForm() {
    setCompleted(true);
  }

  // handle input change by taking onChange value and uptading our preveious state
  const handleInputChange = input => event => {
    const { value } = event.target


    // update our state
    setFormData({ ...formData, [input] : value })
  }

  function renderSwitcher() {
    switch (step) {
      case 0:
        return (
          <>
          <FormName 
                    nextStep={nextStep} 
                    handleInputChange={handleInputChange} 
                    values={formData} />

          {
            formData.pName && formData.sName && formData.pLastName && formData.sLastName ?
            <ChatButton color='green' onClick={nextStep}>Siguiente</ChatButton> 
            :
            <ChatButton color='lightgray' disabled>Siguiente</ChatButton>
            }
          </>
        );
      case 1:
        return (
          <>
            <FormName
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={formData} 
                    step={step}/>
          <ChatBubble color='violet'>
              <ChatBubbleText>
                {formData.pName} {formData.sName} {formData.pLastName} {formData.sLastName}
              </ChatBubbleText>
          </ChatBubble>

          <FormBirth 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                    handleInputChange={handleInputChange} 
                    values={formData} 
                    step={step}
                    />
          {
            formData.dayOfBirth && formData.monthOfBirth && formData.yearOfBirth ?
            <>
            <ChatButton color='orange' onClick={prevStep}>Atras</ChatButton>
            <ChatButton color='green' onClick={nextStep}>Siguiente</ChatButton>
            </>
            :
            <>
            <ChatButton color='orange' onClick={prevStep}>Atras</ChatButton>
            <ChatButton color='lightgray' disabled>Siguiente</ChatButton>
            </>
          }
          </>
        )
      case 2:
        return (
          <>
            <FormName
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleInputChange={handleInputChange}
                      values={formData} 
                      step={step}/>
            <ChatBubble color='violet'>
                <ChatBubbleText>
                  {formData.pName} {formData.sName} {formData.pLastName} {formData.sLastName}
                </ChatBubbleText>
            </ChatBubble>

            <FormBirth
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleInputChange={handleInputChange}
                      values={formData} 
                      step={step}
                      />
            <ChatBubble color='violet'>
                <ChatBubbleText>
                  {formData.dayOfBirth} {formData.monthOfBirth} {formData.yearOfBirth}
                </ChatBubbleText>
            </ChatBubble>

            <FormContactDta 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={formData}
                    step={step}/>
            {
              formData.email && formData.phone ?
              <>
                <ChatButton color='orange' onClick={prevStep}>Atras</ChatButton>
                <ChatButton color='green' onClick={nextStep}>Siguiente</ChatButton>
              </>
              :
              <>
                <ChatButton color='orange' onClick={prevStep}>Atras</ChatButton>
                <ChatButton color='lightgray' disabled>Siguiente</ChatButton>
              </>
            }
          </>
        )
      case 3:
        return (
          <>
            <FormName
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleInputChange={handleInputChange}
                      values={formData} 
                      step={step}/>
            <ChatBubble color='violet'>
                <ChatBubbleText>
                  {formData.pName} {formData.sName} {formData.pLastName} {formData.sLastName}
                </ChatBubbleText>
            </ChatBubble>

            <FormBirth
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleInputChange={handleInputChange}
                      values={formData}
                      step={step}/>
            <ChatBubble color='violet'>
                <ChatBubbleText>
                  {formData.dayOfBirth} {formData.monthOfBirth} {formData.yearOfBirth}
                </ChatBubbleText>
            </ChatBubble>

            <FormContactDta
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleInputChange={handleInputChange}
                      values={formData} 
                      step={step} />
            <ChatBubble color='violet'>
              <ChatBubbleText>Correo electrónico: {formData.email}</ChatBubbleText>
              <ChatBubbleText>Teléfono celular: {formData.phone}</ChatBubbleText>
            </ChatBubble>

            <ChatBubble color='lightgray'>
              <ChatBubbleText>
                Si tus datos son correctos por favor continuemos.
              </ChatBubbleText>
            </ChatBubble>
            {
              completed ? 
              <>
              <ChatButton color='lightgray' disabled>Iniciar</ChatButton>
              <ChatFinal>
                <ChatBubbleText>Fecha de nacimiento: {formData.dayOfBirth} {formData.monthOfBirth} {formData.yearOfBirth} </ChatBubbleText>
                <ChatBubbleText>Correo electrónico: {formData.email}</ChatBubbleText>
                <ChatBubbleText>Teléfono celular: {formData.phone}</ChatBubbleText>
                <ChatBubbleText>Nombre: {formData.pName} {formData.sName} {formData.pLastName} {formData.sLastName} </ChatBubbleText>
              </ChatFinal>
              </>
              :
              <>
              <ChatButton color='hotpink' onClick={completedForm}>Iniciar</ChatButton>
              </>
            }
          </>
        )
      default:
        return 'Error';
    }
  }

  return (
    <AppContainer>
      <ChatContainer>
        <ChatHeader stepWidth={`${step * 33.33}%`}>
          <ChatHeaderText>
            <HeaderTitle>Titulo de formulario</HeaderTitle>
            <HeaderParagraph>
              <span><MdAccessAlarm /></span>En menos de 5 minutos.
            </HeaderParagraph>
          </ChatHeaderText>
          <HeaderIcon>
            <MdContentPaste />
          </HeaderIcon>
        </ChatHeader>
        <ChatBody>
            {
                renderSwitcher()
            }
        </ChatBody>
        <ChatFooter>
          {/* <ChatButton onClick={nextStep}>Siguiente</ChatButton>
          <ChatButton onClick={prevStep}>Regresar</ChatButton> */}
        </ChatFooter>
      </ChatContainer>
    </AppContainer>
  )

}

export default App;
