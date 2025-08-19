---
title: "3 Practices I Wish I Knew Before To Put Machine Learning Models Into Production"
date: 2022-04-28T14:30:00+05:30
draft: false
tags: ["Machine Learning", "Deployment"]
categories: ["Machine Learning"]
description: "Key practices for deploying machine learning models successfully"
---

Some common phases of a Machine Learning project include requirements gathering from business, setting up data pipelines, model training, data and model versioning, and model serving. Here, I focus on my thought process after a model is accepted to be placed into production.

## 1. The Mindset Shift
Putting the model into production is more of an engineering job. You have to think from the perspective of a software engineer and not as a data scientist. The reason being a software engineer thinks of the entire end-to-end system. Sometimes, also requires the knowledge of DevOps if a dedicated team isn't available. After the model training phase is done, the problems you'll face are likely going to be practical engineering problems.

## 2. Monitoring Data Quality:
The most critical part of any ML project is the data. Models are built around the data and models are of secondary importance. Having custom code or using tools (Evidently) can greatly help in discovering inconsistencies, quality issues, data drift, etc.

## 3. Focus on Pipelines:
Design pipelines first. Take the model and work your way up to set up the infra. Using the design-first approach can help you a lot. Make the entire pipeline consist of components. Let's say you need to retrain your model for new data without disturbing the entire flow of the project. Having a pipeline helps in the maintenance and documentation of the project.

There are a lot of things that go in the background while putting models into production. A thoughtful perspective can mitigate ton of unseen problems. Hope this short essay gave you some insights. Let me know what you think.