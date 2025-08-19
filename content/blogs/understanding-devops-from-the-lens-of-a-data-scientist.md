---
title: "Understanding DevOps from the lens of a Data Scientist"
date: 2022-12-30T16:30:00+05:30
draft: false
tags: ["Azure", "Data Science"]
categories: ["Cloud Computing"]
description: "A comprehensive guide to understanding DevOps practices for data scientists"
---

## Need
A Data Scientist or a Machine Learning Engineer will come across Machine Learning Operations (MLOps) when the model needs to be deployed in production. The principles of MLOps have their roots in the Software Development and IT Operations (aka DevOps) culture. It thus becomes important to understand what DevOps is, to better understand and implement MLOps.

## Background
- The IT industry has undergone tremendous development in the last couple of decades. There are different roles and job responsibilities within a software development lifecycle. Each team has a dedicated role to play. There can be no progress by isolating one team from the entire process. It thus becomes imperative to understand the contribution of these different teams in the software development lifecycle.

- Once the functional requirements are confirmed by the business, a major chunk of the time is spent on developing and operationalizing the software/ application (app). So basically there are 2 teams: the development team and the operations team. These 2 teams have different technical knowledge, skill sets, toolsets and responsibilities.

- The Development team comprises Software Developers and Quality Assurance Engineers. The skill sets include programming (JAVA, .NET etc), database development, testing frameworks and different types of testing, version control etc.

- The Operations team can consist of admins and IT folks who are responsible for deploying the app in the production environment, managing the infra and traffic, load balancing of servers, ensuring smooth operations of the app etc. They are required to know scripting languages, automation, Linux, servers, networking, monitoring tools, security, etc.



## The Traditional way of Software Development
The traditional way of developing an app was that the development team will hand over the app release to the operations team with some instructions. It will then be the responsibility of the operations team to deploy the app and make sure it is working smoothly. Here, teams are working in silos. If something goes wrong with the app, downtime was required for the fix. Users of the app will have to wait for the fix to come into effect. This downtime hurt the working of the business.

This approach results in ineffective communication, lack of fast feedback, missing parts of information/ documentation and a lack of a smooth process for an app to deliver results to its client. The release cycles are slow (somewhere between 1-3 months) and there is a lack of transparency.

## The Modern Way of Software Development
Software teams need to respond and adapt to changes quickly and easily. It is the need of the hour to be agile in one's approach. In the modern world, software teams work with each other by addressing the problems of miscommunication. There is the seamless integration of new releases without downtime. There are rapid release cycles. Each new feature release is tested and deployed and there is immediate feedback.

The roles of the development and operations teams are more in sync than their traditional counterparts. This synergy has resulted in bringing together two completely unrelated roles together that had a hard time communicating with each other. This led to the rise of the DevOps Culture.

With the DevOps culture, there is a common language of communication. The DevOps culture led to an emergence of an altogether different skill set. A DevOps engineer needs technical know-how from the dev and ops teams. Apart from this common knowledge, a DevOps engineer also needs to know about Continous Integration and Continous Delivery (CI/ CD). These are the phases that include Test - Build - Push - Deploy pipelines which lead to automatic, more transparent and smoother delivery of the releases to the live app without any downtime. The building, shipping, and deploying of the app for the customers to use receive fast feedback and also enable quick release cycles.



## The Harsh Truth
Once an app goes live, it doesn't mean that it will always be like this. With time, new upgrades are released. As new features are released, there is a high chance that it may impact the live version of the app. The app may also encounter some bugs. To make sure these new features are smoothly released, some automated tests make sure the running version of the app is not impacted.

You cannot have downtime for your app if there is some new feature release you want to deliver. While doing changes to the existing code, care needs to be taken so that there is no impact on the app. This is where CI/CD comes into the picture. CI/CD stands for Continous Integration and Continuous Delivery (aka Continous Deployment). Continuous means it is done regularly.

**Continuous Integration**: There is an existing code base and teams are often updating some code based on customer requirements or feedback. Some code is written to address these and then the changes are pushed across the branches. A set of coding guidelines (such as code linting, formatting etc), a compilation of the code and running automated tests are a big part of Continous Integration. Automated tests are needed so that new changes introduced don't break the app.

**Continuous Delivery**: The changes you made in the CI stage should propagate smoothly to the production environment. This is where the pipelines play an important role. The pipelines validate the changes introduced and deliver them through a series of tests in different environments (such as the Test/ QA) before finally releasing them to production. It is easy to catch a bug introduced in one release cycle early on before it can impact the production version of the app.

So in a nutshell,

```CI/CD is the philosophy in which the existing source code is taken along with the newly pushed changes clubbed with automated builds and tests that deliver the changes in real-time upon receiving them without any downtime in a transparent and automated manner. CI is the stage where code changes occur and CD is the stage where these changes are integrated with the prod version of the app.```

## What are the principles of DevOps?
- **Collaboration**: This is the entire premise of the DevOps culture. Dev and Ops teams work collaboratively. These teams basically merge into one team. They communicate and share feedback for the entire lifecycle development of the app. End-to-end responsibilities are owned by the team that ensures quality deliverables are released in each cycle to the customer.

- **Automation**: Another key principle is automation. All the steps from building, testing and deploying are automated. This leads to fewer human errors and increases the overall throughput of the process. Automation enables quick integration of customer feedback and helps release new feature updates smoothly.

- **Continuous Improvement**: Continous Improvement is the result of Continous Integration and Continous Delivery. This leads to improved development efficiency and brings in customer value at the earliest. Each release cycle leads to an improved system, and processes of the working team, less wastage in terms of time spent on deliverables, reduced cost etc.

- **Customer-centric approach**: User needs are always the focus. The releases are directed at the customers and end users which helps the teams get immediate feedback. This feedback is easy to incorporate changes in the next release cycles. Teams are in a better position to view the interaction end users make with the app through the rapid deployment and monitoring tools available.

## What are the benefits of DevOps?
- Shorter release cycles lead to faster time to market.

- Changes are quickly adapted based on market needs and competition.

- Due to faster releases, the app has higher quality and stability owing to quick feedback from the end users.

- Automated tests make sure the new releases don't break the existing working of the app. The uptime of the app makes it smooth for the business end users to work seamlessly.

- There is increased transparency due to open communication. It helps the DevOps team to quickly identify bottlenecks, fix incidents and issues, and unblock the release pipeline faster.

- The use of automation and cross-functional collaboration reduces the complexity of the entire delivery system and errors. This helps to respond quickly in case there is any occurrence of an incident or outage.

## How is DevOps useful to me as a Data Scientist?
A Data Scientist may only be concerned with getting good accuracy with the predictions once the trained model is made available via a REST API. We live in a dynamic world, where the only constant in life is change. Data changes over a period of time and the model trained on this data tends to decay thereby affecting the accuracy of the model. This requires model re-training on the current data. If the app is live and you have no CI/CD pipelines in place, you are going to need to bring the app down for making any changes to the code and ultimately the machine learning model. This will impact the serving of the predictions. Once you have established pipelines, making changes to the code for new requirements becomes easy. These pipelines can also be shared and used with other projects.

I hope this gives you a good introduction to understanding DevOps. MLOps is largely based on these concepts plus data and model versioning also come in to play.