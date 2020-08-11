function sendMessage() {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/742864526373945505/8ICR6Jl3yY8OtZydV9bhjMjIJSNQcz_bZICA7LKLfRlF4KZz79L-5lshMdCEP370Zn9e"
  );
  request.setRequestHeader("Content-type", "application/json");
  var message_content = document.getElementById("Message").value;
  var username = document.getElementById("username").value;
  var params = {
    username: username,
    avatar_url: "",
    content: message_content
  };
  request.send(JSON.stringify(params));
  alert("Message Sent!")
}
