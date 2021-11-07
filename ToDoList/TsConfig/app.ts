/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />



function GreetUser(user: string) {
    return "<h2>Hello " + Users + ", Lets learn TypeScript</h2>";
}

function ChangeText() {
    document.getElementById("msgDiv").innerHTML = GreetUser("Shaikh");
}

function load(): void {

    $.getJSON('http://localhost:44378/Tasks/IndexUser',
        (data) => {
            this.users = data;
            alert('data downloaded');

        });
}

function displayUsers(): void {

    var table = '<table class="table">'
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


class UserList {

    private users: Array<Users> = new Array<Users>();
    



   
    
}

class Users {

    Id: number;
    Name: string;
    Mail: string;
    Role: string;
    Password: string;

    
}



window.onload = () => {
    var userList: UserList = new UserList();
    $("#loadBtn").click(() => {
        
    });

    $("#displayBtn").click(() => {

    });
};





