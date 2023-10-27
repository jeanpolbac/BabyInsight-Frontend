# BabyInsight - Frontend

## Status

🚧 **This project is currently in development.** 🚧

---

## Description

This repository contains the frontend code for the BabyInsight application, an intuitive platform designed to help parents manage and track vital aspects of their child's healthcare. It offers features such as user authentication, an informative dashboard, a vaccine tracker, a medication log, and an interaction checker.

---


## Related Repositories
For the backend part of this project, please visit [BabyInsight - Backend](https://github.com/jeanpolbac/BabyInsight-Backend).

---

### User-Centric Design

Our project starts with a focus on user stories, ensuring that every feature and functionality is designed with the end-users in mind. We've carefully crafted user stories to capture the essential interactions users will have with the Baby Insight application.

<details>
  <summary>User Registration and Login</summary>

**User Story**: As a new user, I want to be able to register for an account with an email and password.

**Acceptance Criteria**:
- Given I am a new user, when I register, then my account is created.

**User Story**: As a registered user, I want to be able to log in to my account securely.

**Acceptance Criteria**:
- Given I am a registered user, when I log in with my correct email and password, then I have access to the application features.
</details>

<details>
  <summary>Vaccine Tracker</summary>

**User Story**: As a parent, I want to track my newborn's vaccinations so that I can ensure they are administered on time.

**Acceptance Criteria**:
- The application should come with a pre-loaded list of standard vaccines for newborns.
- Each vaccine should have an "administered" option to mark it with the date it was given.
- Past due vaccines should be highlighted.
</details>

<details>
  <summary>Medication Log</summary>

**User Story**: As a parent, I want to log and track my child's medication to ensure they are given the correct dosage on time.

**Acceptance Criteria**:
- The log should have fields for medication name, dosage, frequency, and duration.
- The log should display a list of all active medications.
- Completed or expired medications should be archived and not shown in the active list.
</details>

<details>
  <summary>Interaction Checker</summary>

**User Story**: As a parent, I want to check if there are any interactions between different medications to ensure my child's safety.

**Acceptance Criteria**:
- Users should be able to input two or more medications.
- The application should check for interactions from a predefined list.
- If interactions are found, the application should display a warning message.
- If no interactions are found, a confirmation message should be shown.
</details>

---

## User-Centric Design
To model our data structure effectively, we've created an Entity-Relationship Diagram (ERD). This visual representation maps out the relationships between various entities in our system, such as users, child profiles, vaccines, and medications. The ERD serves as a blueprint for our database design, ensuring that data is organized and structured efficiently.

![erd-babyinsight.png](src%2Fassets%2Ferd-babyinsight.png)

---

## Planning Documentation
For detailed planning and task breakdown, please visit our [Trello Board](https://trello.com/b/PMlxH7hu).

---

## Features

### Track Vaccines for Your Child

Our application serves as a comprehensive guide to your child's immunization journey. Keep all your child's vaccine information in one place and have it at your fingertips, anytime, anywhere.

### Know Administered Vaccines

Say goodbye to sifting through papers and health records. Our app keeps a log of all vaccines your child has received. It gives you detailed information, including the type of vaccine and the date it was administered. This way, you are always aware of your child's immunization status and can easily provide records to healthcare providers or educational institutions.

### Overdue Alerts

Never miss a vaccine again! Our app sends you timely notifications for any vaccines that are overdue, ensuring your child's immunization schedule stays on track. In the overdue section, you can quickly check which vaccines you have missed along with the recommended time frame for each.

### Upcoming Vaccines

Planning is key to ensuring your child gets all the required vaccines on time. Our application provides you with a list of upcoming vaccines, complete with due dates and information about each vaccine. With these reminders, you can easily schedule appointments with healthcare providers well in advance.

### Peace of Mind

The uncertainty and complexity of managing your child's vaccination schedule can be stressful. Our app alleviates that stress and ensures you are well-informed, helping you make better healthcare decisions for your child.

### User-Friendly Dashboard

All of these features come wrapped in an intuitive, user-friendly interface. With simple navigation and easy-to-read displays, tracking your child's vaccines has never been this effortless.

---

## Project Approach

### The Challenge of New Parenthood

Becoming a parent is a monumental milestone filled with joy, love, and, naturally, challenges. One such challenge that new parents often face is navigating through the complex and sometimes overwhelming world of childhood vaccinations. As a parent of a newborn, I found myself jumping through hoops, scouring numerous resources, and dealing with a maze of healthcare guidelines to get accurate and timely information about vaccinations. While these initial years should be spent enjoying the miraculous journey of your child's growth, parents often find themselves bogged down by the intricacies of vaccine schedules, dosages, and medical jargon.

### The Inspiration

That's when it hit me—why not build something for future parents that would make those first years easier to enjoy? I wanted to create a tool that alleviates this stress, so parents can focus on what really matters: raising a happy, healthy child.

### The Solution: A One-Stop App for Child Immunization

And so, this app was born—crafted with the utmost care and diligence to serve as a one-stop solution for all your child’s vaccination needs. With features that allow you to track administered vaccines, set overdue alerts, and even get a heads-up on upcoming vaccinations, the app aims to empower parents to take control of their child's health in a simplified and user-friendly way.

### Empowering Parents

Through this app, I hope to bring peace of mind to you as a parent, because when you're informed and prepared, you can make better healthcare decisions for your child. With all the information and reminders at your fingertips, you can reclaim those joyful moments that might otherwise be lost to worry and uncertainty.

### The Reward

The true reward for this project lies in the knowledge that it may help parents breathe a little easier and enjoy the priceless first years of their child’s life a bit more fully. After all, informed parenting is empowered parenting, and that’s a gift that keeps on giving.

---

## Wireframes

Below are wireframes illustrating the user interface design for the BabyInsight Baby Health Tracker frontend:

- **Login Page:**
  ![Login Page](src%2Fassets%2Fwireframe-login-babyinsight.png)

- **Dashboard:**
  ![Dashboard](src%2Fassets%2Fbabyinsight-wireframe.png)


---
## Technologies Used

1. **IntelliJ IDEA**: An integrated development environment for Java.
  - [IntelliJ IDEA](https://www.jetbrains.com/idea/)

2. **GitHub**: A web-based platform for version control and collaboration.
  - [GitHub](https://github.com/)

3. **Postman**: An API development and testing tool.
  - [Postman](https://www.postman.com/)

4. **Angular**: A popular framework for building web applications.
  - [Angular](https://angular.io/)

5. **Bootstrap**: A front-end framework for building responsive web designs.
  - [Bootstrap](https://getbootstrap.com/)

---

## Hurdles Encountered During Development

**Angular Connection to the Back End**
One of the significant challenges was establishing a secure and reliable connection between the Angular frontend and the Spring Boot backend. This was the first time I was linking a frontend to a backend, so it required a solid understanding of RESTful APIs.

**Solution:** I followed Angular's [HttpClient module documentation](https://angular.io/guide/http) and made use of the RxJS library to make HTTP requests to the backend endpoints. Additionally, I ensured that proper CORS (Cross-Origin Resource Sharing) configuration was in place on the backend to allow the frontend to communicate with it.

---

**Receiving or Sending Data in the Wrong Format**
Working with data between the frontend and backend required careful attention to data formats. Sometimes, data sent or received was not in the expected format, leading to issues in rendering or processing the information.

**Solution:** To address this challenge, I meticulously reviewed the data structures and models on both the frontend and backend. I used TypeScript interfaces to define the expected data structures and made sure that data was serialized and deserialized correctly when sending and receiving requests.

---

**CSS Issues**
Styling and CSS compatibility can be challenging, especially when aiming for a responsive design. Inconsistencies in layout and appearance across different devices and browsers needed to be resolved.

**Solution:** I leveraged [Bootstrap](https://getbootstrap.com/), a front-end framework, to ensure a responsive and consistent design. I also used CSS media queries to fine-tune the styling for various screen sizes. Cross-browser testing was conducted to identify and fix any compatibility issues.

---

**Learning Angular as a New User**
As a new user of Angular, the learning curve was steep. Understanding the framework's concepts, components, and services took time, and I had to overcome the initial hurdles of setting up the Angular development environment.

**Solution:** I invested time in learning Angular through online tutorials, documentation, and hands-on practice. I followed best practices for project structure and modularization, which improved code organization and maintainability. I also sought assistance from online communities and mentors when faced with specific challenges.

---

**Long Nights and Persistence**
The challenges mentioned above, combined with project deadlines, resulted in many long nights and persistence. It was essential to stay motivated and focused during challenging moments.

**Solution:** I maintained a positive attitude and stayed committed to the project's goals. I broke down complex tasks into smaller, manageable steps, making it easier to tackle challenges one at a time. Collaboration with team members also provided valuable support and insights during challenging periods.

In conclusion, overcoming these challenges in connecting Angular to the backend, handling data formats, addressing CSS issues, and learning Angular as a new user required a combination of technical knowledge, persistence, and collaboration. These experiences contributed to a valuable learning journey and the successful development of the BabyInsight Baby Health Tracker frontend.

---

## Resources & Acknowledgements
### General Assembly Instructors
- Suresh Sigera: [GitHub](https://github.com/sureshmelvinsigera)
- Dhrubo Chowdhury: [GitHub](https://github.com/Dhrubo-Chowdhury)
- Leonardo Rodriguez: [GitHub](https://github.com/LRodriguez92)

### Special Thanks
- Gabrielle Ynara: [GitHub](https://github.com/GabrielleYnara)
- Rick Maya: [GitHub](https://github.com/rickstylz01)

### Links
- [Angular Documentation](https://angular.io/): Official documentation for the Angular framework, including guides, tutorials, and API reference.
- [Bootstrap Documentation](https://getbootstrap.com/): Bootstrap documentation for creating responsive and mobile-first web applications.
- [Angular Material](https://material.angular.io/): Explore Angular Material, a UI component library that integrates seamlessly with Angular.
- [Font Awesome](https://fontawesome.com/): Access a wide range of icons and fonts to enhance the visual appeal of your frontend.
- [TypeScript](https://www.typescriptlang.org/): TypeScript documentation for the strongly typed superset of JavaScript used in Angular development.
- [RxJS](https://rxjs.dev/): Learn about RxJS, a library for handling asynchronous operations and event handling in Angular applications.
- [NgRx](https://ngrx.io/): Explore NgRx, a state management library for Angular applications.
- [Angular CLI](https://cli.angular.io/): Angular CLI documentation for managing and scaffolding Angular projects.



