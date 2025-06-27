## Project Background

A next-generation AI recruitment solution designed to streamline and modernize talent acquisition by integrating seamlessly with existing HR systems. It ingests job requisitions and candidate profiles via secure APIs, using Natural Language Processing (NLP) to parse structured data such as skills, experience, qualifications, and location preferences. A powerful semantic matching engine scores candidates based on contextual relevance, dynamically adjusting weightage for factors like job seniority, domain expertise, nationality, and language proficiency. A central dashboard displays open roles, candidate summaries, data sync status, and model health, with export options available in CSV/Excel. This system aims to reduce time-to-hire, improve candidate quality, and empower recruitment teams through intelligent automation.

**Objective:**

To develop a lightweight prototype that reflects the key capabilities of a recruitment intelligence system. The prototype should demonstrate data ingestion, candidate-job matching views, and intelligent UI components—all integrated through APIs.

## Product Features

### a. Dashboard (Main Workspace)

- List of open job requisitions
- Job title, department, location, posted date
- Candidate match summary per job
  - Number of Exact Match / Partial Match / No Fit
  - Match percentages
- Data sync status indicators
- Filter & search functionality
- Navigation to Job Detail or Candidate Detail view
- Export options (CSV / Excel)

### b. Job Detail View

- Job description panel
  - Title, skills required, experience level, location, qualifications etc.
- Candidate match list (AI-ranked)
  - Match score and label (Exact Match, Partial, No Fit)
  - Visual indicator for ranking (bar or color)
- Filters: language, nationality, seniority, location

### c. Candidate Detail View

- Parsed resume fields
  - Name, contact info (if shown), skills, experience, tools, education
- Match rationale section
  - Highlighted keywords from job matched in candidate profile
- Resume viewer (raw or rendered view)
- Recruiter notes and tagging system
- Status actions (e.g., shortlisted, rejected)

### d. Settings / User Management

- User roles and permissions (Admin, Recruiter, Viewer)
- Notification preferences
