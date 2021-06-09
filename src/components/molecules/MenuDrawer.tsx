import {memo, VFC} from "react";
import { Button } from "@chakra-ui/react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react';

type Props = {
    //返り値がない場合は以下のどっちかで表す。(今回は好みでVoidFunction;も書いた)
    onClose: () => void;
    //onClose: VoidFunction;
    isOpen: boolean;
    onClickHome: () => void;
    onClickPost: () => void;
    onClickPostUpdate: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {

    const { onClose, isOpen, onClickHome, onClickPost, onClickPostUpdate } = props;

    return (
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
                            onClick={onClickHome}
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
                            onClick={onClickPost}
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
                            onClick={onClickPostUpdate}
                        >
                            Update
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});