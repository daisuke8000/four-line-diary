import React, {memo, VFC, useState, ChangeEvent} from "react";
import { Flex, Box, Heading, Divider, Input, Stack, Text } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { SignUpButton } from "../atoms/SignUpButton";
import backimage from "../../theme/Image/BackGround/sample.jpg";


export const Login: VFC = memo(() => {

    const [mailAddress, setMailAddress] = useState<string>('');
    const [password, setPassWord] = useState<string>('');
    const [changeMode, setChangeMode] = useState<boolean>(true);

    //textboxの型指定は覚えるだけ
    const onChangeMailAddress = (e:ChangeEvent<HTMLInputElement>) => {
        setMailAddress(e.target.value);
    }
    const onChangePassWord = (e:ChangeEvent<HTMLInputElement>) => {
        setPassWord(e.target.value);
    }

    return (
       <Flex align="center" justify="center" height="100vh" backgroundImage={backimage} backgroundSize="cover">
          <Box bg="orange.100" w="sm" p={5} borderRadius="md" shadow="md">
              { changeMode ?
                  <>
                    <Heading as="h1" size="lg" textAlign="center" color="blue.500">FourLineDiary</Heading>
                    <Divider my={4} borderColor="blue.500" />
                  </>
                  :
                  <>
                    <Heading as="h1" size="lg" textAlign="center" color="teal.500">FourLineDiary</Heading>
                    <Divider my={4} borderColor="teal.500" />
                  </>

              }
              <Stack spacing={3} py={5} px={10}>
                  { changeMode ?
                      <>
                          <Input type="email" placeholder="mailAddress" value={mailAddress} onChange={onChangeMailAddress}/>
                          <Input type="password" placeholder="password" value={password} onChange={onChangePassWord}/>
                          <PrimaryButton>Signin</PrimaryButton>
                      </>
                      :
                      <>
                          <Input type="email" placeholder="mailAddress" value={mailAddress} onChange={onChangeMailAddress}/>
                          <Input type="password" placeholder="password" value={password} onChange={onChangePassWord}/>
                          <SignUpButton>SignUp</SignUpButton>
                      </>
                  }
                  <Text
                      textAlign="center"
                      justify="center"
                      color="gray.500"
                      onClick={() => setChangeMode(!changeMode)}
                      _hover={{ cursor: "pointer"}}
                  >
                      ChangeMode?
                  </Text>
              </Stack>
          </Box>
       </Flex>
   );
});