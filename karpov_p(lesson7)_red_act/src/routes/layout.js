import RegistrationFormContainer from 'containers/RegistrationFormContainer';
import ChatContainer from 'containers/ChatContainer';

export default [
    {
        path: '/',
        component: RegistrationFormContainer,
        exact: true,
    },
    {
        path: '/chat',
        component: ChatContainer,
        exact: false,
    },
];