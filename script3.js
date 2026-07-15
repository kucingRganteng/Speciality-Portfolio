function openTab(evt, tabName) {
    var column = evt.currentTarget.closest('.profile-column');
    var tabcontent = column.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }

    var tablinks = column.getElementsByClassName("tab-btn");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}