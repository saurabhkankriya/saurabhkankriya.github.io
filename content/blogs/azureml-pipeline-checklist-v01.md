---
title: "AzureML Pipeline Checklist"
date: 2023-01-11T16:30:00+05:30
draft: false
tags: ["Azure", "Data Science"]
categories: ["Cloud Computing"]
description: "A comprehensive guide to AzureML pipeline best practices"
---
As part of a project, I created a couple of Azure ML pipelines. There were a lot of learnings. I want this cheat sheet to serve as a good reference point. This checklist by any means is not complete and may differ from other projects' implementations. I wanted this checklist as a quick note to remind myself of all the common things that are applicable in future projects that I/ others do.

The cheat sheet is divided into 3 sections: Development, Production and Cleanup

## Development
- Have 2 workspaces: dev and prod
- Version control in place
- Have the Python development environment in place
- No hard-coded passwords/ API keys/ secrets in the code
- Automatic shutdown of development compute instance each day
- Set a budget and email notifications on cost
- Use YAML files for configuration

## Production
- Use service principal instead of using users credentials
- Enable a schedule or trigger-based pipeline
- Automatic scaling down of computing target
- Enable CI/ CD
- Enable monitoring solutions to track metrics, input and prediction data

## Cleanup
- Disable/ delete schedules and pipelines that are not required anymore
- Lifecycle management policies in place to delete the log files
- Remove access of people not required in the project

This list is just a dump of all things I could remember. I will keep on expanding points but in a new blog post.

I hope you find it useful. Please let me know your experience if you are reading this and what else can be added to this cheat sheet.

Thank you for reading.