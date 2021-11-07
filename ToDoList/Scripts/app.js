/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var UserList = /** @class */ (function () {
    function UserList() {
        this.users = new Array();
    }
    UserList.prototype.load = function () {
        var _this = this;
        $.getJSON('http://localhost:44378/Tasks/IndexUser', function (data) {
            _this.users = data;
            alert('data downloaded');
        });
    };
    UserList.prototype.displayUsers = function () {
        var table = '<table class="table">';
        for (var i = 0; i < this.users.length; i++) {
            var tableRow = '<tr>' +
                '<td>' + this.users[i].Id + '</td>' +
                '<td>' + this.users[i].Name + '</td>' +
                '<td>' + this.users[i].Mail + '</td>' +
                '<td>' + this.users[i].Role + '</td>' +
                '<td>' + this.users[i].Password + '</td>' +
                '</tr>';
            table += tableRow;
        }
        table += '</table>';
        $('#content').html(table);
    };
    return UserList;
}());
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
window.onload = function () {
    var userList = new Users();
    $("#loadBtn").click(function () { });
    $("#displayBtn").click(function () { });
};
var tom = new Users();
var header = this.document.getElementById("header");
header.innerHTML = "Привет " + tom.Name;
//# sourceMappingURL=app.js.map