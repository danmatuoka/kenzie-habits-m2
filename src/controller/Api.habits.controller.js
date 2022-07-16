export default class Habits {
    static baseUrl = 'https://habits-kenzie.herokuapp.com'

    static async createHabit(data) {
        const token = JSON.parse(localStorage.getItem('@capstone:token'))
        return await fetch(`${this.baseUrl}/api/habits`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async readAllHabits() {
        const token = JSON.parse(localStorage.getItem('@capstone:token'))
        return await fetch(`${this.baseUrl}/api/habits`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async getHabitByCategory(category) {
        const token = JSON.parse(localStorage.getItem('@capstone:token'))
        return await fetch(`${this.baseUrl}/api/habits/category/${category}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async updateHabit(data, habitId) {
        const token = JSON.parse(localStorage.getItem('@capstone:token'))
        return await fetch(`${this.baseUrl}/api/habits/${habitId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    static async completeHabit(habitId) {
        const token = JSON.parse(localStorage.getItem('@capstone:token'))
        return await fetch(`${this.baseUrl}/api/habits/complete/${habitId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async deleteHabit(habitId) {

        const token = JSON.parse(localStorage.getItem('@capstone:token'))

        return await fetch(`${this.baseUrl}/api/habits/${habitId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}


