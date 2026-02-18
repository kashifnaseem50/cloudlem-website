# Formspree Setup Guide

Your website is now configured to use Formspree for form submissions. Follow these steps to complete the setup:

## ✅ Fixed for Deployment

The forms now use placeholder IDs, allowing Vercel to build successfully. Once deployed, follow the steps below to activate the forms.

## 📝 Step 1: Create Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a **free account**
3. Verify your email

## 📋 Step 2: Create Forms

### Contact Form
1. In Formspree dashboard, click **"New Form"**
2. Name it: `Cloudlem Contact Form`
3. Copy the **Form ID** (looks like: `mpbzknyz`)

### Job Application Form
1. Click **"New Form"** again
2. Name it: `Cloudlem Job Applications`
3. Copy the **Form ID**

## 🔧 Step 3: Add Form IDs to Vercel

### In Vercel Dashboard:
1. Go to your project: `cloudlem-website`
2. Click **"Settings"** → **"Environment Variables"**
3. Add two variables:

**Variable 1:**
- **Name:** `NEXT_PUBLIC_FORMSPREE_ID`
- **Value:** `your_contact_form_id` (from Step 2)
- Click **"Save"**

**Variable 2:**
- **Name:** `NEXT_PUBLIC_FORMSPREE_JOB_ID`
- **Value:** `your_job_form_id` (from Step 2)
- Click **"Save"**

4. Go to **"Deployments"** tab
5. Click **"Redeploy"** on the latest deployment

## ✨ Step 4: Test Your Forms

After redeployment:
1. Visit your live site
2. Go to the **Contact** page
3. Fill out and submit the form
4. Check your Formspree dashboard for the submission

## 💡 Free Tier Limits

Formspree free tier includes:
- ✅ 50 submissions per month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ Spam filtering

For more submissions, upgrade to a paid plan.

## 🚀 Alternative: Skip Formspree Setup

If you want to deploy now and set up forms later:
- The website will deploy successfully
- Forms will show an error when submitted (until you add real Form IDs)
- Everything else will work perfectly

---

## Quick Reference

**Files that use Formspree:**
- `app/components/contact/ContactForm.tsx`
- `app/components/careers/JobApplicationModal.tsx`

**Environment Variables:**
- `NEXT_PUBLIC_FORMSPREE_ID` - Contact form
- `NEXT_PUBLIC_FORMSPREE_JOB_ID` - Job application form
