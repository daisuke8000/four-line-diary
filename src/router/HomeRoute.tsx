import { AllPost } from '../components/pages/AllPost';
import { Post } from '../components/pages/Post';
import { PostDetail } from '../components/pages/PostDetail';
import { PostUpdate } from '../components/pages/PostUpdate';
import { Page404 } from '../components/pages/Page404';

export const homeRoutes = [
    {
        path: '/',
        exact: true,
        children: <AllPost/>
    },
    {
        path: '/post',
        exact: false,
        children: <Post/>
    },
    {
        path: '/post-detail',
        exact: false,
        children: <PostDetail/>
    },
    {
        path: '/post-update',
        exact: false,
        children: <PostUpdate/>
    },
    {
        path: '*',
        exact: false,
        children: <Page404/>
    },
]