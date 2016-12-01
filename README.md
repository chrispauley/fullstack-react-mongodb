# learn-fullstack-javascript
Learning Fullstack JavaScript Development: MongoDB, Node.js, React.js
This is the code from Sama Buna's [Lynda.com class](https://www.lynda.com/Express-js-tutorials/Learning-Full-Stack-JavaScript-Development-MongoDB-Node-React/533304-2.html)

### Requirements
* MongoDB
* Node
* Git (or access to the exercise files)
* React Dev tools, PostMan on Chrome


### Challenges and Q/A chapter
Ok, here are my responses to the Challenges and Q/A chapter in the class "Learning Full-Stack JavaScript Development: MongoDB, Node and React”

First Challenge: I would want the UI to test for an empty string. That could be done in the handleSubmit function in Contest.js. It should also be handled in the server side because a good REST api ought to be idempotent.
Second Challenge: I would a validation function to App.js to handle the duplicate name entries. That would also need to test for malicious data and perhaps the empty string issue. Then it would make sense to add an errors array to the state object in App.js, and pass it down as props to the Contest.js for display.  Again, the server side would need to handle this too.
Third Challenge: I’d check the project scope to determine how large the list could become. If it is rare, let the names stream. If it is a typical use-case then you’d need to bite the bullet and add pagination.

I really like the two alternatives for project generators. MERN looks intriguing to me because it includes Docker. It did look like a complex scaffold. I’m also wary of adding yet another CLI. Electrode also has a lot of design decisions baked into the platform.

Thanks again Samer for a great course!
