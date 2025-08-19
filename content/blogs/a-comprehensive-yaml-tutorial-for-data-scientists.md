---
title: "A Comprehensive YAML Tutorial for Data Scientists"
date: 2023-01-13T16:30:00+05:30
draft: true
tags: ["Azure", "Data Science"]
categories: ["Cloud Computing"]
description: "A comprehensive guide to YAML for data scientists"
---
What is YAML?
YAML stands for "YAML Ain’t Markup Language".

It is a data serialization language that is human-friendly and works well with modern programming languages for all types of applications.

It enables applications to declare data format to exchange data which is easily transmissible across networks and devices.

It is used for representing data in a structured format.

Recall that HTML is a markup language and it lets us define a parent-child relationship.

Why is YAML needed in the first place?
Better configuration management than hard-coding and changing parameters within actual scripts of the application.

Can be shared with others who can simply change the configuration parameters and run the experiments or apps

Advantages
Easy to read and write

Syntax is simple

Most popular languages use it

Easily convertible to JSON/ XML

Applications
YAML is easy to read and write. This makes it a good choice for configuration files where data is being stored or transmitted. Therefore, it has applications in:

GitLab

Docker

Kubernetes

Logging format

Azure Machine Learning Python SDK v2

Configuration of Machine Learning Experiments and pipelines

Anaconda environment specification file

Structure of a YAML file
To improve readability, a YAML file is formatted using white space and new lines. A YAML file can have a combination of the following data structures:

Key-Value pairs: A key represents the pair name and the value represents the data belonging to that name. The value is specified after a colon : and a single space.


Copy

Copy
 service_provider: Azure 
 client_name: 'saurabh' 
 region: "southeast_asia"
Lists: Lists are specified in the following line with an indentation of 2 spaces followed by a hyphen :. This style is also called block style.


Copy

Copy
 azure_services:
   - Machine Learning
   - Functions
   - Cognitive Services
List members can be enclosed in square brackets and separated by commas. The following is an example of flow style. The same list above can be written as:


Copy

Copy
 azure_services: ['Machine Learning', 'Functions', 'Cognitive Services']
Dictionaries: These are nested key-value pairs. One can organize related information under a parent's name.


Copy

Copy
 allowed_budget_in_USD:
   - Jan_2023: 1000
   - Feb_2023: 1500
   - Mar_2023: 2000
This is how the entire config.yml file will look like:


Copy

Copy
 service_provider: Azure
 client_name: 'saurabh'
 region: "southeast_asia"

 azure_services:
   - Machine Learning
   - Functions
   - Cognitive Services

 allowed_budget_in_USD:
   - Jan: 1000
   - Feb: 1500
   - Mar: 2000
Guidelines while writing YAML files
YAML files can have .yml or .yaml extensions.

YAML is case-sensitive.

YAML follows indentations of 2 spaces for a nested list or dictionary. The usage of tab throws an error.

Variables are usually written in lowercase. Use underscore _ and hyphen - within variables are acceptable.

Comments in YAML are declared using the # symbol.

String values can be defined with single quotes ', double quotes " or without quotes.

A collection of key-value pairs is called a document.

List members are denoted by a leading hyphen -

Key-Value pairs, blocks and documents build the structure of the YAML file.

Documents can be separated by --- from each other.

Only double quotes allow the use of escape characters.

Comparison with JSON/ XML
YAML and JSON are closely related. In fact, because of the widespread usage of JSON, YAML almost looks like a clean version of JSON. YAML is not an alternative to JSON nor XML. It's just a different way of representing data. With YAML you can express the same things as with JSON, but YAML achieves this in a much cleaner and easier-to-read format. Like JSON, YAML cannot store custom data objects. YAML is language-independent which means that you can use it to store configuration data in any language.



Advantages of YAML over JSON
YAML doesn't have strict syntax requirements like JSON

YAML is far more easier to read and write

One cannot use comments within JSON

Strings without codes in JSON will result in an error

YAML datatypes
Sometimes it is imperative to specify a datatype for the values. Not specifying a datatype may result in an error or incorrect interpretation by the file consuming the YAML specification. YAML supports 3 types of datatypes:

Scalar: There is only one value that belongs to the key. The following datatypes are scaler:

Numerical (float, int)

String (str)

Boolean: Can take theses values- (True/ False, TRUE/ FALSE, T/ F, Yes/ No, Y/N, y/n)

Timestamp (timestamp)

A datatype is specified after the colon with double exclamation points !!


Copy

Copy
```yaml
# Specifying datatypes
retry_attempts: !!int 5 
--- 
hb_level: !!float 15.5
---
regions: !!str westeurope
---
job_deployed: false # n, N, False, FALSE
is_scheduled: true # y, Y, True, TRUE
---
job_runtime: !!timestamp 2023-07-05T08:00:00
---
```
Lists: Lists can hold multiple values under the same key. There are different ways to write lists:


Copy

Copy
 # lists
 - RG: 'rg_saurabh'
 - subscription: '1234-5678-9012-3456'
 ---
 # sequential list
 services:
   - Storage Account
   - Key Vault
   - App Insights
 ---
 # flowing list
 regions: ['west_europe', 'southeast_asia']
Dictionary: Dictionaries are key-value pairs that are nested under the same key. A dictionary is a collection of key-value pair(s).


Copy

Copy
 # dictionary/ nested key:value
 first_release:
   - region: 'west_europe'
   - subscription: '1234-5678-9012-3456'
   - services: 
     - Azure Machine Learning
     - Azure ARC
 ---
 second_release:
   - region: 'southeast_asia'
   - subscription: '1243-4550-4412-3456'
   - services: 
     - Azure Functions
     - Azure Cognitive Services
YAML anchors
Sometimes we are required to reuse an existing key-value pair in other parts of the YAML file. There is repetition if we simply copy that value in all subsequent configurations. Also, if we want to edit/ change all the occurrences, it can tend to introduce errors or misconfigurations. What if we can simply reference that particular key-value pair in all other occurrences by simply writing it once?

The following YAML file has a repetition of the roles


Copy

Copy
first_release:
  - region: 'west_europe'
  - subscription: '1234-5678-9012-3456'
  - roles:
    - Owner 
    - Contributor
    - Support Ticket User
---
second_release:
  - region: 'southeast_asia'
  - subscription: '1243-4550-4412-3456'
  - roles:
    - Owner 
    - Contributor
    - Support Ticket User
---
third_release:
  - region: 'east_us'
  - subscription: '1267-4660-6462-3757'
  - roles:
    - Owner 
    - Contributor
    - Support Ticket User
By using anchors, we can avoid the repetition of lines. We simply refer once and then re-use it everywhere. In the following YAML file, we have used an anchor for roles. The anchor is specified using & followed by an alias (in the following case, it is ROLES). This anchor is then referenced using * and the name of the alias. In the second_release and the third_release, the anchor is referenced as *ROLES


Copy

Copy
first_release:
  - region: 'west_europe'
  - subscription: '1234-5678-9012-3456'
  - roles: &ROLES
    - Owner 
    - Contributor
    - Support Ticket User
---
second_release:
  - region: 'southeast_asia'
  - subscription: '1243-4550-4412-3456'
  - roles: *ROLES
---
third_release:
  - region: 'east_us'
  - subscription: '1267-4660-6462-3757'
  - roles: *ROLES
YAML Multi-line Strings
There are cases when we want to

output the string in multi-lines by preserving spaces

format the string in muti-lines for better readability but ignore spaces and newlines

This can be done in YAML and is illustrated in the following example:


Copy

Copy
# If you want to preserve new lines in a multiline string block, use the pipe # | after the colon:
access_message: |
  You do not 
  have the 
  permission(s)
  to access
  this resource
---
# For clarity you may write message on separate lines but dont want to preserve the new lines. Use > after the colon
success_message: >
  The job clean_data 
  executed on target_cluster 
  has completed successfully.
The output looks like this:



Tools to work with YAML file
If you work with YAML files, it is advisable to make use of editors.

Make use of code editors like Notepad++, VSCode, etc. while creating/ editing a YAML file. These editors can highlight text if there is an indentation or syntax error. With VSCode, these are the 2 extensions that you can use:

YAML Sort - Visual Studio Marketplace: useful for sorting, formatting and validating YAML files

YAML - Visual Studio Marketplace: auto-completion and hover support based on schema

Online YAML Tools - Simple, free and easy-to-use YAML utilities have an ad-free collection of utilities that can help validate and format a YAML file, converting YAML to JSON/ XML formats etc.

You can also refer YAMLlint - The YAML Validator to check if there are syntax and indentation errors

Reading YAML files with Python
To work with YAML files in python, there are several packages available. Packages like pyyaml and hydra are good alternatives for using YAML files in your projects. The other option is to use python' open function to read a yaml configuration file.

Now that you know the basics of YAML, you are ready to learn more about it by using it in your project(s).