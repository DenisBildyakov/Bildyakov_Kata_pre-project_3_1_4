const findUsersList = "http://localhost:8080/api/users";

function showUsersTable() {
    // конструирует таблицу со всеми юзерами и модальными окнами
    $("#usersInfoTable").children().remove();
    fetch(findUsersList).then(response => response.json()).then(users => users.map(user => {
        $(
            "<tr>" +
            "<td class=\"text-center\">" + user.id + "</td>" +
            "<td class=\"text-center\">" + user.firstName + "</td>" +
            "<td class=\"text-center\">" + user.lastName + "</td>" +
            "<td class=\"text-center\">" + user.age + "</td>" +
            "<td class=\"text-center\">" + user.email + "</td>" +
            "<td class=\"text-center\">" + user.roles.map(r => {
                if (r.role === "ROLE_ADMIN") {
                    return " Admin"
                } else if (r.role === "ROLE_USER") {
                    return " User"
                }
            }) + "</td>" +
            "<td class=\"text-center\">" +
            "<button type=\"button\" class=\"btn btn-success\" data-bs-toggle=\"modal\"" +
            "data-bs-target=\"#editModal" + user.id + "\">" +
            "Edit user" +
            "</button>" +
            "<div class=\"modal fade\" id=\"editModal" + user.id + "\" tabindex=\"-1\" aria-hidden=\"true\">" +
            "<div class=\"modal-dialog modal-dialog-centered\">\n" +
            "<div class=\"modal-content\">\n" +
            "<div class=\"modal-header\">\n" +
            "<h5 class=\"modal-title\">Edit user</h5>\n" +
            "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n" +
            "</div>" +
            "<form>\n" +
            "    <div class=\"modal-body\">\n" +
            "        <table class=\"table bg-white align-middle table-borderless\">\n" +
            "            <tbody>\n" +
            "            <tr>\n" +
            "                <td class=\"text-left fs-5\">\n" +
            "                    <label for=\"firstName_edit" + user.id + "\">Name:</label>\n" +
            "                </td>\n" +
            "                <td class=\"text-center\">\n" +
            "                    <input class=\"form-control\" type=\"text\"\n" +
            "                           name=\"firstName\"\n" +
            "                           id=\"firstName_edit" + user.id + "\" value=\"" + user.firstName + "\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"text-left fs-5\">\n" +
            "                    <label for=\"lastName_edit" + user.id + "\">Last Name:</label>\n" +
            "                </td>\n" +
            "                <td class=\"text-center\">\n" +
            "                    <input class=\"form-control\" type=\"text\"\n" +
            "                           name=\"lastName\"\n" +
            "                           id=\"lastName_edit" + user.id + "\" value=\"" + user.lastName + "\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"text-left fs-5\">\n" +
            "                    <label for=\"age_edit" + user.id + "\">Age:</label>" +
            "                </td>\n" +
            "                <td class=\"text-center\">\n" +
            "                    <input class=\"form-control\" type=\"text\" name=\"age\" id=\"age_edit" + user.id + "\" value=\"" + user.age + "\">" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"text-left fs-5\">\n" +
            "                    <label for=\"email_edit" + user.id + "\">Email:</label>\n" +
            "                </td>\n" +
            "                <td class=\"text-center\">\n" +
            "                    <input class=\"form-control\" type=\"text\" name=\"email\"\n" +
            "                           id=\"email_edit" + user.id + "\" value=\"" + user.email + "\">\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "            <tr id=\"rolesCheckboxes" + user.id + "\">\n" +
            "                <td class=\"text-left fs-5\">\n" +
            "                    <label for=\"password_edit" + user.id + "\">Password:</label>\n" +
            "                </td>\n" +
            "                <td class=\"text-center\">\n" +
            "                    <input class=\"form-control\" type=\"text\"\n" +
            "                           name=\"password\"\n" +
            "                           id=\"password_edit" + user.id + "\" value=\"" + user.password + "\">\n" +
            "                </td>\n" +
            "            </tr>" +
            "            </tbody>\n" +
            "        </table>\n" +
            "        <div class=\"modal-footer\">\n" +
            "            <button class=\"btn btn-secondary\" type=\"button\"\n" +
            "                    data-bs-dismiss=\"modal\">\n" +
            "                Close\n" +
            "            </button>\n" +
            "            <button class=\"btn btn-primary\" data-bs-dismiss=\"modal\" type=\"button\" onclick=\"editUser(" + user.id + ")\" value=\"Edit\">Edit\n</button>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</form>\n" +
            "</div>\n" +
            "</div>\n" +
            "</div></td>" +
            "<td class=\"text-center\">" +
            "<button type=\"button\" class=\"btn btn-danger\" data-bs-toggle=\"modal\" data-bs-target=\"#deleteModal" + user.id + "\">Delete</button>" +
            "                                    <div class=\"modal fade\" id=\"deleteModal" + user.id + "\" tabindex=\"-1\"\n" +
            "                                         aria-hidden=\"true\">\n" +
            "                                        <div class=\"modal-dialog modal-dialog-centered\">\n" +
            "                                            <div class=\"modal-content\">\n" +
            "                                                <div class=\"modal-header\">\n" +
            "                                                    <h5 class=\"modal-title\">Delete user</h5>\n" +
            "                                                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"\n" +
            "                                                            aria-label=\"Close\"></button>\n" +
            "                                                </div>\n" +
            "                                                <form>\n" +
            "                                                    <div class=\"modal-body\">\n" +
            "                                                        <table class=\"table bg-white align-middle table-borderless\">\n" +
            "                                                            <tbody>\n" +
            "                                                            <tr>\n" +
            "                                                                <td class=\"text-left fs-5\">\n" +
            "                                                                    <label for=\"id\">Id:</label>\n" +
            "                                                                </td>\n" +
            "                                                                <td class=\"text-center\">\n" +
            "                                                                    <input class=\"form-control\" type=\"text\" id=\"id\" value=\"" + user.id + "\" disabled>\n" +
            "                                                                </td>\n" +
            "                                                            </tr>\n" +
            "                                                            <tr>\n" +
            "                                                                <td class=\"text-left fs-5\">\n" +
            "                                                                    <label for=\"firstName\">Name:</label>\n" +
            "                                                                </td>\n" +
            "                                                                <td class=\"text-center\">\n" +
            "                                                                    <input class=\"form-control\" type=\"text\" id=\"firstName\" value=\"" + user.firstName + "\" disabled>\n" +
            "                                                                </td>\n" +
            "                                                            </tr>\n" +
            "                                                            <tr>\n" +
            "                                                                <td class=\"text-left fs-5\">\n" +
            "                                                                    <label for=\"lastName\">Last Name:</label>\n" +
            "                                                                </td>\n" +
            "                                                                <td class=\"text-center\">\n" +
            "                                                                    <input class=\"form-control\" type=\"text\" id=\"lastName\" value=\"" + user.lastName + "\" disabled>\n" +
            "                                                                </td>\n" +
            "                                                            </tr>\n" +
            "                                                            <tr>\n" +
            "                                                                <td class=\"text-left fs-5\">\n" +
            "                                                                    <label for=\"age\">Age:</label>\n" +
            "                                                                </td>\n" +
            "                                                                <td class=\"text-center\">\n" +
            "                                                                    <input class=\"form-control\" type=\"text\" id=\"age\" value=\"" + user.age + "\" disabled>\n" +
            "                                                                </td>\n" +
            "                                                            </tr>\n" +
            "                                                            <tr id=\"rolesCheckboxesDisabled" + user.id + "\">\n" +
            "                                                                <td class=\"text-left fs-5\">\n" +
            "                                                                    <label for=\"Email\">Email:</label>\n" +
            "                                                                </td>\n" +
            "                                                                <td class=\"text-center\">\n" +
            "                                                                    <input class=\"form-control\" type=\"text\" id=\"Email\" value=\"" + user.email + "\" disabled>\n" +
            "                                                                </td>\n" +
            "                                                            </tr>" +
            "                                                            </tbody>\n" +
            "                                                        </table>\n" +
            "                                                        <div class=\"modal-footer\">\n" +
            "                                                            <button class=\"btn btn-secondary\" type=\"button\"\n" +
            "                                                                    data-bs-dismiss=\"modal\">\n" +
            "                                                                Close\n" +
            "                                                            </button>\n" +
            "                                                            <button class=\"btn btn-danger\" data-bs-dismiss=\"modal\" type=\"button\" onclick=\"deleteUser(" + user.id + ")\" value=\"DELETE\">\n" +
            "                                                                Delete\n" +
            "                                                            </button>\n" +
            "                                                        </div>\n" +
            "                                                    </div>\n" +
            "                                                </form>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div></td>" +
            "</tr>")
            .appendTo("#usersInfoTable")

        // Строим список ролей для модального окна редактирования
        findRolesList().then(r => r.map(role => {
            $("#rolesCheckboxes" + user.id).after(
                "<tr id=\"checkBoxList" + user.id + "\"><td class=\"text-left fs-5\">\n" +
                "<label for=\"" + role.role + "\" class=\"form-check-label\">" + role.role.replace("ROLE_ADMIN", "Admin").replace("ROLE_USER", "User") + "</label>\n" +
                "</td>" +
                "<td class=\"text-center\">" +
                "<input name=\"roles" + user.id + "\" id=\"" + role.role + "\" class=\"form-check-input\" value=\"" + role.id + "\" type=\"checkbox\" />" +
                "</td></tr>")
            // Отмечаем чекбоксы ролей, которые есть у юзера для модального окна редактирования
            user.roles.map(rrr => {
                $('#checkBoxList' + user.id + ' input[name="roles' + user.id + '"]').each(function () {
                    if (rrr.role.includes(jQuery(this).attr("id"))) {
                        jQuery(this).attr('checked', 'checked')
                    }
                })
            })
        }))
        // Строим список ролей для модального окна удаления
        findRolesList().then(r => r.map(role => {
            $("#rolesCheckboxesDisabled" + user.id).after(
                "<tr id=\"checkBoxListDelete" + user.id + "\"><td class=\"text-left fs-5\">\n" +
                "<label for=\"" + role.role + "\" class=\"form-check-label\">" + role.role.replace("ROLE_ADMIN", "Admin").replace("ROLE_USER", "User") + "</label>\n" +
                "</td>" +
                "<td class=\"text-center\">" +
                "<input name=\"rolesDelete" + user.id + "\"  id=\"" + role.role + "\" class=\"form-check-input\" type=\"checkbox\" disabled/>" +
                "</td></tr>")
            // Отмечаем чекбоксы ролей, которые есть у юзера для модального окна удаления
            user.roles.map(roleForDelete => {
                $('#checkBoxListDelete' + user.id + ' input[name="rolesDelete' + user.id + '"]').each(function () {
                    if (roleForDelete.role.includes(jQuery(this).attr("id"))) {
                        jQuery(this).attr('checked', 'checked')
                    }
                })
            })
        }))
    }));
}