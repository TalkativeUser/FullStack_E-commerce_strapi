// 'use client'

// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
// import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack, Button,Heading,Text,useColorModeValue,InputGroup,InputRightElement, FormHelperText,} from '@chakra-ui/react'
// import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
// import { AppDispatch, RootState } from '../app/store'
// import { useDispatch, useSelector } from 'react-redux'
// import { userLogin } from '../app/features/loginSlice'
// import { Navigate } from 'react-router-dom'

// interface IProps{

//   isAuth:string|undefined
// }

// export default function Login({isAuth}:IProps) {


//     const dispatch:AppDispatch =useDispatch()
//     const [isIdentifier,setIsIdentifier]=useState(false)
//     const [isPassword,setIsPassword]=useState(false)
//     const [showPassword, setShowPassword] = useState(false)
//     const [user,setUser]=useState({ identifier:'', password:''})
//     const {pending}=useSelector((store:RootState )=> store.loginSlice )
//     const bgColor = useColorModeValue('gray.50', 'gray.800'); 
//     const bgColor2=useColorModeValue('white', 'gray.700')

  
// const submitHandler = (event:FormEvent<HTMLFormElement> )=>{
// event.preventDefault()

// console.log('form submiting...');

// if(!user.identifier&&!user.password) {

//   setIsIdentifier(true)
//     setIsPassword(true)
//     return;
// }
// if(!user.identifier) {

//   setIsIdentifier(true)
//     return;
// }


// if(!user.password) {

//     setIsPassword(true)
//     return;
// }





// setIsIdentifier(false)
// setIsPassword(false)
// dispatch( userLogin(user) )
// // console.log('user data is =>', user);



// }
// const onChangeHandler=(event:ChangeEvent<HTMLInputElement> )=>{

//  const {name,value }=event.target

// setUser({...user,[name]:value})


// }




// if (isAuth) {
//   console.log('i am auth');
  
//   return <Navigate to={-1}  />; // عودة إلى الصفحة السابقة
// }


//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={bgColor}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'}>Sign in to your account</Heading>
//           <Text fontSize={'lg'} color={'gray.600'}>
//   to enjoy all of our cool <span style={{ color: 'blue' }}>features</span> ✌️
// </Text>

//         </Stack>
//         <Box
//         as={'form'} onSubmit={submitHandler}
//           rounded={'lg'}
//           bg={bgColor2}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack  spacing={4}  >

//             {/*  this is identifier field */}
//             <FormControl id="identifier">
//               <FormLabel>Email address</FormLabel>

//               <Input required={false} isInvalid={isIdentifier} type="identifier" name='identifier'  value={user.identifier} onChange={onChangeHandler}   /* // errorBorderColor='crimson' */ /> 
              
//                 { isIdentifier? <FormHelperText   color={'red.400'}> identifier is Requierd  . </FormHelperText>:null }
//             </FormControl>


//             {/*  this is password field */}

//             <FormControl id="password" isRequired>
//               <FormLabel>Password</FormLabel>
//               <InputGroup>
//                 <Input required={false} isInvalid={isPassword} name='password'  type={showPassword ? 'text' : 'password'} value={user.password} onChange={onChangeHandler}  />

//                 <InputRightElement h={'full'}>
//                   <Button
//                     variant={'ghost'}
//                     onClick={() => setShowPassword((showPassword) => !showPassword)}>
//                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>

//                {isPassword?<FormHelperText color={'red.400'} > Password is Requierd  . </FormHelperText>:null  }
//             </FormControl>


//             <Stack spacing={10}>

//                 {/*  this is Remember button and forget password */}
//               <Stack
//                 direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}>
//                 <Checkbox>Remember me</Checkbox>
//                 <Text color={'blue.400'}>Forgot password?</Text>
//               </Stack>


//                 {/*  this is sign in button */}

//               <Button
//                sx={{
//                 cursor: isIdentifier || isPassword ? "not-allowed" : "pointer",
//               }}
//               isLoading={pending}
//               type='submit'
//                 bg={isIdentifier||isPassword?"red.500":"blue.500"}
//                 color={'white'}
//                 _hover={{
//                   bg:isIdentifier||isPassword?"red.300":"blue.300" ,
//                 }}>
//                 Sign in
//               </Button>



//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   )
// }

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue, InputGroup, InputRightElement, FormHelperText, createStandaloneToast } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { AppDispatch, RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../app/features/loginSlice'
import { useNavigate } from 'react-router-dom'

interface IProps {
  isAuth: string | undefined
}

export default function Login({ isAuth }: IProps) {
  const dispatch: AppDispatch = useDispatch()
  const [isIdentifier, setIsIdentifier] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({ identifier: '', password: '' })
  const { pending } = useSelector((store: RootState) => store.loginSlice)
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const bgColor2 = useColorModeValue('white', 'gray.700')
  const navigate = useNavigate()
  const {toast}=createStandaloneToast()


  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!user.identifier && !user.password) {
      setIsIdentifier(true)
      setIsPassword(true)
      return
    }
    if (!user.identifier) {
      setIsIdentifier(true)
      return
    }
    if (!user.password) {
      setIsPassword(true)
      return
    }

    setIsIdentifier(false)
    setIsPassword(false)
    dispatch(userLogin(user))
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    if (isAuth) {
      toast({
        title: "You'r Authenticated aleready ✅ " , 
        status:"success",
        duration:1400,
        position:"top"
      })
      navigate(-1) // العودة للصفحة السابقة مباشرة بدون رندر صفحة تسجيل الدخول
    }
  }, [isAuth, navigate])


  // الشرط ده بيمنع اى ريندر عبال ما ال  useEffect  تشتغل وتشوف لو المستخدم مسجل الدخول بالفعل عشان توديه للصفحه اللى لسه جاى منها 
  //  والسطر ده مهمتها ان يعطل ال  rendering  لان ال  useNavigate  بطيئه سيكا وكان صفحة اللوجين بتظهر لمدة ثانيه كده وبعد كده يحصل  navigate
  //  لكن الشرط ده مش هيخليها تترندر خالص وعلى فكره الشرط ده بمثابه شرط اللودر
  if (isAuth) {
    return null
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={bgColor}>
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
          bg={bgColor2}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {/* حقل identifier */}
            <FormControl id="identifier">
              <FormLabel>Email address</FormLabel>
              <Input required={false} isInvalid={isIdentifier} type="identifier" name='identifier' value={user.identifier} onChange={onChangeHandler} />
              {isIdentifier ? <FormHelperText color={'red.400'}> identifier is required. </FormHelperText> : null}
            </FormControl>

            {/* حقل password */}
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input required={false} isInvalid={isPassword} name='password' type={showPassword ? 'text' : 'password'} value={user.password} onChange={onChangeHandler} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {isPassword ? <FormHelperText color={'red.400'}> Password is required. </FormHelperText> : null}
            </FormControl>

            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                sx={{
                  cursor: isIdentifier || isPassword ? "not-allowed" : "pointer",
                }}
                isLoading={pending}
                type='submit'
                bg={isIdentifier || isPassword ? "red.500" : "blue.500"}
                color={'white'}
                _hover={{
                  bg: isIdentifier || isPassword ? "red.300" : "blue.300",
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
