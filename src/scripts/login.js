import Users from "../controller/Api.users.controller.js"
import Habits from "../controller/Api.habits.controller.js"

const form = document.querySelector(".form")
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    let login = {
        email: event.srcElement[0].value,
        password: event.srcElement[1].value
    }
    await Users.userLogin(login)
})

