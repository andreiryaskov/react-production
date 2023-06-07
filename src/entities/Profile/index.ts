export { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';
