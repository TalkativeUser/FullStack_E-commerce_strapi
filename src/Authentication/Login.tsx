'use client'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack, Button,Heading,Text,useColorModeValue,InputGroup,InputRightElement, FormHelperText,} from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Login() {


    const [isEmail,setIsEmail]=useState(false)
    const [isPassword,setIsPassword]=useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [user,setUser]=useState({

        email:'',
        password:''
})

const submitHandler = (event:FormEvent<HTMLFormElement> )=>{
event.preventDefault()

console.log('form submiting...');

if(!user.email&&!user.password) {

    setIsEmail(true)
    setIsPassword(true)
    return;
}
if(!user.email) {

    setIsEmail(true)
    return;
}


if(!user.password) {

    setIsPassword(true)
    return;
}





setIsEmail(false)
setIsPassword(false)


}

const onChangeHandler=(event:ChangeEvent<HTMLInputElement> )=>{

 const {name,value }=event.target

setUser({...user,[name]:value})


}

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
  to enjoy all of our cool <span style={{ color: 'blue' }}>features</span> ✌️
</Text>

        </Stack>
        <Box
        as={'form'} onSubmit={submitHandler}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack  spacing={4}  >

            {/*  this is email field */}
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>

              <Input required={false} isInvalid={isEmail} type="email" name='email'  value={user.email} onChange={onChangeHandler}   /* // errorBorderColor='crimson' */ /> 
              
                { isEmail? <FormHelperText   color={'red.400'}> Email is Requierd  . </FormHelperText>:null }
            </FormControl>


            {/*  this is password field */}

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input required={false} isInvalid={isPassword} name='password'  type={showPassword ? 'text' : 'password'} value={user.password} onChange={onChangeHandler}  />

                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>

               {isPassword?<FormHelperText color={'red.400'} > Password is Requierd  . </FormHelperText>:null  }
            </FormControl>


            <Stack spacing={10}>

                {/*  this is Remember button and forget password */}
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>


                {/*  this is sign in button */}

              <Button
               sx={{
                cursor: isEmail || isPassword ? "not-allowed" : "pointer",
              }}
              type='submit'
                bg={isEmail||isPassword?"red.500":"blue.500"}
                color={'white'}
                _hover={{
                  bg:isEmail||isPassword?"red.300":"blue.300" ,
                }}>
                Sign in
              </Button>



            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}