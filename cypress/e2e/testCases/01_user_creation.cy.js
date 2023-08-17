import User_creation from "../pageObjects/user_creation";
const user_creation = new User_creation

it ('create new user', function (){
    user_creation.user_creation()
})