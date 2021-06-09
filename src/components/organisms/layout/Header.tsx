import { Flex, Heading, Link, Box } from '@chakra-ui/react';
import {memo, VFC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react';
import { MenuIconButton } from "../../atoms/MenuIconButton";
import { PostIconButton } from "../../atoms/PostIconButton";
import { EditIconButton } from "../../atoms/EditIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";


export const Header: VFC = memo(() => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();
    //UseCallbackでは第二引数の配列に監視する変数を格納する。動的なものでなければ空でもOk
    const onClickHome = useCallback(
        () => {
            history.push("/home")
        },
        [history],
    );
    const onClickPost = useCallback(
        () => {
            history.push("/home/post")
        },
        [history],
    );
    const onClickPostUpdate = useCallback(
        () => {
            history.push("/home/post-update")
        },
        [history],
    );



    return (
        <>
            <Flex
                as="nav"
                bg="orange.300"
                color="blue.800"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex
                    align="center"
                    as="a"
                    _hover={{ cursor: "pointer"}}
                >
                    <Heading
                        as="h1" mr={8}
                        fontSize={{ base: "xl", md: "lg" }}
                        onClick={onClickHome}
                    >
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
                                <PostIconButton onClickPost={onClickPost}/>
                            </Link>
                        </Box>
                        <Box p5={5}>
                            <Link>
                                <EditIconButton onClickPostUpdate={onClickPostUpdate}/>
                            </Link>
                        </Box>
                    </Flex>
                <MenuIconButton onOpen={onOpen}/>
            </Flex>
            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                onClickHome={onClickHome}
                onClickPost={onClickPost}
                onClickPostUpdate={onClickPostUpdate}/>
        </>
    );
});