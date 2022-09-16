# business-website-counter
## My Idea

At the start of this project, I thought the API would track daily views of any website if the url was typed in the input box.  That wasn't the case.  I learned that it's used to track your own website views.  To make it interesting I created two text inputs and turned it into a battle of website views.  The way it works is every time I enter a url, it adds 1 to the view count.  Other website's that I use regularly already had a view count and added to that each time it was entered(google.com, github.etc).  

I started off with functionality and then eventually styled it all.  My first task was setting up two input boxes with a button that had an event listener add to it.  The event listener then invoked the functions necessary for the additional features. 

***DISCLAIMER:  Must use Bruce Buffer voice while reading the header***

![demo1](https://user-images.githubusercontent.com/110626378/190686550-ba0f59d3-2be1-43ca-917b-5d9fd17c108f.jpg)

## Next Feature - URL view count and Logo API
After getting my input to get the correct data, I created divs that updates the text of the view count that was returned from invoking a function that used a get method.  I also found a cool little API that retried the logo from the company of the url input into the text boxes. 

![demo3](https://user-images.githubusercontent.com/110626378/190688137-39f6f11f-c151-4e38-8a57-b15e3a20fe33.jpg)

## Top-5 Rankings Feature
Somewhere along the way I ended up going with this fight theme so I decided to add a "Top-5 Rankings" that keeps track of the top view counts input into the text boxes.  If a view count falls with the top 5, it gets added and the number 5 position falls off.  If not, it doesn't show up. I wanted to add the url name but ran out of time. 

![demo4](https://user-images.githubusercontent.com/110626378/190688841-723a61bf-10ea-461e-8a9d-ae21206ff3b9.jpg)

## BONUS

Once I got my main functionalities working I wanted to add a banner that came down from the top of the screen.  I wrote the code for it using some position elements and setIntervals.  It worked and came down with blue or red font, depending on the winner, but couldn't get it to reset.  Ran out of time.  
