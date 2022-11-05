import React from 'react'
import { useNavigation } from "@react-navigation/native"

import {
  Container,
  LogoContainer,
  Logo,
  TextMotivation,
  RegisterContainer,
  Input,
  Button,
  BackLogin,
  SubmitButton,
  ButtonSubmitText,
  ButtonContainerSubmit
} from "./styles"

export default function SignUp() {

  const navigation = useNavigation()

  return (
    <Container>

      <LogoContainer>
        <Logo
          source={require('../../../assets/Logo.png')}
        />
        <TextMotivation>Um mundo sem medo de ser quem é!</TextMotivation>
      </LogoContainer>

      <RegisterContainer>
        <Input
          placeholder="Nome de Usuário"
        />
        <Input
          placeholder="E-mail"
        />
        <Input
          placeholder="Telefone celular - 61992254791"
        />
        <Input
          placeholder="Senha"
        />
        <Input
          placeholder="Confirmar Senha"
        />

        <Button onPress={() => navigation.goBack()}>
          <BackLogin>Já tenho conta!</BackLogin>
        </Button>

        <ButtonContainerSubmit>
          <SubmitButton>
            <ButtonSubmitText>Registrar</ButtonSubmitText>
          </SubmitButton>
        </ButtonContainerSubmit>

      </RegisterContainer>

    </Container>
  )
}