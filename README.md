# PeerByte

An open source virtual working environment for professional institutions and organization to remotely connect their teams and employees across different countries.

## Website

[PeerByte](https://peerbyte.herokuapp.com)

## Installation

Clone the repo and install the dependencies:

```bash
npm i && cd connectsync_client && npm i && cd ..
```

It will install the required dependencies.

Create a .env file in the root directory.
put the mongoURI and cloudinary keys inside the file.

To spin up the server, run:

```bash
> npm run server
```

To run the frontend on localhost, go to the directory <mark>connectsync_client</mark> and run:

```bash
> npm start
```

To run client side and server side concurrently:

```bash
> npm run dev
```

## About the project

PeerByte is a social networking site made for co-workers to connect with each other more personally. With the help of this amazing application, users can create or join workplaces, post content to a specific or more than one workplace, chat with other members of the workplaces, like & comment on contents, all the things that will help users connect together. We have added a ton of features to make users' life easier while keeping simplicity in mind. Our one of the main motive was to create a simple and user-friendly social media app that users will be able to use in seconds without having to go through some unnecessary process.

The project was created using MERN stack. We used **MongoDB**(MongoDB Atlas) as our database, **Auth0**(JWT & OAuth) for the authentication, and deployed the application to **Heroku**.

### Landing page

![landing](https://res.cloudinary.com/dmn19/image/upload/v1630916577/landingpage.png)


### Home page

![Home](https://res.cloudinary.com/dmn19/image/upload/v1630916557/homephotos.png)

### Chat tab

![Chat](https://res.cloudinary.com/dmn19/image/upload/v1630916555/messagespage.png)

### User profile page

![profile](https://res.cloudinary.com/dmn19/image/upload/v1630916556/profilepage.png)

### Search members

![members](https://res.cloudinary.com/dmn19/image/upload/v1630916715/member.png)

### Here is a list of features that we are providing:

1. User can register either by their email address or with their google account.
2. Once registered, user will be redirected to home page where user can either create a workplace and invite other users to that workplace or join a public workplace by typing an available public workplace name.
3. Once the user becomes a member of a workplace, he/she will be able to post contents to that workplace.
4. User can be a member of multiple workplaces. So if user wants, then at the time of posting any content, user will be given the option to choose where he/she wants to post the content to.
5. User can view contents that are posted by the members of the workplaces that user is in.
6. User can view all the users that member of a specific workplace in the **Members** tab.
7. User can chat with other members in the **Chat** tab.
8. User can add/update the profile details such as bio, residence, profile image, social links etc in the **Profile** tab.

## Future plans

We could not implement all the features that we're planning to, but we'll add them after this event. Some of the features that we are going to be implementing are:

- Video calling feature
- Notification
- User can create a private group and invite other members by sending on referral code
- Saving, Sharing posts
- Adding the support for sharing other media files such as video, documents, links etc
- Making a member of the workplace admin by an another admin
- Adding other users in a workplace by admin.

## License

[MIT](https://choosealicense.com/licenses/mit/)
