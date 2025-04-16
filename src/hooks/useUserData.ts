import { useQueries } from '@tanstack/react-query';
import { useAuthToken } from './useAuthToken';
import { getUserDashboard, getUserProfile } from '@/features/dashboard/actions';

export const useUserData = () => {
  const token = useAuthToken();

  const results = useQueries({
    queries: [
      {
        queryKey: ['userDashboard'],
        queryFn: () => getUserDashboard(token ?? ''),
        enabled: !!token,
      },
      {
        queryKey: ['userProfile'],
        queryFn: () => getUserProfile(token ?? ''),
        enabled: !!token,
      },
    ],
  });

  const [userDashboardQuery, userProfileQuery] = results;

  const {
    data: userDashboardData,
    isPending: isDashboardPending,
    error: dashboardError,
  } = userDashboardQuery;

  const {
    data: userProfileData,
    isPending: isProfilePending,
    error: profileError,
  } = userProfileQuery;

  return {
    userDashboardData: userDashboardData?.data,
    userProfileData: userProfileData?.data,
    isPending: isDashboardPending || isProfilePending,
    hasError: dashboardError || profileError,
    dashboardError,
    profileError,
    refetchDashboard: userDashboardQuery.refetch,
    refetchProfile: userProfileQuery.refetch,
  };
};
