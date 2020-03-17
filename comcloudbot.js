/*
      Node Sandbox
      message
      client
*/
var x = [];

var wiki = [
      `Wiki 1`,`Wiki 2`
];

let cmd = message.body.split(" ");

switch (cmd[0]) {
      case "!add":
            x.push(cmd[1]);
            client.sendText(message.from,x);
            break;
      case "!help":
            let page = (cmd[1]>wiki.length)?1:cmd[1];
            client.sendText(message.from,wiki[page-1]);
}
