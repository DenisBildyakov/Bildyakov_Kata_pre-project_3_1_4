function showSideMenuForUserOnly() {
    // Конструкция бокового меню для юзера
    $("#sideMenu").children().remove();
    $(
        "<li class=\"nav-item\"><a class=\"nav-link active\"  onclick=\"showSideMenuForUserOnly()\">User info</a></li>"
    ).appendTo("#sideMenu");
    // вызываем функцию для создания таблицы с информацией о юзере
    showUserInfo();
}

function showSideMenuForAdminAndUser() {
    // Конструкция бокового меню для юзера и админа
    $("#sideMenu").children().remove();
    $(
        "<li id='adminPanelLink' class=\"nav-item\"><a class=\"nav-link\"  onclick=\"showAllUsers()\">Admin</a></li>" +
        "<li class=\"nav-item\"><a class=\"nav-link active\"  onclick=\"showSideMenuForAdminAndUser()\">User info</a></li>"
    ).appendTo("#sideMenu");
    // вызываем функцию для создания админ панели
    showUserInfo();
}

function showUserInfo() {
    // Конструкция заголовка окна
    $("#pageSubHeader").children().remove();
    $(
        "<h1>User information page</h1>"
    ).appendTo("#pageSubHeader");

    // Конструкция заголовка таблицы
    $("#usersTableSubHeader").children().remove();
    $(
        "<h3>&nbsp;About user</h3>"
    ).appendTo("#usersTableSubHeader");

    // Конструкция шапки таблицы
    $("#adminPanelNavTabs").children().remove();
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
        "</tr>" +
        "</thead>\n" +
        "<tbody id=\"usersInfoTable\">" +
        "</tbody>" +
        "</table>"
    ).appendTo("#tableInputArea");

    // Конструкция таблицы с юзером
    meUserInfo();
}
