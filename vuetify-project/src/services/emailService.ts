import apiClient from '@/plugins/axios';

export interface Email {
  id: string;
  subject: string;
  sender: string;
  body: string;
  receivedAt: string;
}

export const fetchInboxEmails = async (): Promise<Email[]> => {
  const response = await apiClient.get<Email[]>('/inbox');
  return response.data;
};
