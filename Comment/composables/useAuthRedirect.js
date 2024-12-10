import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const useAuthRedirect = () => {
    const router = useRouter();

    onMounted(() => {
        const userToken = localStorage.getItem('user');
        const companyToken = localStorage.getItem('company');

        if (userToken) {
            router.push('/user-profile-page'); // Redirect to user profile
        } else if (companyToken) {
            router.push('/company-profile-page'); // Redirect to company profile
        }
    });
};

export default useAuthRedirect;
