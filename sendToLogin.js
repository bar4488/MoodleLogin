function move_to_login() {
    let hrefs = document.getElementsByTagName("a");
    for (a of hrefs) {
        if (a.href == "https://moodle.tau.ac.il/login/index.php") {
            a.click();
        }
    }
}

window.onload = move_to_login;