# Tutorial: Publishing to App Stores

This tutorial guides you through publishing your ACENji mobile application to the Apple App Store and Google Play Store. You'll learn the complete process from preparation to live deployment.

---

## What You'll Learn

By the end of this tutorial, you'll know how to:
- Prepare your app for submission
- Configure app store listings
- Submit to Apple App Store
- Submit to Google Play Store
- Handle the review process

---

## Prerequisites

Before publishing:
- Complete development of your app
- Test thoroughly on actual devices
- Have developer accounts (Apple and/or Google)
- Prepare marketing assets (icons, screenshots)

---

## Step 1: Final App Preparation

### 1.1 Complete Testing

Before publishing, verify:

- [ ] All features work correctly
- [ ] No crashes or errors
- [ ] Performance is acceptable
- [ ] Offline behavior works (if applicable)
- [ ] All content is finalized

### 1.2 Check App Settings

Review these settings in your project:

| Setting | Description |
|---------|-------------|
| **App Name** | Display name on device |
| **Bundle ID** | Unique identifier (com.company.appname) |
| **Version** | Version number (1.0.0) |
| **Build Number** | Internal build identifier |

### 1.3 Prepare App Assets

You'll need these assets:

| Asset | Requirement |
|-------|-------------|
| **App Icon** | 1024x1024 px |
| **Screenshots** | Various device sizes |
| **App Preview** | Optional video |
| **Description** | App store listing text |

---

## Step 2: Developer Account Setup

### 2.1 Apple Developer Account

**Requirements:**
- Apple Developer Program membership ($99/year)
- Valid payment method
- D-U-N-S number (for organizations)

**Setup:**
1. Go to developer.apple.com
2. Click "Account"
3. Sign in or create account
4. Enroll in Apple Developer Program
5. Complete payment

### 2.2 Google Play Developer Account

**Requirements:**
- Google Play Console account ($25 one-time)
- Google account
- Valid payment method

**Setup:**
1. Go to play.google.com/console
2. Sign in with Google account
3. Pay registration fee
4. Accept developer agreement
5. Complete profile

---

## Step 3: Build Your App

### 3.1 Access Build Options

1. Open your project in ACENji
2. Go to **Publish** section
3. Select **Build for Stores**

### 3.2 Configure Build Settings

**For iOS:**
```
Bundle Identifier: com.yourcompany.appname
Version: 1.0.0
Build: 1
Minimum iOS: 13.0
Deployment Target: iPhone, iPad (optional)
```

**For Android:**
```
Package Name: com.yourcompany.appname
Version Name: 1.0.0
Version Code: 1
Minimum SDK: 21 (Android 5.0)
Target SDK: 33 (Android 13)
```

### 3.3 Generate Builds

1. Click **Build iOS** and/or **Build Android**
2. Wait for build to complete
3. Download the build files:
   - iOS: .ipa file
   - Android: .aab file (Android App Bundle)

---

## Step 4: Prepare Store Listings

### 4.1 Write Your Description

Create compelling store listing text:

**Title:** Your App Name (30 char limit for iOS)

**Subtitle:** Brief tagline (30 char for iOS)

**Description:** Full description of features and benefits

**Keywords:** Relevant search terms (iOS)

### 4.2 Create Screenshots

Required sizes vary by device:

**iOS:**
| Device | Size |
|--------|------|
| iPhone 6.7" | 1290 x 2796 |
| iPhone 6.5" | 1284 x 2778 |
| iPhone 5.5" | 1242 x 2208 |
| iPad 12.9" | 2048 x 2732 |

**Android:**
- Minimum 2 screenshots
- Recommended 8 screenshots
- Minimum 320px, maximum 3840px

### 4.3 Prepare Additional Info

| Item | Description |
|------|-------------|
| **Privacy Policy URL** | Required for both stores |
| **Support URL** | Where users get help |
| **Marketing URL** | Optional website link |
| **Contact Email** | Support email address |

---

## Step 5: Submit to Apple App Store

### 5.1 Access App Store Connect

1. Go to appstoreconnect.apple.com
2. Sign in with developer account
3. Click **My Apps**
4. Click **+** to create new app

### 5.2 Create App Record

Fill in required information:

```
Platform: iOS
Name: Your App Name
Primary Language: English (US)
Bundle ID: Select from list
SKU: Unique identifier
User Access: Full access
```

### 5.3 Upload Build

**Using Xcode or Transporter:**
1. Download Transporter from Mac App Store
2. Sign in with developer account
3. Drag your .ipa file
4. Click Deliver

**Wait for processing** (can take 15-30 minutes)

### 5.4 Complete App Information

**Version Information:**
- Screenshots for each device size
- App preview video (optional)
- Description
- Keywords
- Support URL
- Marketing URL

**General Information:**
- App category
- Content rating
- Age rating questionnaire
- Copyright
- Contact information

**App Privacy:**
- Privacy policy URL
- Data collection practices

### 5.5 Submit for Review

1. Verify all information
2. Click **Submit for Review**
3. Answer review questions
4. Wait for review (1-7 days typically)

---

## Step 6: Submit to Google Play Store

### 6.1 Access Play Console

1. Go to play.google.com/console
2. Sign in with developer account
3. Click **Create app**

### 6.2 Create App

Fill in initial information:

```
App name: Your App Name
Default language: English (US)
App or game: App
Free or paid: Choose option
Accept declarations
```

### 6.3 Set Up Your App

Complete the setup dashboard:

**Store Listing:**
- Short description (80 characters)
- Full description (4000 characters)
- Screenshots (phone, tablet)
- Feature graphic (1024 x 500)
- App icon (512 x 512)

**Content Rating:**
- Complete the questionnaire
- Receive ratings for different regions

**App Content:**
- Privacy policy
- Ads declaration
- Target audience
- News apps declaration

### 6.4 Upload Build

1. Go to **Production** → **Releases**
2. Click **Create new release**
3. Upload your .aab file
4. Add release notes
5. Review and roll out

### 6.5 Submit for Review

1. Complete all required items in dashboard
2. Review app release
3. Click **Start rollout to Production**
4. Wait for review (hours to days)

---

## Step 7: Handle App Review

### 7.1 Apple Review Process

**Timeline:** 1-7 days typically

**Common Rejection Reasons:**
- Crashes or bugs
- Incomplete information
- Guideline violations
- Privacy issues

**If Rejected:**
1. Read the rejection message carefully
2. Make necessary fixes
3. Resubmit through App Store Connect

### 7.2 Google Review Process

**Timeline:** Hours to a few days

**Common Issues:**
- Policy violations
- Missing information
- Content issues

**If Rejected:**
1. Check the Play Console for details
2. Address the issues
3. Resubmit the release

---

## Step 8: Post-Launch

### 8.1 Monitor Performance

Track your app's performance:

| Metric | Where to Find |
|--------|---------------|
| Downloads | Store analytics |
| Crashes | App Store Connect / Play Console |
| Reviews | Store listings |
| Revenue | Financial reports |

### 8.2 Respond to Reviews

- Address user feedback
- Fix reported issues
- Thank positive reviewers

### 8.3 Plan Updates

Regular updates show active development:
- Bug fixes
- New features
- Performance improvements

---

## Publishing Checklist

### Before Submission

- [ ] App tested thoroughly
- [ ] All content finalized
- [ ] Icons and screenshots ready
- [ ] Privacy policy published
- [ ] Developer accounts active

### Store Listing Complete

- [ ] App name and description
- [ ] Screenshots uploaded
- [ ] Category selected
- [ ] Content rating completed
- [ ] Contact information added

### Submission

- [ ] Build uploaded successfully
- [ ] All required fields completed
- [ ] Review questions answered
- [ ] Submitted for review

---

## Best Practices

1. **Test on real devices** - Simulators miss real-world issues

2. **Start early** - Account setup takes time

3. **Prepare assets carefully** - Good screenshots improve downloads

4. **Write compelling descriptions** - Sell the benefits

5. **Plan for rejection** - First submissions often need fixes

6. **Schedule releases** - Avoid holidays and weekends

---

## Troubleshooting

### Build Upload Failed

- Check bundle ID matches
- Verify signing certificates
- Ensure build number is incremented

### Rejection for Crashes

- Check crash logs
- Test on multiple devices
- Fix and resubmit

### Missing Information Error

- Complete all required fields
- Verify all assets uploaded
- Check all declarations signed

### Long Review Time

- Wait patiently (especially Apple)
- Check for rejection messages
- Ensure app meets guidelines

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Mobile Tutorials - https://help.acenji.com/#/./create-native-mobile-app/tutorials/index
<span class="triangle"></span> Apple Developer Program - https://developer.apple.com/programs/
<span class="triangle"></span> Google Play Console - https://play.google.com/console

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
