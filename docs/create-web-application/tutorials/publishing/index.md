# Tutorial: Publishing Your Web Application

This tutorial guides you through the process of publishing your web application. You'll learn how to preview, publish, and share your application with users.

---

## What You'll Learn

By the end of this tutorial, you'll know how to:
- Preview your application before publishing
- Publish to a live environment
- Configure your application URL
- Share your application with users

---

## Prerequisites

Before publishing:
- Complete your application design
- Test all functionality in the builder
- Configure roles and permissions
- Have all content finalized

---

## Step 1: Final Review Before Publishing

### 1.1 Review All Pages

Go through each page and verify:
- [ ] All content is correct
- [ ] Images are loading properly
- [ ] Links are working
- [ ] Forms are functional

### 1.2 Test Workflows

Verify all interactive elements:
- [ ] Button clicks work correctly
- [ ] Form submissions process properly
- [ ] Navigation flows are correct
- [ ] Conditions show/hide content correctly

### 1.3 Check Access Control

Confirm security settings:
- [ ] Page access restrictions are correct
- [ ] Role-based content displays properly
- [ ] Unauthorized access is handled

---

## Step 2: Preview Your Application

### 2.1 Enter Preview Mode

1. In the Website Builder, click the **Preview** button
2. Your application opens in a new tab/window
3. This shows exactly how users will see it

### 2.2 Test User Flows

Walk through common user scenarios:

**Scenario 1: New Visitor**
1. View home page
2. Navigate to about page
3. Fill out contact form
4. Submit and see confirmation

**Scenario 2: Registered User**
1. Log in
2. Access dashboard
3. Update settings
4. Log out

**Scenario 3: Admin User**
1. Log in as admin
2. Access admin panel
3. Perform admin actions
4. Verify all admin features work

### 2.3 Test on Different Devices

Check responsiveness:
- Desktop (full width)
- Tablet (medium width)
- Mobile (narrow width)

---

## Step 3: Prepare for Publishing

### 3.1 Application Settings

Review your application settings:

1. Go to **Project Settings**
2. Check:
   - Application name
   - Description
   - Favicon/icon
   - SEO settings

### 3.2 Environment Configuration

Ensure production settings are correct:
- API endpoints
- Database connections
- External integrations

---

## Step 4: Publish Your Application

### 4.1 Access Publish Section

1. In the Website Builder, click **Publish** in the toolbar
2. Or go to **Project Settings** → **Publish**

### 4.2 Choose Publish Option

| Option | Description |
|--------|-------------|
| **Preview Environment** | Test version, not public |
| **Production** | Live, accessible to users |

### 4.3 Initiate Publish

1. Select **Production** (or desired environment)
2. Review the publish summary
3. Click **Publish**
4. Wait for deployment to complete

### 4.4 Verify Publication

1. A success message appears with your URL
2. Click the link to view your live application
3. Test key functionality in the live environment

---

## Step 5: Configure Your Domain

### 5.1 Default URL

Your application gets a default URL:
```
https://[your-project].acenji.app
```

### 5.2 Custom Domain (Optional)

To use your own domain:

1. Go to **Project Settings** → **Domain**
2. Enter your custom domain
3. Follow DNS configuration instructions
4. Wait for domain verification
5. Your app is now accessible at your domain

### 5.3 DNS Configuration

Add these records to your domain:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | [your-project].acenji.app |
| A | @ | [IP address provided] |

---

## Step 6: Share Your Application

### 6.1 Share the URL

Send your application URL to users:
- Email invitation
- Link on your website
- Social media
- QR code

### 6.2 Invite Users

If your app requires authentication:

1. Go to **User Management**
2. Click **Invite Users**
3. Enter email addresses
4. Select their role
5. Send invitations

### 6.3 Track Access

Monitor who's using your application:
- View active users
- Check usage statistics
- Review access logs

---

## Step 7: Post-Publish Management

### 7.1 Making Updates

To update your published application:

1. Make changes in the Website Builder
2. Test in preview mode
3. Click **Publish** again
4. Changes go live immediately

### 7.2 Rollback (If Needed)

If something goes wrong:

1. Go to **Project Settings** → **Versions**
2. Find a previous working version
3. Click **Restore**
4. Previous version is published

### 7.3 Monitor Performance

Keep track of your application:
- Check for errors
- Monitor load times
- Review user feedback

---

## Step 8: Ongoing Maintenance

### 8.1 Regular Updates

- Keep content fresh
- Fix reported issues
- Add new features as needed

### 8.2 Security

- Review access logs
- Update permissions as roles change
- Keep integrations up to date

### 8.3 Backup

- Regular backups are automatic
- Can restore from any backup point
- Export data periodically

---

## Publishing Checklist

Before every publish, verify:

- [ ] All pages tested
- [ ] All workflows functional
- [ ] Access control configured
- [ ] Content finalized
- [ ] Mobile responsive
- [ ] Performance acceptable
- [ ] Error handling in place

---

## What You've Learned

In this tutorial, you learned how to:

- Review your application before publishing
- Preview in different scenarios
- Prepare settings for production
- Publish to live environment
- Configure custom domains
- Share with users
- Manage updates after publishing

---

## Congratulations!

You've completed all the web application tutorials. Your application is now live and ready for users!

---

## Next Steps

- Monitor your application's performance
- Gather user feedback
- Plan future enhancements
- Explore advanced features

---

## Troubleshooting

### Publish Failed

- Check for validation errors
- Verify all required settings are complete
- Try publishing again
- Contact support if issue persists

### Application Not Loading

- Verify publish completed successfully
- Check domain configuration
- Clear browser cache
- Try a different browser

### Custom Domain Not Working

- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain ownership verification

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Website Builder - https://help.acenji.com/#/./create-web-application/website-builder/index
<span class="triangle"></span> Getting Started - https://help.acenji.com/#/./getting-started/index
<span class="triangle"></span> Dashboard - https://help.acenji.com/#/./dashboard/index

<style>
.triangle {
display: inline-block;
width: 0;
height: 0;
border-style: solid;
border-width: 5px 0 5px 5px;
border-color: transparent transparent transparent #595959;
margin-left: 10px;
}
</style>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
