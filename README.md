# Green Quiz

The purpose of this web application is for a user to understand how environmentally friendly they are. Through answering a series of questions, a score is returned and a description of 'how green' the user is is determined.

This quiz aims to increase their awareness on things they could be doing to reduce their impact on the environment. The target audience for the quiz is anyone who would like to understand what their current impact is and recieve suggestions on how to reduce this.

![Responsive Mockup](https://github.com/lucyrush/readme-template/blob/master/media/love_running_mockup.png)

## Design and Development

For the design of this quiz, the 5 pillars of User Experience Design (UXD) were used to cover the strategy, scope, structure, skeleton and surface to make sure the design is intuitive, simple and enjoyable. 

### Strategy



Research was conducted on similar quizzes to understand 

### Scope



### Structure



### Skeleton



### Surface



## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __Navigation Bar__

  - Featured on all three pages, the full responsive navigation bar includes links to the Logo, Home page, Gallery and Sign Up page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](https://github.com/lucyrush/readme-template/blob/master/media/love_running_nav.png)

- __The landing page image__

  - The landing includes a photograph with text overlay to allow the user to see exactly which location this site would be applicable to. 
  - This section introduces the user to Love Running with an eye catching animation to grab their attention

![Landing Page](https://github.com/lucyrush/readme-template/blob/master/media/love_running_landing.png)

- __Club Ethos Section__

  - The club ethos section will allow the user to see the benefits of joining the Love Running meetups, as well as the benefits of running overall. 
  - This user will see the value of signing up for the Love Running meetups. This should encourage the user to consider running as their form of exercise. 

![Club Ethos](https://github.com/lucyrush/readme-template/blob/master/media/love_running_ethos.png)

- __Meetup Times section__

  - This section will allow the user to see exactly when the meetups will happen, where they will be located and how long the run will be in kilometers. 
  - This section will be updated as these times change to keep the user up to date. 

![Meetup Times](https://github.com/lucyrush/readme-template/blob/master/media/love_running_times.png)

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for Love Running. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media

![Footer](https://github.com/lucyrush/readme-template/blob/master/media/love_running_footer.png)

- __Gallery__

  - The gallery will provide the user with supporting images to see what the meet ups look like. 
  - This section is valuable to the user as they will be able to easily identify the types of events the organisation puts together. 

![Gallery](https://github.com/lucyrush/readme-template/blob/master/media/love_running_gallery.png)

- __The Sign Up Page__

  - This page will allow the user to get signed up to Love Running to start their running journey with the community. The user will be able specify if they would like to take part in road, trail or both types of running. The user will be asked to submit their full name and email address. 

![Sign Up](https://github.com/lucyrush/readme-template/blob/master/media/love_running_signup.png)

For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- Back button feature to navigate back through the quiz
- Integrate it into previous project website
- Randomise answer array
- Add progress bar for instructions
- more questions

## Testing 

### Initial Developer Testing

Throughout project as developing quiz

The development of this app was conducted on Google Chrome, therefore extensive testing was conducted on this broswer. This was used as a benchmark against Firefox, IE and Safari.

The elements of testing conducted on each browser are:
- User Experience - what does the quiz look like; is the flow through the quiz the same; are all elements where they are expected?
- Functionality - do the buttons work as expected; does the question counter count?
- Performance - how responsive is the site?
- Other - this includes spelling and grammatical errors.

Responsive design is important, CSS code had to be amended and adjusted to make sure the app could work on a number of devices. There were a number of user experience bugs that were produced when testing. These have now been fixed in the code.

### Validator Testing 

Using tools such as W3C validator, Jigsaw and Lighthouse gives visibility of any code, scripts or elements that are causing any errors. The results for the site are as follows:

- HTML
  - No errors were returned when passing through the official [W3C validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falyshajohnson.github.io%2Fgreen-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falyshajohnson.github.io%2Fgreen-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Performance results can be seen through the official [Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Falyshajohnson.github.io%2Fgreen-quiz%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext) report.

As part of the performance test through Lighthouse, accessibility (aria-label) tags were implemented on all buttons to improve the score from 82 to 100.

### User Testing
This app has been tested by a small group of users in which some feedback was captured in the design and some errors in functionality and spelling were corrected.

UI improvements made:
- Addition of icons on quiz navigation buttons.
- Order of buttons, suggested the reset and next buttons were the wrong way round. This change is now implemented.

Errors / bug fixes:
- On question reset, the 'Next' button was still active.
- General spelling errors throughout quiz.

### Unfixed Bugs

- instructions - not able to move through videos
- instruction videos not playing / delay in playing

## Deployment

The 'Green Quiz' was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://alyshajohnson.github.io/green-quiz/

## Credits 

### Content 

Logos and Fonts:
- The fonts were taken from [GoogleFonts](https://fonts.google.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

Tutorials and support:
- General guidance, information and limitations on elements, atrributes, and methods from [w3schools] (https://www.w3schools.com/default.asp) and [MDN Web Docs](https://developer.mozilla.org/en-US/)
- Simple JavaScript quiz creation tutorial by Web Dev Simplified on [YouTube](https://www.youtube.com/watch?v=riDzcEQbX6k)
- How to make a Quiz App by Brian Design on[YouTube](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
- Slideshow tutorial by Jay Watson on [YouTube](https://www.youtube.com/watch?v=_lquy7YDS7Y)
- Automatic slideshow by Code Addiction on [YouTube](https://www.youtube.com/watch?v=mngeB-2Cjqg)
- The many people who 'beta tested' the quiz app.

### Media

The photos used throughout the quiz are stock imagery from the following services:
  - [unsplash] (https://unsplash.com/)
  - [FreeImages] (https://www.freeimages.com/)
  - [PikWizard] (https://pikwizard.com/)

The videos as part of the help feature, were recorded and edited by the developer.

### Research

As mentioned in the design section, competitor research was conducted. These are credited below:
- [ReduceReuseRecycle](https://www.reducereuserecycle.co.uk/greengames/how_green_are_you_fun_quiz.php)
- [BBC Newsround](https://www.bbc.co.uk/newsround/49793156)
- [ISL Collective](https://en.islcollective.com/english-esl-worksheets/vocabulary/environment/how-green-are-youquiz/76448)