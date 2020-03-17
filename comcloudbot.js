/*
      Node Sandbox
      message{}
      client{}
      data{}
      cmd[]
*/

if(data.store==undefined) data.store = {};

var wiki = [
      `Wiki 1\n !emoji - Emoji Liste`,`Wiki 2`
];

var emoji = [
      ["😇","😈"],
      ["🥶","🥵"],
      ["😠","😂"],
      ["🤦‍♀️","🤦‍♂️"],
      ["🤬","🤣 "],
      ["😁","☹️"],
      ["😖","😄"],
      ["🙃","🙂"],
      ["😏","😒"],
      ["🥴","😜"]
]

 cmd = message.body.split(" ");

switch (cmd[0]) {
      case "!help":
            if(isNaN(cmd[1])) cmd[1]=1;
            let page = (cmd[1]>wiki.length)?1:cmd[1];
            client.sendText(message.from,wiki[page - 1]);
            break;
      case "Hi":
            let s = "😀"
            for(let e of emoji) {
                  if(e[0]==cmd[1]){
                        s=e[1]
                        break;
                  } else if(e[1]==cmd[1]) {
                        s=e[0]
                        break;
                  }
                  
            }
             client.sendText(message.from,"Hi! "+s);
            break;
            case "!emoji":
                  let m = ""
                  for(let e of emoji) {
                        m+=e[0]+"<>"+e[1]+"\n"
                  }
                  client.sendText(message.from,m);
                  break;
}
