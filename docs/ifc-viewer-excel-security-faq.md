---
uid: ifc-viewer-excel-security-faq
title: Security FAQ for the IFC Viewer Excel add-in
description: Security assessment questions and answers for IT security, compliance, and procurement teams evaluating the Flinker IFC Viewer Excel add-in.
keywords: IFC Viewer, Excel add-in, security FAQ, security assessment, updates, digital signing, penetration testing, critical infrastructure, GDPR, NIS 2, OWASP, ISO 27001, Copilot data flow
canonical_url: https://docs.flinker.app/docs/ifc-viewer-excel-security-faq.html
audience: it-admins, security, compliance, procurement
product: microsoft-excel
---
# Security FAQ — Flinker IFC Viewer for Microsoft 365

Architecture summary: the IFC Viewer is a client-side Microsoft 365 add-in. IFC files, geometry, property sets and documents are processed in the browser and remain in the customer's tenant or on the user's device. Flinker operates no project-data repository and receives no model content. Full data flow: [https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html)

## How are updates delivered and digitally signed?

Distribution is exclusively through Microsoft AppSource. There is no installer and no binary deployed to the workstation, so no code-signing certificate applies. Microsoft validates every marketplace submission before publication, and add-in assets are delivered over TLS from our Azure CDN. Enterprise customers can additionally pin versions and receive controlled LTS releases rather than tracking the public channel.

## Is the product independently penetration tested?

We do not publish a standing third-party penetration test report. The relevant point for an assessment is what could be tested: the add-in exposes no service, accepts no inbound connections, stores no credentials, holds no customer data and holds exactly one permission, scoped to the open workbook. The testable perimeter is Microsoft 365 itself. For enterprise assessments we support customer-side testing and can agree on scope.  We do not currently provide an independent third-party penetration-test report for the Excel add-in. The solution benefits from Microsoft’s Office Add-in runtime isolation and permission controls, with Excel access scoped to the current workbook. The Add-in processes model data locally, avoiding a separate Flinker-hosted project-data repository. For enterprise assessments, we support customer-led security testing under an agreed scope covering the add-in, its dependencies and supporting Flinker services.

## Compliance to international regulatory requirements and standards for critical infrastructures

Flinker holds no critical-infrastructure certification under any international regime, and none applies to this component. Such regimes regulate operators and the systems within their operational chain. The IFC Viewer is neither: it is a client-side viewing and analysis add-in that runs inside the customer's Microsoft 365 tenant, holds no data of its own, and has no interface to operational technology. Where an operator must flow supplier obligations down under a specific regime, we address these contractually as part of an Enterprise agreement.

## Compliance to EU and national regulatory requirements and standards for critical infrastructures

Flinker holds no certification under EU or national critical-infrastructure regulation, and none is applicable to this component. Critical-infrastructure regimes regulate operators and the systems in their operational chain. The IFC Viewer is neither: it is a client-side viewing and analysis add-in with no role in operations, no data of its own, and no connection to operational technology. The regulatory perimeter remains with the operator and with Microsoft as the platform provider. Where an operator must flow obligations down to suppliers, we support this contractually.

## Are you in compliance with EU GDPR privacy requirements?

Yes. Flinker GmbH is a German company and processes exclusively within the EU. Project data, model content and documents never reach us. Technical metadata is limited to the tenant ID, workbook-hostname, optionally a user email address where required for login or support, and anonymised usage telemetry. This metadata is pseudonymised and encrypted, and access is restricted to authorised Flinker personnel in Germany. A Data Processing Agreement is available at [https://flinker.app/legal/dpa](https://flinker.app/legal/dpa).&#x20;

## Copilot for IFC and data flow

On the Enterprise plan, Copilot for IFC runs against your organisation's own Azure AI resources. Prompts and model-derived results stay inside your tenant. No project data reaches Flinker.

On the free Community plan, intended for small teams and SMEs, there is no customer-side Azure resource to run inference on. Prompts and the model-derived context they reference are therefore transmitted to Flinker's Azure environment in the EU for the duration of the request, processed transiently and not retained. IFC files, geometry and documents are never transmitted, only the query and the element data it refers to. Organisations that require model-derived data to remain within their own boundary should use the Enterprise plan, where Copilot for IFC runs on the organisation's own Azure AI resources and no project data reaches Flinker.

## Are you in compliance with NIS 2?

Flinker is not itself an essential or important entity under NIS 2 and therefore not a directly regulated entity. Where NIS 2 is relevant is supply-chain security under Article 21(2)(d), and the material fact for that assessment is that no project data, model content or documents are transmitted to or stored by Flinker. A compromise on our side would not expose operator data. We support supplier security requirements, including contractual security clauses, incident notification obligations and framework agreements, as part of an Enterprise agreement.

## Are you in compliance with secure coding standards and guidelines (e.g. OWASP, NIST, SANS)?

Development follows OWASP-aligned practices, with dependency scanning and code review in the release process. Every release additionally passes Microsoft's AppSource validation before publication. We hold no formal certification against a secure-coding standard. The architectural point that limits exposure: the add-in processes no server-side input, exposes no API, and handles no authentication of its own — identity and authorisation are Microsoft Entra ID throughout.

## Are you certified according to ISO/IEC 27001:2022 for the provided services?

No, Flinker GmbH is not ISO/IEC 27001 certified. The certified boundary that matters for your data is Microsoft's, because your data stays there: IFC files and documents remain in your Microsoft 365 tenant under your own controls, and Azure, where our metadata backend runs, is ISO/IEC 27001 certified. Flinker operates no project-data repository, so there is no additional data boundary for a certification to cover.
