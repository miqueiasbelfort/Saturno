import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    padding-top: 20px;
`
export const Logo = styled.Image`
    width: 212px;
    height: 200px;
    margin: 30px 0;
`
export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #E84A5E;
    text-align: center;
    text-decoration: underline;
`
export const LoginContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: #2A363820;
    padding: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    align-items: center;

`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#000'
})`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #2A3638;
`

export const Button = styled.TouchableOpacity`
    width: 100%;
`
export const LostPasswordText = styled.Text`
    margin: 20px 0;
    font-weight: 300;
    color: #2A3638;
    text-align: left;
`
export const RegisterPageText = styled.Text`
    text-align: center;
    margin: 0 0 20px 0;
    font-weight: 300;
    color: #2A3638;
`
export const SubmitButton = styled.TouchableOpacity`
    max-width: 200px;
    padding: 10px 25px;
    background-color: #E84A5E;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
export const ButtonSubmitText = styled.Text`
    font-size: 20px;
    text-align: center;
    color: #fff;
    font-weight: bold;
`