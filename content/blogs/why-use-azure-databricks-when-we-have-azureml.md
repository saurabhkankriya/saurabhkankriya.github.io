---
title: "Why Use Azure Databricks When We Have AzureML"
date: 2022-05-08T14:30:00+05:30
draft: false
tags: ["Azure ML", "Databricks"]
categories: ["Azure"]
description: "Using Azure Databricks for Data Processing"
---

Databricks is built on top of open-source Apache Spark. Azure Databricks gives you the service within the Azure ecosystem. More suited for Data Scientists who are comfortable with coding in Python, SQL, R, Scala, JAVA, and .NET. It is a fully managed service for streamlined development.

If you are using Azure, you have 2 options to use services like Azure Databricks and Azure Machine Learning for Data Science Workloads. Both these services can integrate with other Azure services. Let us try to understand why we need Azure Databricks when we already have AzureML.

**Data Size**: Use Azure Databricks if your dataset is huge. Databricks make it easy to process large-scale data for batch and streaming workloads, thanks to the massively parallel Spark engine running beneath the service.

**Distributed Processing and Training**: AzureML also provides compute clusters but you are required to handle the training distribution within your code. On the other hand, Azure Databricks does this implicitly. This delivers hyperscale performance up to 50x gains.

**Switch Languages within cells of a Jupyter notebook**: You switch to Python, SQL, and R within a cell to perform some operation on the data.

**Inbuilt Visualizations**: Basic charts can be easily created in Azure Databricks Notebook from the widget. This is not possible within AzureML.

**Seamless Collaboration**: Data Scientists, Business Analysts, and Data Engineers can quickly work together on a business problem.

AzureML has its advantages like experiment tracking, data-drift monitoring, model registry, easy deployment, etc. Azure Databricks can be used for big data analytics, real-time analytics, or machine learning. It also fits perfectly in the data engineering pipelines. To truly leverage the benefits like smooth operationalization and MLOps, Azure Databricks and AzureML should be used in conjunction rather than anyone service in particular. The choice of the service comes down to your use case.