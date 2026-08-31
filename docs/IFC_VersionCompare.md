---
uid: ifc-version-compare-dashboard
title: IFC version comparison dashboard (Power BI)
description: Build an IFC version comparison dashboard in Power BI to detect Added, Deleted, Modified, and Unchanged elements between two IFC revisions with attribute, property, and placement-level change tracking.
keywords: IFC version comparison, IFC diff, BIM model comparison, Power BI IFC diff, Added Deleted Modified elements, IFC change detection, BIM revision tracking, model coordination review
canonical_url: https://docs.flinker.app/docs/IFC_VersionCompare.html
---

# IFC version comparison dashboard

<iframe title="ifcviewer_version_compare" style="width: 100%; aspect-ratio: 16 / 9;" src="https://app.powerbi.com/view?r=eyJrIjoiMzg5MGE3YzktZTQxZC00YWRmLWI2M2UtNDI0ZDc2Mzc2MmM1IiwidCI6IjQ0YjY0MGYzLTQ5YjAtNDMwNC05Yzk4LWM2MWQwYmMwZGMwMiJ9" frameborder="0" allowFullScreen="true"></iframe>

## Overview

The **IFC version comparison dashboard** turns two IFC revisions of the same project into a fully classified change report. Each element is matched across the two files by its `GlobalId` and placed in one of four buckets — **Added**, **Deleted**, **Modified**, or **Unchanged** — with a further breakdown of *what* changed on the modified elements: their attributes, their property set values, their placement coordinates, or any combination of the three.

The dashboard is aimed at **BIM managers**, **design coordinators**, **contractors**, and **reviewers** who need to answer three recurring questions on any project revision:

1. What elements are new or gone between versions?
2. Which elements were touched, and in what way?
3. Where in the building are these changes concentrated?

Everything is visual — two synchronized 3D viewers overlay the Old and New models with per-status coloring, a bar chart summarizes the change-type distribution, and a right-hand HTML detail card renders a full before-and-after comparison for any element selected in the table.

## Input data requirements

Only two inputs are needed — an **Old** IFC file and a **New** IFC file. Everything else is derived automatically inside Power Query.

> **Important:** The two files must represent the *same* project at two points in time. Element matching relies on `GlobalId` staying stable across revisions, which is the default behavior of Revit, ArchiCAD, Tekla, and other authoring tools.

### File format
| Requirement | Value |
| :--- | :--- |
| Schema | `IFC4` or `IFC2X3` (both supported) |
| Encoding | ISO-10303-21 STEP text (`.ifc`) |
| Source | Local path, SharePoint URL, or HTTP URL |

### Parameters
The report exposes two parameters that drive the entire comparison:

| Parameter | Purpose |
| :--- | :--- |
| `FilePath_Old` | Full path or URL to the baseline (Old) IFC file. |
| `FilePath_New` | Full path or URL to the revised (New) IFC file. |

## Setup and configuration guide

### How to link your two IFC files
1. Open the Power BI report (**.pbix**).
2. Go to **Home** > **Transform Data** > **Edit Parameters**.
3. Set **FilePath_Old** to the older revision's path (or SharePoint URL).
4. Set **FilePath_New** to the newer revision's path (or SharePoint URL).
5. Select **OK** and then **Apply Changes**.
6. Wait for the refresh to complete. The dashboard populates automatically.

### How to refresh after a new revision
When a new revision arrives, no report editing is needed:

1. Save the newest IFC file to the same path (or update the path via the parameter step above).
2. In Power BI (or the web viewer), select **Refresh**.
3. The KPI cards, distribution chart, entity matrix, 3D viewers, and detail card all recompute against the new pair.

## Change classification

Every element in either file is assigned exactly one **Change_Status** based on `GlobalId` presence and content comparison.

| Status | Color | Detection rule |
| :--- | :--- | :--- |
| **Added** | Blue `#3498DB` | `GlobalId` exists in **New** only. |
| **Deleted** | Red `#E74C3C` | `GlobalId` exists in **Old** only. |
| **Modified** | Orange `#F39C12` | `GlobalId` exists in both files, and at least one attribute, property, or placement value differs. |
| **Unchanged** | Grey (30% opacity) | `GlobalId` exists in both files, and every tracked field is byte-identical. |

### Modified breakdown
For elements marked **Modified**, the dashboard identifies *what kind* of change was applied. Any element can carry one or more of the following flags:

| Change kind | What it detects |
| :--- | :--- |
| **Attribute** | Any of the direct IFC attributes changed — `Name`, `Description`, `ObjectType`, `Tag`, `LongName`, `CompositionType`, `PredefinedType`, `OverallHeight`, `OverallWidth`, `Building Storey`, `Room Name`. |
| **Property** | Any value in any `IfcPropertySet` or `IfcElementQuantity` (linked via `IfcRelDefinesByProperties`) changed. |
| **Placement** | The element's `IfcLocalPlacement` origin point moved to a different coordinate. |

These flags combine into human-readable labels in the *Modified Elements Distribution* chart — for example **"Attribute and Property"**, **"Property and Placement"**, or **"Attribute and Property and Placement"** — so a single element that had its name renamed, its FireRating updated, and its position shifted is visible as one entry in the triple-change bar.

## Visual composition

| Visual | What it shows |
| :--- | :--- |
| **KPI cards** — Added / Deleted / Modified / Unchanged | High-level totals at file level. |
| **Modified Elements Distribution** (bar chart) | The mix of change kinds across all modified elements — pure Attribute, pure Property, Attribute + Placement, and so on. |
| **Element list** (table) | Every element with `Entity`, `Name`, `Building Storey`, and the human-readable *Change Fields Label*. Filter by SourceFile, Change Status, or Modification Type. |
| **3D model viewer** | Two Flinker IFC Viewer instances (Old on the left, New on the right, or overlaid on a single page) colored by the `Element Color` column so blue/red/orange/grey elements pop against the greyed-out unchanged geometry. |
| **Element detail HTML card** | Select any row in the table and a rich HTML card renders a before/after view — Old attribute values on top, New values below, with a **changed** marker on every diverging field. |

## Filters and slicers

The dashboard ships with three global slicers plus a hidden `Include Row` filter to keep the tables tidy:

| Slicer | Purpose |
| :--- | :--- |
| **SourceFile** | Restrict the view to just the Old or just the New file. |
| **Change Status** | Focus on Added, Deleted, Modified, or Unchanged only. |
| **Modification Type** | Drill into a specific change-kind combination (e.g. "Property and Placement" only). |
| **Include Row** (visual-level filter) | Deduplicates each element to a single canonical row (New-side for Added/Modified/Unchanged, Old-side for Deleted) so the table shows every element exactly once. |

## Technical logic

The comparison engine lives entirely in Power Query (M) and DAX — no external Python, no plug-ins, no service dependencies. On refresh, the parser walks both IFC files line-by-line, extracts every element with a valid 22-character IFC GUID, builds an attribute signature, a placement signature, and a property signature per element, and joins them across the two source files.

### Signatures used for diff
| Signature | Comparison basis |
| :--- | :--- |
| `Attribute Signature` | Pipe-delimited concatenation of 13 direct IFC attributes, normalized for casing and numeric precision (4 decimal places). |
| `Placement_Signature` | Text of the `IfcCartesianPoint` coordinates at the end of the `IfcLocalPlacement` → `IfcAxis2Placement3D` → `IfcCartesianPoint` chain. |
| `Property_Signature` | Sorted concatenation of every `PsetName \| PropertyName=Value` triple attached to the element via `IfcRelDefinesByProperties`. |

If any of the three signatures differs between the Old and New rows for the same `GlobalId`, the element is flagged **Modified** and the corresponding change kind is added to `Change_Fields`.

## Real-world use cases

The dashboard is designed for the two most common IFC-diff scenarios on real projects:

- **Design-phase reviews** — comparing a *DD* (Design Development) submission to the following *CD* (Construction Documents) issue. Property changes highlight scope refinements, placement changes highlight coordination fixes, attribute changes highlight family/type reclassifications.
- **Contractor QA** — comparing the shop-drawing IFC against the tender IFC to isolate every value-engineered removal and every field-added element before it hits the construction sequence.

Because the diff is driven purely by GlobalId matching, it works across authoring tools (Revit, ArchiCAD, Tekla) as long as the two files preserve the same IFC GUIDs — which is the industry-standard behavior.

## Testing and validation

The dashboard has been validated against paired IFC exports from real-world Revit projects (imperial and metric units, structural and architectural disciplines) using an independent IfcOpenShell ground-truth diff for cross-checking. The Added / Deleted / Modified / Unchanged counts, plus the Attribute / Property / Placement change-kind breakdown, match the ground-truth totals element-for-element on the tested datasets.
