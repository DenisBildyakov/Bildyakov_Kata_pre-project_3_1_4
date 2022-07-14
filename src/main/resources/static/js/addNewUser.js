const addNewUser = "http://localhost:8080/api/users/newuser"

// Функция добавления юзера в базу
function addNewUserFunction() {
    // собираем отмеченные роли, формируем на их основе объект и помещаем объекты в массив, чтобы передать в запрос
    let roles = []
    $.each(jQuery("input[name='roles']:checked"), function () {
        let obj = {"id": jQuery(this).val(), "role": jQuery(this).attr("id")}
        roles.push(obj);
    });
    // собираем переменные для тела запроса
    let newUserJSON = {
        firstName: $("#firstName_add").val().trim(),
        lastName: $("#lastName_add").val().trim(),
        age: $("#age_add").val().trim(),
        email: $("#email_add").val().trim(),
        password: $("#password_add").val().trim(),
        roles: roles
    };
    // выполняем запрос
    fetch(addNewUser, {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify(newUserJSON)
    }).then(response => showAllUsers());
}