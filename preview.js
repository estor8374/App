
const checkboxes = document.querySelectorAll('input[type=checkbox], input[type=color]');
checkboxes.forEach(cb => cb.addEventListener('change', updatePreview));
document.getElementById('appName').addEventListener('input', updatePreview);

function updatePreview() {
  const area = document.getElementById('previewArea');
  const bg = document.getElementById("bgColor").value;
  const tc = document.getElementById("textColor").value;
  area.style.backgroundColor = bg;
  area.style.color = tc;

  let content = "";

  if (document.getElementById("txtbox").checked)
    content += "<input type='text' placeholder='Text'><br/>";
  if (document.getElementById("btn").checked)
    content += "<button>Click Me</button><br/>";
  if (document.getElementById("webview").checked)
    content += "<div style='width:100%;height:100px;border:1px solid #ccc;'>[WebView]</div><br/>";
  if (document.getElementById("imagePicker").checked)
    content += "<input type='file' accept='image/*'><br/>";
  if (document.getElementById("camera").checked)
    content += "<button>Open Camera</button><br/>";

  area.innerHTML = content;
}
