const deleteUserLink = "http://localhost:8080/api/users/delete/"
// функция для удаления юзера
function deleteUser(id) {
    fetch(deleteUserLink+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json; charset=utf-8"}
    }).then(response => showAllUsers());
}