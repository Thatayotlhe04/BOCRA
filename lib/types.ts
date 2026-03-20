// ── Complaints ──
export interface Complaint {
  id: string;
  provider: string;
  category: string;
  description: string;
  incident_date?: string;
  contact_phone?: string;
  contact_email?: string;
  status: "submitted" | "acknowledged" | "investigating" | "resolved" | "closed";
  created_at: string;
  updated_at: string;
}

export interface ComplaintTimeline {
  id: string;
  complaint_id: string;
  event: string;
  created_at: string;
}

// ── Licenses ──
export interface License {
  id: string;
  holder_name: string;
  license_number: string;
  category: string;
  status: "active" | "suspended" | "expired" | "revoked";
  issued_date: string;
  expiry_date: string;
}

// ── Documents ──
export interface Document {
  id: string;
  title: string;
  category: string;
  file_url: string;
  file_size: string;
  published_at: string;
}

// ── Cybersecurity Advisories ──
export interface Advisory {
  id: string;
  title: string;
  severity: "HIGH" | "MED" | "LOW";
  published_at: string;
  content?: string;
}
