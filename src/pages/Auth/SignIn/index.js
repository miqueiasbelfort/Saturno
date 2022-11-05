import React from 'react'
import { useNavigation } from "@react-navigation/native"

import { 
  Container, 
  Logo, 
  Title, 
  LoginContainer, 
  Input, 
  LostPasswordText,
  Button,
  RegisterPageText,
  SubmitButton,
  ButtonSubmitText
} from './styles' 

export default function SignIn() {

  const navigation = useNavigation()

  return (
    <Container>
      <Logo
        source={require('../../../assets/Logo.png')}
      />
      <LoginContainer>

        <Input
          placeholder="E-mail"
        />
        <Input
          placeholder="Senha"
        />
        <Button>
          <LostPasswordText>Esqueci minha senha!</LostPasswordText>
        </Button>

        <Button onPress={() => navigation.navigate('SignUp')}>
          <RegisterPageText>Ainda não tenho conta!</RegisterPageText>
        </Button>

        <SubmitButton>
          <ButtonSubmitText>Entrar</ButtonSubmitText>
        </SubmitButton>

      </LoginContainer>
    </Container>
  )
}