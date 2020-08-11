function sendMessage() {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discordapp.com/api/webhooks/742522935427989676/r0vZWi5dy0QLh0V_NUgUcxwznCl7Rbw47ud_ynqPjEO5dtPXtoMSnIs62uvThacaU6R0"
  );
  request.setRequestHeader("Content-type", "application/json");
  var message_content = document.getElementById("Message").value;
  var username = document.getElementById("username").value;
  var params = {
    username: username,
    avatar_url: "",
    content: "``".concat(message_content.concat("``"))
  };
  request.send(JSON.stringify(params));
  alert("Message Sent!")
}
