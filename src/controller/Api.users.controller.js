export default class Users {
    static baseUrl = 'https://habits-kenzie.herokuapp.com'

    static async userLogin(data) {
        return await fetch(`${this.baseUrl}/api/userLogin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                if (res.token) {
                    localStorage.setItem('@capstone:token', JSON.stringify(res.token))
                    localStorage.setItem('@capstone:username', JSON.stringify(res.response.usr_name))
                    localStorage.setItem('@capstone:usr_img', JSON.stringify(res.response.usr_image))
                    window.location.href = "./src/views/homepage.views.html"
                } else {
                    throw new Error(res.message)
                }
            })
            .catch((err) => {
                let invalidLabel = document.querySelector('.invalid_label')
                invalidLabel.innerText = err.message
                invalidLabel.className = 'invalid_label'

            })
    }

    static async updateProfile(data) {
        const token = JSON.parse(localStorage.getItem('@capstone:token'))
        return await fetch(`${this.baseUrl}/api/user/profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('@capstone:usr_img', JSON.stringify(data.usr_image))
            })
            .catch(err => console.log(err))
    }

}