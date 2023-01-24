# Call of Duty 
Welcome! For my full-stack application, I have created a gun tracker based off Call of Duty: Modern Warefare (COD). In this gun tracker, you can create a gun you may want in COD, and maybe you haven't unlocked it yet, you can add it to the tracker and it will show you the info on that gun until you delete it. This way, you can add all the guns you need to unlock before unlocking the final gun you're wanting. Once finished, you can use it as reference while playing COD to unlock guns.

![COD Gun Tracker](https://user-images.githubusercontent.com/113128158/214409597-03ab705c-ab41-4d31-942a-49ea7bd80d66.jpg)
![COD Gun Tracker (1)](https://user-images.githubusercontent.com/113128158/214409671-bef5a8b3-b061-4ee3-aebf-ca43628c9912.jpg)

## Technologies Used 
HTML, CSS, Javascript, Express, Mongodb, Mongoose, Cors, Passport, Passport_JWT, Jsonwebtoken, and Bcrypt

## Next Steps
Version 1: 
As a user I want to be able to...
    - add a gun
    - delete a gun
    - update a gun 
    - login and logout
    - sign up

Version 2: 
As a user I want to be able to...
    - have COD themed music playing in the background
    - have an avatar connected to the user

Version 3:
As a user I want to be able to...
    - see each gun with an image of the gun when hitting "Show Gun"
    - have the avatar be styled with a "favorite" gun

## ERD Screenshot
![COD Gun Tracker (2)](https://user-images.githubusercontent.com/113128158/214409694-43c25727-bbb7-497c-b821-92c33b3ef831.jpg)

## Routes Table 
### /guns
| Name        | Path                 | HTTP VERB | Purpose                 |
| ----------- | -------------------- | --------- | ----------------------- |
| Index       | /guns                |   GET     |  Displays all guns      |
| Show        | /guns/:id            |   GET     |  Shows newly added guns |
| Create      | /guns                |   Post    |  Creates a new gun      |
| Update      | /gun/:id             |   Patch   |  Updates the gun        |
| Delete      | /guns/:id            |   Delete  |  Deletes the gun        |


