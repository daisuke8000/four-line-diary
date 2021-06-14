import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

type Props = {
    onClickPostUpdate: () => void;
}

export const EditIconButton: VFC<Props> = memo((props) => {

    const { onClickPostUpdate } = props;

    return (
        <IconButton
            aria-label="メニュー"
            icon={<EditIcon/>}
            size="sm"
            variant="ghost"
            colorScheme="facebook"
            _focus={{ boxShadow: "none" }}
            onClick={onClickPostUpdate}
        />
    );
});