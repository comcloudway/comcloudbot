/*
      Node Sandbox
      message
      client
*/
var x = []

let cmd = message.split(" ")

switch (cmd[0]) {
      case "!add":
            x.push(cmd[1])
            client.send(message.from,x)
            break;
}
