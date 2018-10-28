# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Running this project
All that is needed to run this project is to load the index.html into your browser

## How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

- [ x ] Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
- [ x ] Return the `allFeeds` variable to a passing state.
- [ x ] Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- [ x ] Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- [ x ] Write a new test suite named `"The menu"`.
- [ x ] Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
- [ x ] Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- [ x ] Write a test suite named `"Initial Entries"`.
- [ x ] Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- [ x ] Write a test suite named `"New Feed Selection"`.
- [ x ] Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

## Log

### 24/10/18
Testing items in an object or array
https://tosbourn.com/using-loops-in-jasmine/
http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests
