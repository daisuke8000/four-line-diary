import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header"

type Props = {
    //ReactNodeはコンポーネントのタグで囲った要素を渡すことができるため、
    //childrenのようなタグで囲った要素はReactNode使用
    children: ReactNode;
}


export const HeaderLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Header/>
            { children }
        </>
    );
});