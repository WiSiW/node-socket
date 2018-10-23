/**
 * author:
 *   __              __              __        ________        __              __              __
 *  \   \          /    \          /   /      |   __   |      \   \          /    \          /   /
 *   \   \        /      \        /   /       |  |  |__|       \   \        /      \        /   /
 *    \   \      /   /\   \      /   /        |  |_____         \   \      /   /\   \      /   /
 *     \   \    /   /  \   \    /   /         |_____   |         \   \    /   /  \   \    /   /
 *      \   \  /   /    \   \  /   /           __   |  |          \   \  /   /    \   \  /   /
 *       \   \/   /      \   \/   /           |  |__|  |           \   \/   /      \   \/   /
 *        \______/        \______/            |________|            \______/        \______/
 */
var ip = "192.168.1.43";
var socket = io("http://"+ip+":3001");

socket.emit("login","wsw")

socket.on("message", function (data) {
    console.log(data);
    switch(data.event){
    }
});

function send(message){
    var message = {
        event:"join",
        name:"wsw",
        room:1
    };
    console.log(message);
    socket.send(JSON.stringify(message));
}