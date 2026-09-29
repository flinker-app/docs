---
uid: ifc-5d-cost-control-dashboard
title: 5D cost control dashboard (Power BI)
description: Build a model-driven 5D cost control and earned value dashboard in Power BI from an IFC model and one Excel control workbook.
keywords: 5D BIM, IFC cost control, earned value, Power BI IFC cost, BIM cost estimation, CPI SPI EAC, Primavera P6, model-based quantity takeoff
canonical_url: https://docs.flinker.app/docs/IFC_5DCostControl.html
---

# 5D cost control dashboard

This model-driven 5D (cost and time) dashboard turns your IFC model and one Excel control workbook into a live cost and earned value report in Power BI. It shows the 3D model, the budget, the actual cost, and the forecast in one place.

<iframe title="ifcviewer_5D" style="width: 100%; aspect-ratio: 16 / 9;" src="https://app.powerbi.com/view?r=eyJrIjoiMTUxMWUwZmMtZjJiOS00MjQ3LTk2MjItZGZhMjBiOGUyMWRjIiwidCI6IjQ0YjY0MGYzLTQ5YjAtNDMwNC05Yzk4LWM2MWQwYmMwZGMwMiJ9" frameborder="0" allowFullScreen="true"></iframe>

> [!TIP]
> The dashboard calculates planned cost from the model. You set up the mapping and the rates once. Then you enter the actual cost as work progresses.

## How it works

The dashboard follows one chain: element, cost code, quantity multiplied by rate, and activity.

The dashboard matches every element in the IFC model to a cost code. It prices the element from its own geometry (volume, area, length, or count) at the rate you set. Then it rolls the cost up to the Primavera P6 activity that delivers it. When you add schedule progress and actual cost, the dashboard calculates the full earned value picture.

## Download the control workbook

A single control workbook drives the dashboard. It's the only place where you enter data.

- [Download the 5D mapping template](../_media/5D_Mapping_Template.xlsx)

The workbook contains these tables:

| Table | Purpose | What you enter |
|---|---|---|
| `Cost_Code_Map` | Links the model to cost | For each element type (IFC class or predefined type, with the Revit category as a fallback), the cost code and cost category, such as Structure, Envelope, Finishes, MEP, or Substructure |
| `Rate_Card` | Price book | The unit rate for each cost code (per m³, m², m, or item) and a waste allowance |
| `WBS` | Work breakdown structure | The top-level groups for your activities |
| `Task_P6` | Schedule from Primavera P6 | Each activity with its name, dates, percent complete, and actual cost to date |
| `Task_Element` | Links to the schedule | The cost codes, and therefore the elements, that each activity delivers |

## Update the workbook

You only change the workbook. Use this table to find the right place for each change.

| Task | Where to change it |
|---|---|
| Price a new element type | Add a row in `Cost_Code_Map` and add a rate for the cost code in `Rate_Card`. |
| Update a price or apply a new market rate | Edit the unit rate in `Rate_Card`. |
| Match the classification to how you model | Adjust the mapping in `Cost_Code_Map` by IFC class, predefined type, or Revit category. |
| Add or reschedule an activity | Update the dates and percent complete in `Task_P6`, and link its cost codes in `Task_Element`. |
| Record progress | In `Task_P6`, set the percent complete and enter the actual cost for the activity. |

After each change, refresh the report. The numbers, charts, and 3D colors update together.

## Tables in the report

The report is built from nine tables. You edit only the five control tables from the workbook above. The dashboard builds the other four automatically from the model, and you do not edit them.

| Table | You edit | Purpose |
|---|---|---|
| `IFC` | No | The imported IFC model, with every element and its geometry and properties. It is what the 3D viewer draws and the source of every quantity. |
| `FactElements` | No | One row for each building element, carrying its resolved cost code, cost category, quantity, and unit. This is the priced element list that the cost figures are calculated from. |
| `Cost_Code` | No | The cost hub. Each cost code appears once with its description, category, and rate, and it holds the calculations for budget, earned value, the performance indices, and the colors. |
| `Calendar` | No | A continuous date table that drives the time axis of the earned value S-curve. |
| `Cost_Code_Map` | Yes | Maps each element type to a cost code and a cost category. |
| `Rate_Card` | Yes | The unit rate and waste allowance for each cost code. |
| `WBS` | Yes | The work breakdown structure that the activities sit under. |
| `Task_P6` | Yes | The schedule activities, with dates, percent complete, and actual cost. |
| `Task_Element` | Yes | Links each cost code to the activity that delivers it. |

## What the dashboard calculates

When the IFC model and the workbook are in place, the dashboard does the following:

- Prices the model by multiplying each element quantity by its rate and rolling the result up to cost codes, cost categories, and activities. The grand total is the Budget at Completion (BAC).
- Tracks earned value by calculating Earned Value (EV), Planned Value (PV), and Actual Cost (AC) from percent complete and actual cost. It also calculates the Cost Performance Index (CPI), the Schedule Performance Index (SPI), and the Estimate at Completion (EAC).
- Colors the 3D model and uses a red, amber, and green scale in the performance charts so over-budget work stands out.
- Cross-filters all visuals. Select a cost category, cost code, or activity to isolate those elements in the 3D model. Select an element in the model to filter every cost chart.

## Report pages

The report has two pages.

### 5D cost control

This page shows where the money is.

| Visual | What it shows |
|---|---|
| KPI cards | The headline numbers: Budget at Completion, actual cost to date, cost variance, CPI, percent complete, and the share of elements priced. |
| 3D model viewer | The IFC model in 3D, colored by cost category so each trade is visible in place. Selecting a category, cost code, or activity isolates its elements. |
| Cost by category | One bar for each cost category (Structure, Envelope, Finishes, MEP, Substructure), showing its share of the budget. |
| Top cost drivers | The largest cost items, ranked, with each bar colored red, amber, or green by its cost performance. |
| Cost matrix (WBS to cost code) | A table that drills from the work breakdown structure down to each cost code, with quantity, rate, planned cost, and CPI. |

### Earned value and forecast

This page shows how the project is performing.

| Visual | What it shows |
|---|---|
| KPI cards | Earned Value, Planned Value, Actual Cost, CPI, SPI, and the Estimate at Completion. |
| Cost S-curve | Planned, earned, and actual cost accumulated over time, so plan and performance can be compared at a glance. |
| 3D model viewer | The same IFC model, colored red, amber, or green by each element's cost performance. |
| Earned value by activity | A table of each P6 activity with its planned cost, earned value, actual cost, and CPI. |
| CPI by activity | A diverging bar for each activity around 1.0, colored red, amber, or green. Right of center is on or under budget; left is over budget. |

## Color scale

The performance visuals share one red, amber, and green scale based on CPI:

| Color | Meaning | CPI |
|---|---|---|
| Green | On or under budget | 1.00 or higher |
| Amber | Slightly over budget | 0.90 to 0.99 |
| Red | Over budget | Lower than 0.90 |

The 3D model can follow the same red, amber, and green scale, so you see where cost performance needs attention in place. You can also color it by cost category to see each trade across the building.