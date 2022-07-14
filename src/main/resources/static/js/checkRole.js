async function checkMeUserRole() {
    let user = await fetch(findMeUser).then(response => response.text());

    // проверям, если залогинившийся юзер имеет только роль юзера,
    // то отправляем его на страницу с информацией,
    // если же есть роль админа, то на админ панель
    if (user.includes("ROLE_USER") && user.includes("ROLE_ADMIN")) {
        showAllUsers();
    } else if (user.includes("ROLE_ADMIN") && !user.includes("ROLE_USER")) {
        showAllUsers();
    } else if (user.includes("ROLE_USER") && !user.includes("ROLE_ADMIN")) {
        showSideMenuForUserOnly();
    }
}