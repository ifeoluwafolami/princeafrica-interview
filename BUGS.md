BUGS REPORT

In mockApi.ts:
The name of the user was not being displayed because the user profile (MOCK_USER) had the wrong data structure (full_name instead of name). This was not being detected as a Type Error because while the User type was imported, the MOCK_user wasn't typed. (Line 34).

The deleteTask function (Line 83) and the toggleTask function (Line 92) were not completed. Promise response was set to void instead of Task, and the task wasn't being searched for. I created a function that returned the task based on id in both situations.


AddTaskForm:
Visibility of priority dropdown on mobile was hindered by the flex-row nature of the parent div so I set its direction to flex-col in mobile while retaining the flex-row in larger screens (Line 71).

TaskCard: 
The width of the task cards were too wide on large screens, so I set a max-width on large screens (Line 18). On small screens, the priority button was not rendering properly so I restyled the priority div by changing the padding (Line 34). On small screens, the size of the title text was too large so I conditioned the sizes to adjust based on the number of characters and ensured responsiveness changes of sizes with screen size (Line 29).

TaskList:
Centered the task cards horizontally, for better aesthetics. This needed to be done after I reduced the max-width of the cards. (Line 49).

TaskStatistics:
I centered the contents for better aesthetics and the text sizes were made responsive(Lines 22-39).

App.tsx:
Changed bg-gradient-to-br to bg-linear-to-br as a tailwindcss best practice (Line 16).