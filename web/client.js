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
 * version: 1.0
 */
var ip = "电脑ip地址";
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
