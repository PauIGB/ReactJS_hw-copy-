import Dummy from 'components/Dummy';
import StartDialog from 'components/StartDialog';

export default [
    {
        path: '/chat',
        component: Dummy,
        exact: true
    },
    {
        path: '/chat/:id',
        component: StartDialog,
        exact: true
    },

]