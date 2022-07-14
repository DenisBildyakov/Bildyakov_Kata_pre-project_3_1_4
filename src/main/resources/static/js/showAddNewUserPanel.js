// функция конструирует страницу для добавления юзера
function showAddUserPanel() {
    // вызываем функцию для построения вкладок
    showTabs();

    // Конструкция заголовка таблицы
    $("#usersTableSubHeader").children().remove();
    $(
        "<h3>&nbsp;Add new user</h3>"
    ).appendTo("#usersTableSubHeader");

    // Конструкция формы с добавлением юзера
    $("#tableInputArea").children().remove();
    $(
        "<div class=\"row\">\n" +
        "                            <div class=\"col-4\"></div>\n" +
        "                            <div class=\"col-4\">\n" +
        "                                <form id='formNewUser'>\n" +
        "                                    <table class=\"table bg-white align-middle table-borderless\">\n" +
        "                                        <tbody>\n" +
        "                                        <tr>\n" +
        "                                            <td class=\"text-left fs-5\">\n" +
        "                                                <label for=\"firstName_add\">Enter name:</label>\n" +
        "                                            </td>\n" +
        "                                            <td class=\"text-center\">\n" +
        "                                                <input class=\"form-control\" type=\"text\" id=\"firstName_add\" name=\"firstName\">\n" +
        "                                            </td>\n" +
        "                                        </tr>\n" +
        "                                        <tr>\n" +
        "                                            <td class=\"text-left fs-5\">\n" +
        "                                                <label for=\"lastName_add\">Enter Last Name:</label>\n" +
        "                                            </td>\n" +
        "                                            <td class=\"text-center\">\n" +
        "                                                <input class=\"form-control\" type=\"text\" id=\"lastName_add\" name=\"lastName\">\n" +
        "                                            </td>\n" +
        "                                        </tr>\n" +
        "                                        <tr>\n" +
        "                                            <td class=\"text-left fs-5\">\n" +
        "                                                <label for=\"age_add\">Enter age:</label>\n" +
        "                                            </td>\n" +
        "                                            <td class=\"text-center\">\n" +
        "                                                <input class=\"form-control\" type=\"text\" id=\"age_add\" name=\"age\">\n" +
        "                                            </td>\n" +
        "                                        </tr>\n" +
        "                                        <tr>\n" +
        "                                            <td class=\"text-left fs-5\">\n" +
        "                                                <label for=\"email_add\">Enter Email:</label>\n" +
        "                                            </td>\n" +
        "                                            <td class=\"text-center\">\n" +
        "                                                <input class=\"form-control\" type=\"text\" id=\"email_add\" name=\"email\">\n" +
        "                                            </td>\n" +
        "                                        </tr>\n" +
        "                                        <tr id=\"rolesCheckboxes\">\n" +
        "                                            <td class=\"text-left fs-5\">\n" +
        "                                                <label for=\"password_add\">Enter Password:</label>\n" +
        "                                            </td>\n" +
        "                                            <td class=\"text-center\">\n" +
        "                                                <input class=\"form-control\" type=\"text\" id=\"password_add\" name=\"password\">\n" +
        "                                            </td>\n" +
        "                                        </tr>\n" +
        "                                        <tr>\n" +
        "                                            <td class=\"text-center btn-lg\" colspan=\"2\">\n" +
        "                                                <input class=\"btn btn-success\" type=\"button\" onclick=\"addNewUserFunction()\" value=\"ADD NEW USER\"/>\n" +
        "                                            </td>\n" +
        "                                        </tr>\n" +
        "                                        </tbody>\n" +
        "                                    </table>\n" +
        "                                </form>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-4\"></div>\n" +
        "                        </div>"
    ).appendTo("#tableInputArea");
    // формируем список ролей с чекбоксами
    findRolesList().then(r => r.map(role => {
        $("#rolesCheckboxes").after(
            "<tr><td class=\"text-left fs-5\">\n" +
            "<label for=\"" + role.role + "\" class=\"form-check-label\">" + role.role.replace("ROLE_ADMIN", "Admin").replace("ROLE_USER", "User") + "</label>\n" +
            "</td>" +
            "<td class=\"text-center\">" +
            "<input name=\"roles\" id=\"" + role.role + "\" class=\"form-check-input\" type=\"checkbox\" value=\"" + role.id + "\"/></td></tr>")
    }));
}

// Конструкция вкладок
function showTabs() {
    $("#adminPanelNavTabs").children().remove();
    $(
        "<tr>" +
        "<th>" +
        "<ul class=\"nav nav-tabs fw-normal\">" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" onclick=\"showAllUsers()\">Users table</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link active\" onclick=\"showAddUserPanel()\">New user</a>" +
        "</li>" +
        "</ul>" +
        "</th>" +
        "</tr>"
    ).appendTo("#adminPanelNavTabs");
}