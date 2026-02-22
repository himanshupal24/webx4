# How to Connect Your Contact Form to Google Sheets

Since we are not using a traditional database, we can use a free Google Sheet to store all your leads. This is zero-maintenance and instant.

### Step 1: Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new blank sheet.
2. Name it `Webx4 Leads`.
3. In the first row, add these headers:
   - **Column A**: Date
   - **Column B**: Name
   - **Column C**: Email
   - **Column D**: Phone
   - **Column E**: Type
   - **Column F**: Budget
   - **Column G**: Details

### Step 2: Add the Apps Script
1. In your new Google Sheet, click `Extensions` > `Apps Script`.
2. Delete any code in the editor and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name, 
    data.email, 
    "'" + data.phone, // Prepend ' to prevent formula errors with + country codes
    data.type,
    data.budget, 
    data.details
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
}
```

3. Press `Ctrl + S` (or Cmd + S) to save. Name the project "LeadWebhook".

### Step 3: Deploy the Web App
1. Click the blue **Deploy** button > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Settings:
   - **Description**: Contact Form Webhook
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (This is critical so your website can send data)
4. Click **Deploy**.
5. You might be asked to "Authorize access". Click "Review permissions", select your account, then click "Advanced" > "Go to LeadWebhook (unsafe)" (it is safe, it's your own script).
6. Copy the **Web App URL** (it ends with `/exec`).

### Step 4: Connect to Your Website
1. Create a file named `.env.local` in the root of your project (`webx4/`).
2. Add the following line:

```env
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_COPIED_ID/exec
```

3. Restart your development server (`npm run dev`).

✅ **Done!** Every time someone fills out the contact form, a new row will instantly appear in your Google Sheet.
