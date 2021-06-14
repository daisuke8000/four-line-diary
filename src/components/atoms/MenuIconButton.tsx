import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
    //返り値がない場合は以下のどっちかで表す。(今回は好みでVoidFunction;も書いた)
    onOpen: () => void;
    //onOpen: VoidFunction;
}

export const MenuIconButton: VFC<Props> = memo((props) => {

    const { onOpen } = props;

    return (
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
    );
});