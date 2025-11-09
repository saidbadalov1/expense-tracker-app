import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCurrentUser, getNotifications } from "@/services/userService";
import type { UserNotification, UserProfile } from "@/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User", "Notifications"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserProfile, void>({
      queryFn: async () => {
        try {
          const data = await getCurrentUser();
          return { data };
        } catch (error) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: error instanceof Error ? error.message : "Unknown error",
            },
          };
        }
      },
      providesTags: ["User"],
    }),

    getNotifications: builder.query<UserNotification[], void>({
      queryFn: async () => {
        try {
          const data = await getNotifications();
          return { data };
        } catch (error) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: error instanceof Error ? error.message : "Unknown error",
            },
          };
        }
      },
      providesTags: ["Notifications"],
    }),
  }),
});

export const { useGetCurrentUserQuery, useGetNotificationsQuery } = userApi;
