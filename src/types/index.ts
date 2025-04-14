
export interface Startup {
  id: string;
  name: string;
  logoUrl: string;
  tagline: string;
  description: string;
  industry: string;
  location: string;
  foundedYear: number;
  founderName: string;
  askAmount: number;
  raisedAmount: number;
  investors: number;
  equity: number;
  pitchDeck?: string;
  website?: string;
  teamSize?: number;
  featured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  walletBalance: number;
  investments: Investment[];
}

export interface Investment {
  id: string;
  userId: string;
  startupId: string;
  amount: number;
  date: Date;
  equity: number;
  status: 'pending' | 'completed' | 'failed'; // Added status property
}

export interface Post {
  id: string;
  startupId: string;
  title: string;
  content: string;
  imageUrl?: string;
  date: Date;
  likes: number;
  comments: number;
}

// New types for backend integration
export interface Comment {
  id: string;
  userId: string;
  postId: string;
  content: string;
  date: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'investment';
  status: 'pending' | 'completed' | 'failed';
  date: Date;
  reference?: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator';
}

// New Success Story type
export interface SuccessStory {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  industry: string;
  foundedYear: number;
  raisedAmount: number;
  investors: number;
  campaignLength: number;
}

// Add an interface for notifications to integrate with the backend
export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  content: string;
  date: string;
  isRead: boolean;
  relatedId?: string;
  relatedType?: string;
}
