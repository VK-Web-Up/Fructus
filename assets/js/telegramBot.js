const TOKEN = '6361205931:AAHMHYwcmpdYWuS8l6m_JGXQqCFfnNlJYPU';
const CHAT_ID = -4052797104;

let formReservation = document.querySelector(".form-reservation");
let formRequest = document.querySelector(".form-request");

function formListen(formClass) {
  formClass.addEventListener("submit", function (e) {
    e.preventDefault();
    data = new FormData(this);
    sendMsg(data);
    if (formClass = formReservation) {
      document.querySelector(".form-close1").click();
    }
    if (formClass = formRequest) {
      document.querySelector(".form-close2").click();
    }
    this.location.reload();
  });
}

function sendMsg(data) {
  let url = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";
  let body = JSON.stringify({
    chat_id: CHAT_ID,
    parse_mode: "Markdown",
    text:
      "*Новый клиент*\n" +
      data.get("form-title") +
      "\n\n*Имя:* " +
      data.get("form-name") +
      "\n*Телефон:* " +
      data.get("form-phone") +
      "\n*Откуда:* [" +
      window.location.href +
      "](" +
      window.location.href +
      ")",
  });
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(body);
}







