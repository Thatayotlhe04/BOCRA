export interface Complaint {
  id: string;
  provider: string;
  category: string;
  description: string;
  incident_date?: string | null;
  contact_phone?: string | null;
  contact_email?: string | null;
  status: "submitted" | "acknowledged" | "investigating" | "officer" | "resolved" | "closed";
  user_id?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ComplaintTimeline {
  id: string;
  complaint_id: string;
  status: string;
  label: string;
  description?: string | null;
  created_at: string;
}

export interface ComplaintFormData {
  provider: string;
  category: string;
  description: string;
  incident_date?: string;
  contact_phone?: string;
  contact_email?: string;
}

export interface License {
  id: string;
  holder_name: string;
  license_number: string;
  category: string;
  status: "active" | "suspended" | "expired" | "revoked";
  issued_date: string;
  expiry_date: string;
}

export interface Advisory {
  id: string;
  title: string;
  severity: "HIGH" | "MED" | "LOW";
  published_at: string;
  content?: string;
}
