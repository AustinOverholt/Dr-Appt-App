var userapi = {
    // function to get users from api
    getUsers() {
        var url = "http://192.168.1.113:8080/users.json";
        return fetch(url).then((res) => res.json());
    },

    // function to get appointments from api
    getAppointments() {
        var url = "http://192.168.1.113:8080/appointments.json";
        return fetch(url).then((res) => res.json());
    }
};

module.exports = userapi;