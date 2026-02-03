
export interface GuestInfo {
  name: string;
  attending: boolean;
  plusOne: boolean;
  dietaryNotes: string;
  email: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Added GuestbookEntry interface to fix the module error in Guestbook.tsx
export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}
