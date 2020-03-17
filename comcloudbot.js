/*
      Node Sandbox
      message
      client
*/

var wiki = [
      `Wiki 1`,`Wiki 2`
];

 cmd = message.body.split(" ");

switch (cmd[0]) {
      case "!add":
            data.store.push(x)
            client.sendText(message.from,JSON.stringify(data));
            break;
      case "!help":
            let page = (cmd[1]>wiki.length)?1:cmd[1];
            client.sendText(message.from,wiki[page - 1]);
}
