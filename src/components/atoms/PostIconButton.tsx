import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";


export const PostIconButton: VFC = memo(() => {

    return (
        <IconButton
            aria-label="メニュー"
            icon={<ChatIcon/>}
            size="sm"
            variant="ghost"
            colorScheme="facebook"
            _focus={{ boxShadow: "none" }}
        />
    );
});