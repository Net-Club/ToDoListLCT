/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
function GreetUser(user) {
    return "<h2>Hello " + Users + ", Lets learn TypeScript</h2>";
}
function ChangeText() {
    document.getElementById("msgDiv").innerHTML = GreetUser("Shaikh");
}
function load() {
    var _this = this;
    $.getJSON('http://localhost:44378/Tasks/IndexUser', function (data) {
        _this.users = data;
        alert('data downloaded');
    });
}
function displayUsers() {
    var table = '<table class="table">';
    for (var i = 0; i < this.users.length; i++) {
        var tableRow = '<tr>' +
            '<td>' + this.Users[i].Id + '</td>' +
            '<td>' + this.Users[i].Name + '</td>' +
            '<td>' + this.Users[i].Mail + '</td>' +
            '<td>' + this.Users[i].Role + '</td>' +
            '<td>' + this.Users[i].Password + '</td>' +
            '</tr>';
        table += tableRow;
    }
    table += '</table>';
    $('#content').html(table);
}
var UserList = /** @class */ (function () {
    function UserList() {
        this.users = new Array();
    }
    return UserList;
}());
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
window.onload = function () {
    var userList = new UserList();
    $("#loadBtn").click(function () {
    });
    $("#displayBtn").click(function () {
    });
};
//# sourceMappingURL=app.js.map