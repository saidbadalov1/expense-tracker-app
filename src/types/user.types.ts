export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export interface UserNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
}
