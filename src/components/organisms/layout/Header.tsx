import { Flex, Heading, Link, Box, IconButton, Button } from '@chakra-ui/react';
import {memo, VFC} from "react";
import { HamburgerIcon, ChatIcon, EditIcon } from '@chakra-ui/icons';
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure } from '@chakra-ui/react';

export const Header: VFC = memo(() => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            as="nav"
            bg="orange.300"
            color="blue.800"
            align="center"
            justify="space-between"
            padding={{ base: 3, md: 5 }}
        >
            <Flex align="center" as="a" _hover={{ cursor: "pointer"}}>
                <Heading as="h1" mr={8} fontSize={{ base: "xl", md: "lg" }} >
                    four-line-diary
                </Heading>
            </Flex>
                <Flex
                    align="center"
                    fontSize="sm"
                    flexGrow={3}
                    display={{ base: "none", md: "flex"}}
                >
                <Box pr={5}>
                    <Link>
                        <IconButton
                            aria-label="post"
                            icon={<ChatIcon/>}
                            variant="ghost"
                            colorScheme="facebook"
                            display={{ base: "none", md: "block" }}
                            _focus={{ boxShadow: "none" }}
                        />
                    </Link>
                </Box>
                <Box p5={5}>
                    <Link>
                        <IconButton
                            aria-label="update"
                            icon={<EditIcon/>}
                            variant="ghost"
                            colorScheme="facebook"
                            display={{ base: "none", md: "block" }}
                            _focus={{ boxShadow: "none" }}
                        />
                    </Link>
                </Box>
            </Flex>
            <IconButton
                aria-label="メニュー"
                icon={<HamburgerIcon/>}
                size="sm"
                variant="ghost"
                colorScheme="facebook"
                display={{ base: "block", md: "none" }}
                _focus={{ boxShadow: "none" }}
                onClick={onOpen}
            />
            <Drawer placement='left' size="xs" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerBody p={0} bg="yellow.50">
                            <Button
                                _hover={{ bg: "orange.100" }}
                                _focus={{ boxShadow: "none" }}
                                style={{ borderRadius: "unset" }}
                                colorScheme="facebook"
                                variant="ghost"
                                bg="yellow.50"
                                w="100%"
                            >
                                Top
                            </Button>
                            <Button
                                _hover={{ bg: "orange.100" }}
                                _focus={{ boxShadow: "none" }}
                                style={{ borderRadius: "unset" }}
                                colorScheme="facebook"
                                variant="ghost"
                                bg="yellow.50"
                                w="100%"
                            >
                                Post
                            </Button>
                            <Button
                                _hover={{ bg: "orange.100" }}
                                _focus={{ boxShadow: "none" }}
                                style={{ borderRadius: "unset" }}
                                colorScheme="facebook"
                                variant="ghost"
                                bg="yellow.50"
                                w="100%"
                            >
                                Update
                            </Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Flex>
    );
});