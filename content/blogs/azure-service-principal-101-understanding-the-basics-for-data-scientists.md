---
title: "Azure Service Principal 101: Understanding the Basics for Data Scientists"
date: 2022-12-20T16:30:00+05:30
draft: false
tags: ["Azure", "Data Science"]
categories: ["Cloud Computing"]
description: "A comprehensive guide to Azure Service Principals for data scientists"
---

## Service Principal in Azure
A Service Principal (SP) is an identity that is used by applications, services and APIs to access resources in Azure. Its primary use is to authenticate and authorize applications or services access to Azure Resources.

SP is a secure identity based on Azure Active Directory (AD)-based authentication. SP is associated with a specific Azure AD tenant and can be granted different levels of access to resources within that tenant. You can think of SP as a technical user who is primarily used for tasks such as:

- accessing data on storage accounts
- building and running pipelines
- workflow automation
- scheduling a job
- getting secrets from the Azure Key-Vault
- managing resources

A SP comes into the picture when you want to enable Azure AD-based authentication for applications and services that are running in production workloads.

## Service Principal vs User Credentials
- A SP is independent of any user. It can continue to work even if the user created it leaves the organization.

- One SP created can be used in any automation workload across the subscription.

## When to use user credentials
You should use your user credentials when you working on a Proof of Concept (PoC) or are just exploring Azure using Python SDK or Command Line Interface. Any non-production workload can be carried out using user-credentials.

## Creating a Service Principal
SP is not created by default and there are no additional charges for using one. There are several ways to create an SP:

- Azure Portal

- Azure Command Line Interface (CLI)

- Azure Powershell

If you work in an organization and do not have the right to create one, there may be some forms that you need to fill out to create the SP.

## Advantages of using Azure Service Principal
- Security: SP facilitates secure access to Azure resources.

- Fine-tune control: Define what resources can be accessed. Control permissions that limit only to do some specific task.

- Long-term usage: SP can also exist if an expiry date is not set during its creation and registration. This can enable the SP to run if the developers leave the project/ organization.

- Integration with Azure DevOps: SP can be used to authenticate and help in the automation of deployment of your Azure apps and services using Azure Pipelines.

- Best practice in action: It is best practice to use SP when creating pipelines in azure, rather than using your user credentials.

In a nutshell, SP gives you more flexibility, control and secure access to your Azure resources.

## Drawbacks of using Azure Service Principal
- Overhead of complexity: Beginners of Azure may find setting up and configuration of SP a bit complex. It can also seem like taxing yourself when you are managing permissions to the SP and lean towards using your user credentials.

- Exposure to hacking: If one is not careful with securing the SP credentials, it can have unintended consequences. A SP can land a hacker to access your Azure resources if there is a lapse in the security of your code.

- Regular updates: Azure Admins of your Subscription may require you to regularly check the permissions you have granted to the SP. A SP is a powerful user whose access should be configured carefully.

- Abrupt termination of access: One can set an Azure SP with an expiry date; meaning the SP will become inactive. We need to extend its date of validity. Unfortunately, Azure doesn't provide automation emails that are sent out once SP is near the expiry date. Though it may seem that the drawbacks are quite serious, a responsible approach will lead to the usage of SP confidently.

## Using Service Principle
Once you have access to the SP, register it with Azure App Registrations.

Configure what permissions and Azure resources and services it can access.

Store the tenant id, service principal id, and service principal password in environment variables and never store them files that can be accessed by others.

## Use of Service Principal in Machine Learning pipelines
- building, running and scheduling azure ml pipelines

- enabling continuous integration and continuous delivery (CI/CD) workflows

Closure
Azure SP can be granted permission to access specific resources or perform specific actions within your subscription. This is useful in scenarios where the credentials of the user are not needed to sign in.

A SP becomes an indispensable part of your task that can help you securely access Azure resources, applications and services without needing to sign in to your automation workflows and production tasks.

## Resources and more reading...

- [Create a service principal in Azure - Microsoft Purview | Microsoft Learn](https://learn.microsoft.com/en-us/azure/purview/create-service-principal-azure)

- [Authenticate Python apps to Azure services during local development using service principals | Microsoft Learn](https://learn.microsoft.com/en-us/azure/developer/python/azure-sdk-authenticate)

- [Authenticate to Azure Key Vault | Microsoft Learn](https://learn.microsoft.com/en-us/azure/key-vault/general/authentication)