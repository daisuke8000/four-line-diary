import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
}

export const PrimaryButton: VFC<Props> = memo((props) => {

    const { children } = props;

    return (
        <Button
            colorScheme="blue"
            _hover={{ opacity: 0.7 }}
        >
            { children }
        </Button>
    );
});