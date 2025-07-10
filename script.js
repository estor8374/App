
function generateCode() {
  const name = document.getElementById("appName").value || "My App";
  const bg = document.getElementById("bgColor").value;
  const tc = document.getElementById("textColor").value;

  let html = \`<html>\n<head><title>\${name}</title></head>\n<body style="background:\${bg};color:\${tc};">\n\`;

  if (document.getElementById("txtbox").checked)
    html += "<input type='text' placeholder='Enter text'/><br/>\n";
  if (document.getElementById("btn").checked)
    html += "<button onclick='alert(\'Clicked\')'>Click Me</button><br/>\n";
  if (document.getElementById("webview").checked)
    html += "<iframe src='https://example.com' width='100%' height='200'></iframe><br/>\n";
  if (document.getElementById("imagePicker").checked)
    html += "<input type='file' accept='image/*'><br/>\n";
  if (document.getElementById("camera").checked)
    html += "<button onclick='alert(\'Camera Opened (Mock)\')'>Open Camera</button><br/>\n";

  html += "</body>\n</html>";
  document.getElementById("output").value = html;
}
