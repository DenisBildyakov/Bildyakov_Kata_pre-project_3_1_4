const findMeUser = "http://localhost:8080/api/userinfo";
let meUser;

// Функция для обновления перменной
function getMeUser() {
    meUser = fetch(findMeUser).then(response => response.json());
}

// Обновляем переменную
getMeUser();

// Функция конструирует шапку сайта
function meUserHeader() {
    meUser.then(user => {
        $("<strong>" + user.email + "</strong>&nbsp;<span>with roles:" + user.roles.map(r => {
            if (r.role === "ROLE_ADMIN") {
                return " Admin"
            } else if (r.role === "ROLE_USER") {
                return " User"
            }
        }) + "</span>").appendTo("#meUserHeader")
    });
}

// Функция конструирует таблицу с информацией о текущем юзере
function meUserInfo() {
    meUser.then(user => {
        $("#usersInfoTable").children().remove();
        $(
            "<tr>" +
            "<td class=\"text-center\">" + user.id + "</td>" +
            "<td class=\"text-center\">" + user.firstName + "</td>" +
            "<td class=\"text-center\">" + user.lastName + "</td>" +
            "<td class=\"text-center\">" + user.age + "</td>" +
            "<td class=\"text-center\">" + user.email + "</td>" +
            "</tr>")
            .appendTo("#usersInfoTable")
    });
}