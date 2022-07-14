function showAllUsers() {
    // Конструкция бокового меню
    $("#sideMenu").children().remove();
    $(
        "<li id='adminPanelLink' class=\"nav-item\"><a class=\"nav-link active\" onclick=\"showAllUsers()\">Admin</a></li>" +
        "<li class=\"nav-item\"><a class=\"nav-link\" onclick=\"showSideMenuForAdminAndUser()\">User info</a></li>"
    ).appendTo("#sideMenu");

    // Конструкция заголовка окна
    $("#pageSubHeader").children().remove();
    $(
        "<h1>Admin panel</h1>"
    ).appendTo("#pageSubHeader");

    // Конструкция вкладок
    $("#adminPanelNavTabs").children().remove();
    $(
        "<tr>" +
        "<th>" +
        "<ul class=\"nav nav-tabs fw-normal\">" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link active\" onclick=\"showAllUsers()\">Users table</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" onclick=\"showAddUserPanel()\">New user</a>" +
        "</li>" +
        "</ul>" +
        "</th>" +
        "</tr>"
    ).appendTo("#adminPanelNavTabs");

    // Конструкция заголовка таблицы
    $("#usersTableSubHeader").children().remove();
    $(
        "<h3>&nbsp;All users</h3>"
    ).appendTo("#usersTableSubHeader");

    // Конструкция шапки таблицы
    $("#tableInputArea").children().remove();
    $(
        "<table class=\"table table-striped bg-white align-middle\">" +
        "<thead class=\"fs-5\">" +
        "<tr id=\"userInfoTableHeader\">" +
        "<th class=\"text-center\">Id</th>" +
        "<th class=\"text-center\">First Name</th>" +
        "<th class=\"text-center\">Last Name</th>" +
        "<th class=\"text-center\">Age</th>" +
        "<th class=\"text-center\">Email</th>" +
        "<th class=\"text-center\">Role</th>" +
        "<th class=\"text-center\">Edit</th>" +
        "<th class=\"text-center\">Delete</th>" +
        "</tr>" +
        "</thead>\n" +
        "<tbody id=\"usersInfoTable\">" +
        "</tbody>" +
        "</table>"
    ).appendTo("#tableInputArea");

    // Конструкция таблицы с юзерами
    showUsersTable();
}