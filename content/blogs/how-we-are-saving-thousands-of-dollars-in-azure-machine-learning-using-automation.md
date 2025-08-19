---
title: "How We Are Saving Thousands of Dollars In Azure Machine Learning Using Automation"
date: 2022-04-18T14:30:00+05:30
draft: false
tags: ["Azure"]
categories: ["Cloud"]
description: "Key insights and best practices for building AI systems that scale in production environments"
---

My team works on a strategic project whose vision is to train 5000+ employees to be able to use and apply Artificial Intelligence to the problems in their domain. To achieve this goal, we decided to go ahead with the no-code approach using AutoML in Azure Machine Learning. With this giant goal, it is equally important to save costs at every step while maximizing efficiency. Here are the 5 ways in which we are controlling the costs:

## Automation Scripts
There are lots of automation scripts that are deployed and managed through Azure Runbooks. These scripts run daily and monthly. Users are sent emails if their RG consumes about 80% of the budget. We have a central Subscription where the automation scripts are housed and can be extended to any new Productive Subscription.

## Automatic Deletion and Allocation of Budget
Using a CI-CD pipeline, we create and delete Resource Groups (RG) with a predefined budget. Once the deletion date comes up, the RG gets deleted automatically. Also, when a budget is defined we don't need to monitor the cost of the RG. Automation takes care of this.

## Resource Group Locking
Once the allocated budget has been consumed, an automation script would shut down all the running compute resources and endpoints. The script will also lock the Resource Group and the user is not able to perform further actions like creating or using compute.

## Azure Policies That Restrict Actions
The creation of additional Azure services can add to the cost. Using Azure Policies, we have also barred users from creating other services which are not part of our offering.

## Having a FAQ Page
On this page, we created a sub-page that lists down all the possible ways in which a user can save costs. Users are advised to use the Scheduling option of Compute Instances where the resources get turned on and off based on a defined schedule. For Compute Clusters, we recommend the option to scale down compute nodes when the nodes are idle. This can save a lot of costs.


With all these things in place, we were able to drastically reduce the cost of running our trainings. We are still exploring more options to reduce the cost further (Azure Reservations). Hope this was useful. Let me know how are you reducing the costs in Azure.