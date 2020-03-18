/*
      Node Sandbox
      message{}
      client{}
      SANDBOX{}.
            database{}
      cmd[]
*/



var wiki = [
      `Wiki 1\n !emoji - Emoji Liste\n !spam [anz] [txt] - Spamm`,`Wiki 2`
];

var emoji = [
      ["😇","😈"],
      ["🥶","🥵"],
      ["😠","😂"],
      ["🤬","🤣 "],
      ["😁","☹️"],
      ["😖","😄"],
      ["🙃","🙂"],
      ["😏","😒"],
      ["🥴","😜"]
]
if(message.body!=undefined) {
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
                  case "!spam":
                        let n = message.from.split("@")[0];

                        for(let i = 0; i++; i<= (cmd[1]>10)?10:cmd[1]) {
                              client.sendText(n,(cmd[2]!=undefined)?cmd[2]:"Hi!");
                        }
                        break;
}
} else {
      client.sendText(message.from,message)
}