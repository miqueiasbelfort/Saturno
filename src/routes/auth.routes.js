import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

// pages
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'

export default function Auth() {

    const AuthStack = createStackNavigator()

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  )
}