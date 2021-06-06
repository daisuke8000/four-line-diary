import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";


export const EditIconButton: VFC = memo(() => {

    return (
        <IconButton
            aria-label="メニュー"
            icon={<EditIcon/>}
            size="sm"
            variant="ghost"
            colorScheme="facebook"
            _focus={{ boxShadow: "none" }}
        />
    );
});