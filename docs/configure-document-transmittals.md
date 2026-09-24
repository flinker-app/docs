---
uid: configure-document-transmittals
title: Set up document transmittals in SharePoint
description: Set up document transmittals with SharePoint Document Sets, captured versions, delivery records, and optional receipt acknowledgments in Teams.
keywords: document transmittals, transmittal process, SharePoint, Microsoft Teams, Document Sets, ISO 19650, receipt acknowledgment
canonical_url: https://docs.flinker.app/docs/configure-document-transmittals.html
---
# Set up document transmittals in SharePoint

A document transmittal records which documents were sent, to whom, and when, together with any receipt evidence. Using SharePoint keeps the issued package with your project files, permissions, and version history.

The basic flow is: create a Document Set, add the documents, capture a version, and send the package link. Use Teams Approvals optionally when a named recipient must explicitly confirm `Received`. These Microsoft 365 features can be used alongside the ISO 19650 app.

## Enable Document Sets in SharePoint

A site collection administrator enables the feature. A site owner configures the library.

1. Open **Settings** > **Site information** > **View all site settings**.
2. Under **Site collection features**, activate **Document Sets**.
3. Open your document library's **Library settings** > **More library settings**, if shown.
4. In **Advanced settings**, set `Allow management of content types` to `Yes`.
5. Select **Add from existing site content types**, choose **Document Set Content Types**, and add **Document Set**.
6. In **Versioning settings**, enable file version history.

Use the built-in content type. Custom columns are optional. See Microsoft's guidance on [enabling Document Sets](https://support.microsoft.com/en-us/sharepoint/libraries/create-and-configure-a-new-document-set-content-type) and [adding content types to a library](https://support.microsoft.com/en-us/sharepoint/documents-and-library/add-a-content-type-to-a-list-or-library).

## Create and capture the package

1. Select **New** > **Document Set**.
2. Use **Name** for a unique transmittal ID, such as `TR-2026-0042`, and **Description** for its purpose, such as `For information`.
3. Add the issued documents and IFC models. Check in the files and publish or approve them if required by the library.
4. In the modern SharePoint library, right-click the Document Set row and select **Capture version**.
5. Add the transmittal ID in the capture comment and confirm that the intended file versions are included.
6. Open **Version history** and note the captured version reference for the transmittal message.
7. Grant the recipients read access and check that the package link shows the intended issue.

Microsoft documents **Capture Version** and **Version History** in the [modern Document Set context menu](https://techcommunity.microsoft.com/discussions/sharepoint_general/update-document-sets-in-modern-document-libraries/464058). If the command is unavailable in your library, ask the site owner to check the setup; the [classic **Manage** > **Capture Version** command](https://support.microsoft.com/en-us/sharepoint/libraries/create-and-manage-document-sets) is a fallback.

> [!NOTE]
> Capture Version records a snapshot of the package's documents and properties. Its normal link opens the current contents. Keep the package unchanged while recipients access the issue. If you later reuse the Document Set, capture a new version and identify it in a new transmittal message.

## Send and record the handoff

1. Send the package link from the project mailbox. Include the transmittal ID, captured version reference, issue purpose, and any required action.
2. Retain the sent message and any delivery receipt, recipient acknowledgment, or authority portal receipt. A sent message alone does not confirm receipt.
3. For incoming documents, retain the original message and attachments with their received date, and send an acknowledgment if agreed.

## Optional receipt acknowledgment in Teams

Use this option when you need a named person to confirm receipt of the package.

Make sure the [Approvals app is available and its prerequisites are met](https://learn.microsoft.com/en-us/microsoftteams/approval-admin). Sending a request does not grant access to the SharePoint files.

1. Open **Approvals** in Teams and select **New approval request**.
2. Use the transmittal ID in the title. Add the package link, captured version reference, issue purpose, and any response deadline in the details.
3. Select the recipients. Enable **Require a response from all approvers** if everyone must acknowledge.
4. Enable **Custom responses** and enter `Received` and `Unable to receive`.
5. Ask recipients to check that they can access the complete package, then send the request.
6. Open the request in **Sent** to review responses and follow up on missing acknowledgments.

See Microsoft's instructions for [Teams approval requests](https://learn.microsoft.com/en-us/power-automate/teams/create-approval-from-teams-app) and [custom responses](https://learn.microsoft.com/en-us/power-automate/teams/create-approval-from-chat).

`Received` confirms receipt only. Keep [technical approval](manage-iso-19650-document-approvals.md) separate, and agree the delivery method with the recipient or authority.

## Keep the evidence

Use Document Set **Version history** to identify the issued content. Keep the transmittal message and available receipt evidence. If you used Teams Approvals, retain its request and response details too. The transmittal ID and captured version reference connect these records.

Keep these records for the project's required period. Ask your administrator to check [SharePoint version limits](https://learn.microsoft.com/en-us/sharepoint/document-library-version-history-limits), mailbox retention, and, if used, [approval record retention](https://learn.microsoft.com/en-us/microsoftteams/approval-admin).

## Optional automation

The manual process requires no custom Power Automate flow. Add one only for automatic requests, reminders, or recording responses elsewhere. [Teams Approvals already uses Power Automate infrastructure](https://learn.microsoft.com/en-us/power-automate/teams/native-approvals-in-teams).
