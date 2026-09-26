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

## What the dashboard calculates

When the IFC model and the workbook are in place, the dashboard does the following:

- Prices the model by multiplying each element quantity by its rate and rolling the result up to cost codes, cost categories, and activities. The grand total is the Budget at Completion (BAC).
- Tracks earned value by calculating Earned Value (EV), Planned Value (PV), and Actual Cost (AC) from percent complete and actual cost. It also calculates the Cost Performance Index (CPI), the Schedule Performance Index (SPI), and the Estimate at Completion (EAC).
- Colors the 3D model by cost category, and uses a red, amber, and green scale in the performance charts so over-budget work stands out.
- Cross-filters all visuals. Select a cost category, cost code, or activity to isolate those elements in the 3D model. Select an element in the model to filter every cost chart.

## Report pages

The report has two pages.

### 5D cost control

This page shows where the money is. It includes the headline figures (BAC, actual cost, variance, CPI, and percent complete), cost by category, the top cost drivers, a cost matrix from WBS down to cost code, and the 3D model colored by cost category.

### Earned value and forecast

This page shows how the project performs. It includes the earned value S-curve (planned, earned, and actual over time), the forecast at completion, an earned value table by activity, and CPI by activity.

## Color scale

The performance visuals use one red, amber, and green scale based on CPI:

| Color | Meaning | CPI |
|---|---|---|
| Green | On or under budget | 1.00 or higher |
| Amber | Slightly over budget | 0.90 to 0.99 |
| Red | Over budget | Lower than 0.90 |

On the first page, the 3D model is colored by cost category so you can see each trade in place. On the second page, the model uses one neutral color so the earned value data stays in focus.
