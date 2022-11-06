import React from 'react'
import { useNavigation } from "@react-navigation/native"

import {
  Container,
  Bg,
  Form,
  Logo,
  Text,
  Input,
  Button,
  SubmitButton,
  TextBtn,
  ButtonContainer
} from "../SignIn/styles"
import {LogoContainer, TextLetter, View, CheckTerns, CheckContainer} from "./styles"

export default function SignUp() {

  const navigation = useNavigation()

  return (
    <Container>
      <Bg
        colors={['#FFA8A2', '#E84A5E']}
      >

        <LogoContainer>
          <Logo
            source={require('../../../assets/Logo.png')}
          />
          <View>
            <TextLetter>
              “Quando a liberdade de  expessão nos é tirada, logo poderemos ser levados, como ovelhas, mudos e silenciosos para o abate”.
            </TextLetter>
            <Text style={{fontWeight: 'bold'}}>George Washington</Text>
          </View>
        </LogoContainer>

        <Form showsVerticalScrollIndicator={false} style={{marginBottom: 10}}>

          <Input
            placeholder="Nome de usúario"
          />
           <Input
            placeholder="Email"
          />
           <Input
            placeholder="Senha"
          />
           <Input
            placeholder="Confirmar senha"
          />

          <CheckContainer>
            <CheckTerns/>
            <TextLetter style={{marginLeft: 10,}}>Aceito os termos de uso!</TextLetter>
          </CheckContainer>

          <Button onPress={() => navigation.goBack()}>
            <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 20}}>Já tenho conta!</Text>
          </Button>

          <ButtonContainer>

            <SubmitButton>
              <TextBtn>Cadastrar</TextBtn>
            </SubmitButton>

          </ButtonContainer>

        </Form>

      </Bg>
    </Container>
  )
}