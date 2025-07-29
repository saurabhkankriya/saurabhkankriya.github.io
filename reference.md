# Hugo Noir Theme - File Reference Guide

This guide provides instructions on which files to edit for making updates to specific sections of your Hugo portfolio website.

## 📋 Quick Reference Table

| Section | File to Edit | Description |
|---------|---------------|-------------|
| **About** | `content/about/index.md` | Main about page content |
| **Experience** | `data/en/experience.toml` | Work experience data |
| **Projects** | `data/en/projects.toml` | Project portfolio data |
| **Blogs** | `content/blogs/*.md` | Individual blog posts |
| **Author Info** | `data/en/author.toml` | Personal details, certifications, honors |
| **Site Config** | `config.toml` | Site-wide configuration, social links |

---

## 📝 Detailed Instructions

### 1. About Section
**File:** `content/about/index.md`

**What to edit:**
- Personal introduction
- Professional summary
- Career journey description
- Contact call-to-action

**Example:**
```markdown
---
title: "About Me"
date: 2024-01-15T10:30:00+05:30
draft: false
description: "Your personal description for SEO"
---

Hello! I'm **Your Name**, a passionate [Your Role]...
```

---

### 2. Experience Section
**File:** `data/en/experience.toml`

**What to edit:**
- Job roles and companies
- Employment periods
- Key responsibilities
- Technologies used

**Example:**
```toml
[[experience]]
  role = "Your Job Title"
  company = "Company Name"
  company_link = "https://company.com"
  period = "Start Date - End Date"
  country = "Country"
  responsibilities = [
    "Responsibility 1",
    "Responsibility 2"
  ]
  technologies = ["Tech1", "Tech2", "Tech3"]
```

---

### 3. Projects Section
**File:** `data/en/projects.toml`

**What to edit:**
- Project titles
- Descriptions
- Technology stacks
- GitHub links
- Project images

**Example:**
```toml
[[projects]]
  title = "Project Name"
  description = "Detailed project description..."
  image = "/images/projects/project-image.jpg"
  link = "https://github.com/username/project"
  tech = "Python,React,Node.js,Docker"
```

---

### 4. Blogs Section
**Files:** `content/blogs/*.md`

**For new blog posts:**
1. Create new file: `content/blogs/your-post-title.md`
2. Use this template:

```markdown
---
title: "Your Blog Post Title"
date: 2024-01-20T14:30:00+05:30
draft: false
tags: ["tag1", "tag2", "tag3"]
categories: ["Category", "Subcategory"]
description: "Brief description for SEO"
---

Your blog content here...
```

**For existing blog posts:**
- Edit any `.md` file in `content/blogs/`

---

### 5. Author Information
**File:** `data/en/author.toml`

**What to edit:**
- Certifications
- Awards/Honors
- Volunteer work
- Professional achievements

**Example:**
```toml
[[certifications]]
  title = "Certification Name"
  url = "https://certification-url.com"
  date = "Month Year"

[[honors]]
  title = "Award Name"
  institution = "Issuing Organization"
  date = "Month Year"
```

---

### 6. Site Configuration
**File:** `config.toml`

**What to edit:**
- Site title and description
- Social media links
- Profile image
- Navigation menu

**Example:**
```toml
[params]
  name = "Your Full Name"
  location = "Your Location"
  description = "Your professional tagline"
  profile_image = "/images/your-profile.jpg"
  github = "https://github.com/yourusername"
  linkedin = "https://linkedin.com/in/yourusername"
  email = "your.email@example.com"
```

---

## 🎯 Quick Update Checklist

When making updates, follow this order:

1. **Content Updates:**
   - [ ] Edit relevant `.toml` file in `data/en/` for data sections
   - [ ] Edit `.md` files in `content/` for page content
   - [ ] Update `config.toml` for site-wide settings

2. **Images:**
   - Place images in `static/images/` directory
   - Reference images as `/images/filename.jpg`

3. **Testing:**
   - Run `hugo server -D` to preview changes
   - Check all tabs: About, Experience, Projects, Blogs, Contact

---

## 🚨 Important Notes

- **Data files** (`*.toml`) use TOML format - be careful with syntax
- **Content files** (`*.md`) use Markdown format
- **Images** should be placed in `static/images/` directory
- **URLs** in config should be complete URLs (include https://)
- **Dates** should be in format: `2024-01-15T10:30:00+05:30`

## 🌐 Local Development

To preview your changes:
```bash
hugo server -D
```

Then visit: `http://localhost:1313` (or check terminal for actual port)

---

## 📁 File Structure Overview

```
hugo-noir/
├── config.toml              # Site configuration
├── content/
│   ├── about/index.md       # About page content
│   └── blogs/               # Blog posts
├── data/en/
│   ├── author.toml          # Personal info, certifications
│   ├── experience.toml      # Work experience
│   └── projects.toml      # Project portfolio
└── static/
    └── images/              # Images for site
