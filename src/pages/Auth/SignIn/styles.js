import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
    flex: 1;
`
export const Bg = styled(LinearGradient)`
    flex: 1;
    align-items: center;
    padding: 45px 20px;
    justify-content: center;
`
export const Logo = styled.Image`
    width: 120px;
    height: 150px;
`
export const Form = styled.ScrollView`
    margin-top: 50px;
    flex: 1;
    width: 100%;
`
export const Input = styled.TextInput.attrs({
    placeholderColor: '#2A3638',
})`
    width: 100%;
    padding: 10px;
    height: 50px;
    background-color: #ffffff80;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const Button = styled.TouchableOpacity`

`
export const Text = styled.Text`
    color: #fff;
`

export const ButtonContainer = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
`
export const SubmitButton = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #E84A5E;
    border-width: 1px;
    border-color: #FF0020;
    border-radius: 10px;
`
export const TextBtn = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`