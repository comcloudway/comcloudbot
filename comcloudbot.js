/*
      Node Sandbox
      message{}
      client{}
      data{}
      cmd[]
*/

if(data.store==undefined) data.store = {};

var wiki = [
      `Wiki 1\ntest`,`Wiki 2`
];

 cmd = message.body.split(" ");

switch (cmd[0]) {
      case "!help":
            if(isNaN(cmd[1])) cmd[1]=1;
            let page = (cmd[1]>wiki.length)?1:cmd[1];
            client.sendText(message.from,wiki[page - 1]);
            break;
      case "Hi":
             client.sendText(message.from,"Hi! 😀");
            break;
}
