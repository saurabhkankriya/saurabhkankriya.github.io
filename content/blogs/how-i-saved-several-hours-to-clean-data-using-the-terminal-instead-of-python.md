---
title: "How I Saved Several Hours To Clean Data Using The Terminal Instead Of Python"
date: 2022-05-07T14:30:00+05:30
draft: false
tags: ["Programming"]
categories: ["Productivity"]
description: "Using Terminal for Data Cleaning"
---

## Background
Few weeks ago at work, I was given a dataset by some business guys. They wanted to find some keywords in specific text columns. The data was huge about ~300MB, approximately 3 million rows, and had about 30 columns delimited by |. Data in a few columns were repeated and as a result, it was introducing redundancy in the dataset. As the data was directly exported by a DBMS to a CSV format, there were some formatting issues as well. Not only the file was huge but the format of the data wasn't ideal to be simply read by pandas for data manipulation. Moreover, opening this file in Excel was a challenge as only the first 1000k rows were being displayed and there was a possibility of truncation of data.

## Terminal to the rescue
In cases like this, terminal tools can be of great help. I used the head command to take a peek at the data and noted down some observations. By using the cut command, I could only look at the particular text columns. I realized I had to replace the symbols from the text columns like :, $, | which were introducing the formatting issues. To replace these, I made use of the sed command. Doing this improved the scenario and there were no more faulty lines of rows. The next thing was to remove blank rows. Here the best tool for the job was ack. After all the preprocessing from the terminal, the resultant data was about 2.3 million rows. This was enough for me to provide it to pandas for further processing. I then used pandas to group on a couple of columns that were making the dataset take longer and then joined the data in the text column. The final dataset was about 180k rows.

## Conclusion
Had I done all this preprocessing using python, it would have taken a lot of time to code. The terminal tools are a lifesaver when dealing with text data. Every developer must spend some time learning about the basics of these tools. The speed of processing text is mind-boggling. I could preprocess the data even without using python. This is the power of the terminal!