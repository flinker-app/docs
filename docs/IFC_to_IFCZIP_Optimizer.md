---
uid: IFC_to_IFCZIP_Optimizer
title: Optimize IFC models for the Power BI IFC Viewer
description: Strip property data from IFC or IFCZIP files inside a Microsoft Fabric notebook and hand smaller, faster-loading .ifczip archives to Power BI. Explore the sample report and see how the LTU A-House services set drops from megabytes to a fraction of the size.
keywords: IFCZIP optimizer, IFC memory Power BI, IfcOpenShell property remove, Microsoft Fabric notebook, BIM viewer memory footprint, ifczip vs ifc, Power BI IFC Viewer performance
canonical_url: https://docs.flinker.app/docs/IFC_to_IFCZIP_Optimizer.html
---

# Optimize IFC models for the Power BI IFC Viewer

Full IFC models carry more data than the Power BI IFC Viewer actually renders. Property sets, quantity values, classifications, and reference documents all get parsed into memory even though none of them show on screen. This page describes a lighter path: strip that data once inside a Microsoft Fabric notebook, package the trimmed model as an `.ifczip` archive, and hand a smaller file to Power BI. Nothing about how the model looks changes.

## Explore the sample report

Below is a report loading the LTU A-House services set after each file has been passed through the optimizer. Switch between models with the Filename slicer and watch how quickly the viewer swaps datasets even for the heavier mechanical services.

<iframe title="IFC&IFCZIP_Parser" width="100%" height="540" src="https://app.powerbi.com/view?r=eyJrIjoiOTZmNDg5NzQtNTQxNS00NjQ3LWE2NTItYzg1ZWVmODllOTc4IiwidCI6IjQ0YjY0MGYzLTQ5YjAtNDMwNC05Yzk4LWM2MWQwYmMwZGMwMiJ9" frameborder="0" allowFullScreen="true"></iframe>

Every model in the report was processed end to end through the workflow described further down. Their before/after footprints are:

| Model | Source IFC size | Optimized `.ifczip` size |
|------|----------------|------------------------|
| LTU A-House – Air        | 24.2 MB | 4.36 MB |
| LTU A-House – Cooling    | 30.8 MB | 5.69 MB |
| LTU A-House – Ducting    | 7.99 MB | 1.39 MB |
| LTU A-House – Heating    | 32.6 MB | 6.04 MB |
| LTU A-House – K-modell   | 30.9 MB | 3.24 MB |
| LTU A-House – Plumbing   | 69.6 MB | 12.8 MB |
| LTU A-House – Redesign   | 173.0 MB | 32.3 MB |
| LTU A-House – Sanitation | 25.7 MB | 5.10 MB |
| LTU A-House – Voids      | 24.1 MB | 4.35 MB |

The reduction comes from two effects that stack together. Removing the property entities cuts the number of STEP lines the underlying IFC contains, and repackaging the result as `.ifczip` applies deflate compression on top. Across the LTU A-House set the combined effect settles around a 5x to 10x reduction with no visible difference in the viewer.

## What the optimizer removes and keeps

The optimizer targets everything the Power BI IFC Viewer never draws:

* Every `IfcPropertySet` and quantity set attached to a product.
* Every property value (`IfcPropertySingleValue`, `IfcPropertyEnumeratedValue`, and the rest of `IfcProperty`) and every physical quantity under `IfcPhysicalQuantity`.
* Every `IfcClassification`, `IfcClassificationReference`, `IfcDocumentInformation`, `IfcDocumentReference`, `IfcLibraryInformation`, and `IfcLibraryReference`.
* The relationships that used to tie those entities to products: `IfcRelDefinesByProperties`, `IfcRelAssociatesClassification`, `IfcRelAssociatesDocument`, `IfcRelAssociatesLibrary`, and their siblings.

Everything the viewer relies on is preserved: geometry, spatial hierarchy from `IfcSite` down to `IfcSpace`, object identifiers (`GlobalId`, `Name`, `Tag`), material assignments, appearance styles, type objects, and the owner history metadata. The IFC schema of the input (IFC2X3, IFC4, IFC4X3) also carries through unchanged.

## The optimization pipeline

A Microsoft Fabric notebook uses [IfcOpenShell](https://ifcopenshell.org/) to open the source IFC or IFCZIP, remove the entities listed above in a safe order so no inverse references end up dangling, and repackage the result as a `.ifczip` archive. Two cells do the work:

1. Install the optimizer wheel.
2. Call `optimize_ifc(source, output)` and validate the result.

The output `.ifczip` sits next to the input in the same folder and can be pointed at from any Power BI IFC Viewer template that already accepts IFC files.

## Run the optimizer in Fabric

### Option A: Import the shared notebook

The fastest path is to import the provided `.ipynb` straight into your workspace.

In your Fabric workspace, open the **Import status** panel and click **Upload**. Select the `IFC_to_IFCZIP_Optimizer_Notebook.ipynb` file from your local drive. Once uploaded, the notebook appears in your workspace items list. *Figure 1* shows the sequence: click **Upload** (arrow 1), pick the `.ipynb` file (arrow 2), and confirm it appears in the workspace items list (arrow 3).

![Upload the .ipynb file and confirm it appears in the workspace](../_media/Import_a_Notebook1.png)

*Figure 1: Notebook upload workflow.*

If the Import status panel is not visible, open it from the workspace toolbar via **Import**, then **Notebook**, then **From this computer**, a similar example to load a notebook from your pc is shown in *Figure 2*.

![Import a notebook from the workspace toolbar](../_media/Import_a_Notebook2.png)

*Figure 2: Workspace toolbar Import menu navigation.*

Open the imported notebook and switch to the **Resources** tab on the left. Under **Built-in**, click the **...** menu and choose **Upload files**. Upload:

* `ifc_optimizer-0.1.0-py3-none-any.whl` (the optimizer package, required once per notebook).
* Your source model as either `.ifc` or `.ifczip` (for example `LTU_A-House_Redesign.ifc`).

Then edit the source-file parameter at the top of the second code cell so it matches the file you just uploaded.

Both the optimizer wheel and the input model must be present in `./builtin/` before running the notebook.*

Click **Run all**. The notebook installs the dependencies, runs the optimization, and prints an `OptimizationStats` summary followed by the validation output. The generated `.ifczip` appears next to the input inside `./builtin/`, with the same base name and an `.ifczip` extension.

### Option B: Add optimization to an existing pipeline

If you already have a Fabric notebook that ingests IFC files, upload `ifc_optimizer-0.1.0-py3-none-any.whl` alongside your source model, install it once per notebook, and call `optimize_ifc(source, output)` on the input path. The function accepts both `.ifc` and `.ifczip` sources and writes a valid `.ifczip` archive to the output path you choose. Call `validate_ifczip(output)` afterwards to confirm the archive integrity and that no property entities survived.

> **Built-in resources size limits:** A single file uploaded to a notebook's Built-in resources is capped at **100 MB**, with **500 MB** total. For sources larger than 100 MB, store the input inside a Lakehouse `Files/` folder and adjust the source path accordingly.

## Point your Power BI report at the optimized file

The Power BI IFC Viewer template accepts `.ifczip` through the same `Filepath` parameter used for raw IFC files. Paste the URL or full path of the optimized archive into `Filepath` and click **Refresh**. The viewer opens the archive, reads the `.ifc` inside, and renders the model.

Loading a mix of `.ifczip` and `.ifc` in the same report works out of the box because the report unwraps the archive before parsing, so both sources produce identical column schemas. For the full parameter, slicer, and visual setup walkthrough, see [Build reports with the IFC Viewer](https://docs.flinker.app/docs/ifc-viewer-usage-for-power-bi.html).

## Choosing between `.ifczip` and raw `.ifc`

Choose `.ifczip` whenever the report is driven by geometry: 3D navigation, element selection, GUID-based highlighting, or BCF integration. Every visual you can build against a full IFC also works against the optimized archive, since materials, styles, and spatial structure are preserved.

Keep the full `.ifc` when the report also drives slicers or tables off property sets, quantity sets, or classifications. Those values are stripped by the optimizer, so any visual that depends on them will read blank. For dashboards that need both a fast 3D view and rich attribute filtering.
