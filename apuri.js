if (window.innerWidth < 600) {
  console.log("スマホ用処理");
}
var a=0


// ボタンを押すと音が鳴る
$(".help").on("click", function () {
  const audio = new Audio("./oto.mp3");
  audio.currentTime = 0; // 連続クリック対応
  audio.volume = 1.0;
  audio.play().catch(err => {
    console.log("再生エラー:", err);
  });
});

// constとは、中身が変られない定数を定義する関数
const memo = document.getElementById("memo");
const output = document.getElementById("output");
const saveBtn = document.getElementById("saveBtn");
const mailForm = document.getElementById("contact-form"); // まとめて操作する要素
const sendButton = document.getElementById("send-button");

if(a==0){
  memo.style.display = "none";
  mailForm.style.display = "none"
  $("#saveBtn").html("編集");}
  else if(a==1){
  memo.style.display = "block"
  mailForm.style.display = "block";
  $("#saveBtn").html("保存");
}

// ページを開いたときに保存内容を読み込む
var savedMemo = localStorage.getItem("memo");

// 要素の取得
var sendTo = document.querySelector('input[name="send_to"]');
var userName = document.querySelector('input[name="user-name"]');
var userEmail = document.querySelector('input[name="user-email"]');
var message = document.querySelector('textarea[name="message"]');

if (savedMemo) {
  memo.value = savedMemo;      // 編集用に表示
  output.textContent = savedMemo; // 表示
}

window.addEventListener('load', () => {
    var savedSendTo = localStorage.getItem("send_to");
    var savedUserName = localStorage.getItem("user-name");
    var savedUserEmail = localStorage.getItem("user-email");
    var savedMessage = localStorage.getItem("message");

    if (savedSendTo){ sendTo.value = savedSendTo
      document.getElementById("display-send-to").innerText = savedSendTo;
    }
    if (savedUserName){ userName.value = savedUserName
      document.getElementById("display-user-name").innerText = savedUserName;
    }
    if (savedUserEmail){ userEmail.value = savedUserEmail
      document.getElementById("display-user-email").innerText = savedUserEmail;
    };
    if (savedMessage) {message.value = savedMessage
      document.getElementById("display-message").innerText = savedMessage;
    };

    console.log("データを復元しました");
});
// 保存ボタンを押したとき
console.log(saveBtn);
if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        if (a == 0) {
            // 編集モードへ
            memo.style.display = "block";
            mailForm.style.display = "block";
            sendButton.style.display = "none"; // ← 追加
            $("#saveBtn").html("保存");
            a = 1;
            console.log(a)
        } else {
            // 保存処理
            const text = memo.value;
            
            localStorage.setItem("memo", text);
            localStorage.setItem("send_to", sendTo.value);
            localStorage.setItem("user-name", userName.value);
            localStorage.setItem("user-email", userEmail.value);
            localStorage.setItem("message", message.value);
            var savedSendTo = localStorage.getItem("send_to");
            var savedUserName = localStorage.getItem("user-name");
            var savedUserEmail = localStorage.getItem("user-email");
            //上書き
            output.textContent = text;
            document.getElementById("display-send-to").innerText = savedSendTo;
            document.getElementById("display-user-name").innerText = savedUserName;
            document.getElementById("display-user-email").innerText = savedUserEmail;
            memo.style.display = "none";
            mailForm.style.display = "none";
            sendButton.style.display = "block"; // ← 追加
            $("#saveBtn").html("編集");
            a = 0;
            console.log(a)
            console.log(savedUserName)
        }
    });
}

(function() {
    // 1. 公開鍵を設定（EmailJSのAccountページにあるPublic Key）
    emailjs.init("Kvg9gYTowlgUbDUEw");

    window.addEventListener('load', function() {
        const form = document.getElementById('contact-form');
        const btn = document.getElementById('help');

        if (btn&&form) {
              btn.addEventListener('click', function(event) {
                event.preventDefault(); // ページ更新を止める
                btn.innerText = '送信中...';
                btn.disabled = true;

                // 2. sendForm を使うと name="..." の値を自動で送信します
                emailjs.sendForm('service_pfah006', 'template_f3z6dhs', this)
                    .then(function() {
                        alert('送信に成功しました！');
                        btn.innerText = '送信完了';
                        // ★ 5秒後にボタンを元に戻す処理
                        setTimeout(function() {
                            btn.disabled = false;
                            btn.innerText = 'メールを送信';
                        }, 5000); // 5000ミリ秒 = 5秒
                    }, function(error) {
                        alert('失敗しました: ' + JSON.stringify(error));
                        btn.disabled = false;
                        btn.innerText = 'メールを送信';
                    });
            });
        }
    });
})();