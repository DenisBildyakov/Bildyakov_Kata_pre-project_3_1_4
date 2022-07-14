const editUserLink = "http://localhost:8080/api/users/edituser"
// Функция для редактирования юзера
function editUser(id) {
    // Собираем отменченные роли, формируем на их основе объект и помещаем объекты в массив
    let roles = []
    $('#checkBoxList' + id + ' input[name="roles' + id + '"]:checked').each(function () {
        let obj = {"id": jQuery(this).val(), "role": jQuery(this).attr("id")}
        roles.push(obj);
    })
    // формируем тело запроса
    let newUserJSON = {
        id: id,
        firstName: $("#firstName_edit" + id).val().trim(),
        lastName: $("#lastName_edit" + id).val().trim(),
        age: $("#age_edit" + id).val().trim(),
        email: $("#email_edit" + id).val().trim(),
        password: $("#password_edit" + id).val().trim(),
        roles: roles
    };
    // выполняем сам запрос
    fetch(editUserLink, {
        method: "PUT",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify(newUserJSON)
    }).then(response => showAllUsers());
}