# BOCRA Walkthrough Video Script (3–5 Minutes)

Prepared for: `tirokgosi05-lang`  
Project: BOCRA Digital Services Prototype  
Target length: **4 minutes**

---

## 1) What to Prepare Before Recording (2 minutes prep)

1. Start the app:
   - `npm install`
   - `npm run dev`
2. Open browser at: `http://localhost:3000`
3. Zoom browser to **110–125%** for readability.
4. Turn on Do Not Disturb / silence notifications.
5. Have one sample complaint narrative ready (billing dispute, dates, etc.).

---

## 2) Recording Setup (Zero Cost)

- **Windows:** Xbox Game Bar (`Win + G`) or OBS (free)  
- **macOS:** QuickTime screen recording  
- **Linux:** OBS / built-in recorder  
- Audio: phone earphones with mic are acceptable.

Export:
- Format: MP4
- Resolution: 1080p
- FPS: 30
- Target size: 40–90MB for ~4 minutes

---

## 3) Time-Stamped Video Transcript (Use this word-for-word)

## 0:00 – 0:20 | Opening
**On screen:** Homepage (`/`)  
**Say:**
> Hello judges, this is our BOCRA digital platform prototype designed to improve consumer complaint handling and regulatory service access through a modern, secure web workflow.

---

## 0:20 – 0:50 | Home + Navigation
**On screen:** Scroll homepage sections, then header navigation.  
**Say:**
> The homepage introduces BOCRA services and clear navigation.  
> We provide direct access to complaints, portals, and staff login.  
> Navigation has been optimized for desktop and mobile usability.

---

## 0:50 – 2:10 | Complaint Submission Flow
**On screen:** Go to `/complaints` then `/complaints/new` and complete steps.

### Actions:
1. Step 1 eligibility: choose “Yes, I have contacted provider”.
2. Step 2 provider: choose a provider.
3. Step 3 details: fill category, description, date, phone, email.
4. Step 4 evidence: choose one file (PDF/JPG/PNG).
5. Step 5 review: submit complaint.

**Say:**
> This is the guided complaint process with eligibility checks aligned to BOCRA policy.  
> Users provide provider details, issue description, and optional contact information.  
> Evidence upload is supported through secure signed upload URLs with file validation.  
> After submission, the system returns a unique complaint tracking ID.

---

## 2:10 – 2:45 | Complaint Tracking
**On screen:** Click “Track This Complaint” or go to `/complaints/track/<ID>`.
**Say:**
> Complaint tracking is ID-based for privacy.  
> Citizens can monitor status progression and timeline updates without exposing all records publicly.

---

## 2:45 – 3:20 | Security + Data Protection
**On screen:** Briefly show relevant pages/UI and mention backend behavior.
**Say:**
> On the backend, complaint endpoints include validation and rate limiting to reduce abuse.  
> Status updates are protected with admin key controls, and audit logs are recorded for accountability.  
> We also provide a privacy and data-retention notice at the privacy page.

---

## 3:20 – 3:45 | Accessibility + Trust
**On screen:** Show skip link behavior (press Tab on page load), mobile menu toggle, form labels.
**Say:**
> Accessibility improvements include a skip-to-content link, labeled inputs, and improved mobile menu ARIA attributes, supporting more inclusive access.

---

## 3:45 – 4:00 | Close
**On screen:** Return to homepage.
**Say:**
> In summary, this solution demonstrates an end-to-end digital complaints workflow with security, accessibility, and scalability foundations aligned to BOCRA’s digital transformation goals. Thank you.

---

## 4) Fast “One-Take” Backup Script (if short on time)

> This BOCRA prototype digitizes complaint intake, evidence upload, and case tracking.  
> Users complete a guided complaint form, submit supporting documents, and receive a tracking ID.  
> The backend applies validation, rate limiting, admin-protected status updates, and audit logging.  
> Citizens track case progress through timeline updates, while privacy is protected through controlled access patterns.  
> We also included accessibility improvements and CI/security workflows for quality and maintainability.

---

## 5) Submission Attachment Note

After recording, add the video link to:
- `docs/SUBMISSION_LINKS.md` under **Walkthrough Video URL (Mandatory)**.

Recommended hosting:
- YouTube (Unlisted), Google Drive, or OneDrive.
