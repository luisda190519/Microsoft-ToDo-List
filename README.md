
# Microsoft To Do List

This is a project that simulates, the Microsoft To Do application, where users can register and create lists, where they can store tasks that they have to do, this is very convenient to increase productivity and efficiency because you have saved tasks that you have to do.


## Installation

To install all the dependencies used by this app, first go to the Frontend folder and type

```bash
  npm install
```

This will install all the dependencies and libraries used in the Frontend, then go to the Backend folder and type
    
```bash
  pip install -r requirements.txt
```
## Deployment

To deploy the app, first locate in the Frontend folder and type.

```bash
  npm run dev
```

Then go to the Backend folder and type the following

```bash
  python3 manage.py runserver 0.0.0.0:3000
```
## Tech Stack

**Client:** React, Bootstrap

**Server:** Django, Django REST framework


## Screenshots

The first thing you see when you enter the app, are the login or register screens.

![Log in](https://raw.githubusercontent.com/luisda190519/Microsoft-ToDo-List/master/Pictures/login.png?token=GHSAT0AAAAAAB4C5L5BC54NPN7EURBVATW6Y5PD5MA)

![sign up](https://raw.githubusercontent.com/luisda190519/Microsoft-ToDo-List/master/Pictures/signup.png?token=GHSAT0AAAAAAB4C5L5ANGS44W6RE2IXZD7CY5PD7DQ)

When logging in if you already have an account, or registering if you didn't, the main screen appears

![Main](https://raw.githubusercontent.com/luisda190519/Microsoft-ToDo-List/master/Pictures/Main.png?token=GHSAT0AAAAAAB4C5L5AHF237Y2AUSNDVOZGY5PEACQ
)

We will always see first the list of important tasks where the tasks that we have marked as important will appear.

In the app, we can create lists and add tasks to these lists, when we consider that a task is very important, we can click on the star button, this will make the task appear at the top of the list, in order to be the first one we see and it will also appear in the important list.

When we have completed a task, we can click on the circle of the task, this will underline the task and it will be placed in the last position, since the task has been completed.

![Main V2](https://raw.githubusercontent.com/luisda190519/Microsoft-ToDo-List/master/Pictures/MainV2.png?token=GHSAT0AAAAAAB4C5L5B4S7MTUCB6WGBJTGMY5PED3Q)


We can delete the tasks, edit them, and also delete and edit the names of the lists.


## Acknowledgements

This project served to consolidate my learning in React, and start learning Django for Backend, using Django REST framework, to create the api.

 - [React](https://es.reactjs.org)
 - [Django](https://www.djangoproject.com)
 - [Django REST framework](https://www.django-rest-framework.org)


## Support

For support, email licerol@uninorte.edu.co


## Authors

- [@luisda190519](https://github.com/luisda190519)

