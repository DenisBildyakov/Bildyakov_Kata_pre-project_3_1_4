const getRolesList = "http://localhost:8080/api/roles"

async function findRolesList() {
    // Получает список всех ролей и возвращает его
    let roles = await fetch(getRolesList).then(response => response.json())
    return roles;
}