# Work Day Scheduler

## Description

For this modules challenge we were tasked with using Third-Party APIs to make a dynamically updating work day scheduler. We were given starter code that included jQuery, Bootstrap, and Google fonts to create the main page. Using what we learned the past few weeks, the Bootstrap and Day.js docs I was able to add Day.js functions to display the current day at the top of the page. Also using Day.js we were able to check whether the time blocks displayed were in the past, present, or future and color code them accordiningly.

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Technologies Used

<ul>
<li>HTML
<li>CSS
<li>JavaScript
<li>jQuery
<li>Bootstrap
<li>Google Fonts
<li>Day.js
</ul>


## Usage

When clicking on the deployed page link, you will be brought to a page that looks like the below gif. Once on the page the time-blocks should be grey if that hour has passed for the day, red if it's the current hour, and green if its yet to happen. In each block you can enter events and click the save button, which will store them and make them continue displaying on the page even if you reload the page.

<!--![gif of work day scheduler](./assets/images/work-day-scheduler.gif)-->

## License

Please refer to the LICENSE in the repo.


## Links

Deployed Page: https://anjaliroland.github.io/M5-ThirdPartyAPIs-Scheduler/

GitHub Repo: https://github.com/anjaliroland/M5-ThirdPartyAPIs-Scheduler