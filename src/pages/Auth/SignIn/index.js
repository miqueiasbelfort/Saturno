import React from 'react'
import { useNavigation } from "@react-navigation/native"

import { 
  Container,
  Bg,
  Logo,
  Form,
  Input,
  Button,
  Text,
  ButtonContainer,
  SubmitButton,
  TextBtn
} from './styles' 

export default function SignIn() {

  const navigation = useNavigation()

  return (
    <Container>
    <Bg
      colors={['#FFA8A2', '#E84A5E']}
    >
      <Logo
        source={require('../../../assets/Logo.png')}
      />
      <Form>
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Senha"
        />
        
        <Button>
          <Text>Esqueci minha senha!</Text>
        </Button>

        <Button onPress={() => navigation.navigate('SignUp')}>
          <Text style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>Ainda não tenho conta!</Text>
        </Button>

        <ButtonContainer>
          <SubmitButton>
            <TextBtn>Entrar</TextBtn>
          </SubmitButton>
        </ButtonContainer>

      </Form>
    </Bg>
    </Container>
  )
}