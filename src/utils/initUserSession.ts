import { getUserDashboard, getUserProfile } from "@/features/dashboard/actions";
import { showToast } from "@/components/HotToast";
import { useQueries } from "@tanstack/react-query";

export const initUserSession = async (token: string) => {
  try {
    // const dashboardRes = await getUserDashboard(token);
    // const profileRes = await getUserProfile(token);
    
    const queryResults = useQueries({
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
    
    const [userDashboardQuery, userProfileQuery] = queryResults;
    
    const {data: userDashboardData, isPending: isDashboardPending, error: dashboardError, } = userDashboardQuery;
    const {data: userProfileData, isPending: isProfilePending, error: profileError, } = userProfileQuery;
    
    const isLoading = isDashboardPending || isProfilePending;
    const hasError = dashboardError || profileError;

    if (hasError) {
      showToast("Failed to fetch complete user data", "error");
      return null;
    }

    return {
      user: userDashboardData.data.user,
      wallet: userDashboardData.data.wallet,
      transactionHistory: userDashboardData.data.transactionHistory,
      profile_data: userProfileData.data.profile_data,
      addres: userProfileData.data.addres,
      user_kyc_data: userProfileData.data.user_kyc_data,
    };
  } catch (error) {
    showToast(`Fetch error: ${(error as Error).message}`, "error");
    return null;
  }
};
