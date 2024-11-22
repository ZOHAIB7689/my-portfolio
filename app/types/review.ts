// types/review.ts

export interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  review: string;
  profession?: string;
  location?: string;
  tags: string[];
  isPublic: boolean;
}

export interface Review extends ReviewFormData {
  id: string;
  date: string;
  status: "pending" | "approved" | "rejected";
  adminNotes?: string;
  likes: number;
  isVerified: boolean;
}

export type SortOption = "latest" | "highest" | "lowest" | "longest";
export type FilterOption = "all" | "verified" | "pending" | "approved";
