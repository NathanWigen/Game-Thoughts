# Game Thoughts <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Project Description

The website will allow you to review video games that you have played. You can leave comments on other peoples reviews to start a conversation about what you played.

<br>

## MVP


- Allow users to write a review and delete only their review
- Allow users to write a comment on review


<br>

## Goals

Make a review website that uses a one to many relationship between post and comments.


## Challenges

The challenges I forsee my having stuggles with is getting my Rails server up and running and connected to my React front end.



<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React is Going to be running my front end  |
|   React Router   | React Router is going to allow my front end  |
|   Ruby on Rails  |_Lorem ipsum dolor sit amet, consectetur._ |
|  React-Router-dom | I am going to use Switch, Route, useHistory |


<br>

### Client (Front End)

#### Wireframes

https://app.diagrams.net/#G1nq4nivkW2_-jh0qegTfVJszaV-My8Mxt

#### Component Hierarchy

``` structure

src
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
|__ Container
      |__ MainContainer.jsx
|__ Screens
      |__ Login.jsx
      |__ Register.jsx
      |__ BlogCreate.jsx
      |__ BlogEdit.jsx
|__ services
      |__ apiConfig
      |__ auth.js
      |__ blogs.js
      |__ comments.js

```

#### Component Tree

https://app.diagrams.net/#G1rjB7xYfJiJc_rCifgzZ2exvQYmH7ki2u



#### Time Estimates

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Rails Backend | H | 16hrs| 0hrs |  |
| React Structor | H | 8hrs| 0hrs |  |
| React Boilerplate | M | 16hrs| 0hrs  |  |
| CSS Styling | M | 16hrs| 0hrs |  |
| Rails Debugging | M | 16hrs| 0hrs |  |
| CSS Debugging | H | 3hrs| 0hrs |  |
| Total | H | 75hrs| hrs |  |

<br>

### Server (Back End)

###ERD

https://app.diagrams.net/#G1v9__jPF-lJMyqXm_xyc6PyCbaX6Jng0h

<br>

***

#### PostMVP  

- Add A Voteing system to posts


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
