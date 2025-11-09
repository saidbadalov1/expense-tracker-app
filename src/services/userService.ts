import type { UserNotification, UserProfile } from "@/types";

const MOCK_USER: UserProfile = {
  id: "user-1",
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  avatar: "https://i.pravatar.cc/300?img=68",
  role: "Product Designer",
};

const MOCK_NOTIFICATIONS: UserNotification[] = [
  {
    id: "notification-1",
    title: "Payment from UpWork received",
    message: "You received $650 from UpWork",
    timestamp: "2025-01-01T00:00:00Z",
  },
];

export const getCurrentUser = (): Promise<UserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_USER);
    }, 400);
  });
};

export const getNotifications = (): Promise<UserNotification[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_NOTIFICATIONS);
    }, 400);
  });
};
