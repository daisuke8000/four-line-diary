import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

type Props = {
    onClickPost: () => void;
}

export const PostIconButton: VFC<Props> = memo((props) => {

    const { onClickPost } = props;

    return (
        <IconButton
            aria-label="メニュー"
            icon={<ChatIcon/>}
            size="sm"
            variant="ghost"
            colorScheme="facebook"
            _focus={{ boxShadow: "none" }}
            onClick={onClickPost}
        />
    );
});