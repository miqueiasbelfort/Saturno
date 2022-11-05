import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`
export const LogoContainer = styled.View`
    flex-direction: row;
    padding: 20px 10px;
    align-items: center;
`
export const Logo = styled.Image`
    width: 212px;
    height: 200px;
`
export const TextMotivation = styled.Text`
    flex: 1;
    font-size: 18px;
    color: #E84A5E;
    font-weight: bold;
    font-style: italic;
    text-decoration: underline;
`
export const RegisterContainer = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: #2A363820;
    padding: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#2A3638'
})`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #2A3638;
`

export const Button = styled.TouchableOpacity``
export const BackLogin = styled.Text`
    text-align: center;
    margin: 0 0 20px 0;
    font-weight: 300;
    color: #2A3638;
    margin: 20px 0;
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
export const ButtonContainerSubmit = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 30px;
`