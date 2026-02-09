document.addEventListener("DOMContentLoaded", () => {

  const scene = document.getElementById("scene");
  const bg = document.getElementById("background");
  const welcome = document.getElementById("welcome");
  const dialogue = document.getElementById("dialogue");

  const amy = document.getElementById("amy");
  const jake = document.getElementById("jake");
  const holt = document.getElementById("holt");

  const folder = document.getElementById("folder");
  const paper = document.getElementById("paper");
  const paperText = document.getElementById("paperText");
  const music = document.getElementById("music");

  bg.style.backgroundImage = "url('assets/backgrounds/exterior.jpg')";
  scene.classList.remove("blur-bg");

  const pages = [
    "Hii baby! 😘",
    "These past three months have been absolutely incredible!",
    "I couldn’t be more glad that things worked out this way!",
    "You make me feel happy, special, safe, and at my very best!"
  ];
  let pageIndex = 0;

  const quiz = [
    {
      q: "The date I made the best decision of my life?",
      a: [
        ["October 23rd", "The day I texted you for the first time!"],
        ["November 1st", "The day I asked you out!"],
        ["November 3rd", "The day I said we should go out again!"]
      ]
    },
    {
      q: "What do I love the most about you?",
      a: [
        ["Your face", "The prettiest face ever!"],
        ["Your body", "Irresistibly attractive and constantly distracting!"],
        ["Your smile", "The smile that lights up my whole world!"],
        ["Your personality", "Smart, kind, and effortlessly amazing!"]
      ]
    },
    {
      q: "How have I felt since we started dating?",
      a: [
        ["Happiest", "I’ve genuinely never been happier!"],
        ["Safest", "You’re my safe space. Always!"],
        ["Irresistibly attracted", "Still not over you. Not even close!"],
        ["Cherished", "You make me feel so loved and adored every single day!"]
      ]
    }
  ];
  let quizIndex = 0;

  /* ENTER PRECINCT */
  document.getElementById("enterBtn").onclick = () => {
    welcome.classList.add("hidden");
    bg.style.backgroundImage = "url('assets/backgrounds/bullpen.jpg')";

    setTimeout(() => {
      amy.classList.remove("hidden");
      dialogue.className = "amy-box";
      dialogue.innerHTML = `
        <strong>Amy:</strong><br>
        Hi Janani! We’ve got a special case for you. Thought you’d be perfect for it.<br><br>
        <button id="amyContinue">Continue</button>
      `;

      document.getElementById("amyContinue").onclick = () => {
        dialogue.classList.add("hidden");
        amy.classList.add("hidden");
        folder.classList.remove("hidden");
      };
    }, 1200);
  };

  /* OPEN FILE */
  document.getElementById("openFile").onclick = () => {
  folder.classList.add("hidden");
  scene.classList.add("blur-bg");
  paper.classList.remove("hidden");
  paperText.textContent = pages[0];

  music.currentTime = 0;
  music.play();
};

  /* PAPER NEXT */
  document.getElementById("nextPage").onclick = () => {
    pageIndex++;
    if (pageIndex < pages.length) {
      paperText.textContent = pages[pageIndex];
    } else {
      paper.classList.add("hidden");
      startJake();
    }
  };

  /* JAKE INTRO */
  function startJake() {
    scene.classList.remove("blur-bg");
    jake.classList.remove("hidden");
    dialogue.className = "jake-box";
    dialogue.classList.remove("hidden");
    dialogue.innerHTML = `
      <strong>Jake:</strong><br>
      Cool cool cool… that’s enough emotions.<br><br>
      It’s time… for a… quick quiz.
    `;
    setTimeout(showQuestion, 3500);
  }

  /* SHOW QUESTION */
  function showQuestion() {
    jake.classList.add("hidden");
    scene.classList.add("blur-bg");
    dialogue.className = "quiz-box";
    dialogue.innerHTML = `<strong>${quiz[quizIndex].q}</strong>`;

    quiz[quizIndex].a.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt[0];
      btn.onclick = () => showBingpot(opt[1]);
      dialogue.appendChild(btn);
    });
  }

  /* BINGPOT RESPONSE */
  function showBingpot(text) {
    dialogue.innerHTML = `
      <div class="bingpot-text">BINGPOT!</div>
      <img src="assets/gifs/bingpot.gif" class="bingpot-gif">
      <div style="text-align:center; font-size:18px;">${text}</div>
      <button id="continueQuiz">Continue ❤️</button>
    `;

    document.getElementById("continueQuiz").onclick = () => {
      quizIndex++;
      if (quizIndex < quiz.length) showQuestion();
      else showScore();
    };
  }

  /* SCORE */
  function showScore() {
    scene.classList.add("blur-bg");
    dialogue.innerHTML = `
      <div style="text-align:center;">
        <div style="font-size:22px; font-weight:600; margin-bottom:10px;">
          You may have scored 3/3...
        </div>
        <div style="font-size:22px; font-weight:600;">
          But I scored a 10/10 girl 😘
        </div>
      </div>
    `;
    setTimeout(startHolt, 2000);
  }

  /* HOLT */
  function startHolt() {
  // Show Holt image
  holt.classList.remove("hidden");

  // Show Holt dialogue AT THE SAME TIME
  dialogue.className = "holt-box";
  dialogue.classList.remove("hidden");
  dialogue.innerHTML = `
    <strong>Holt:</strong><br>
    This case is closed.<br><br>
    One final question remains.<br><br>
    <button id="holtContinue">Continue</button>
  `;

  document.getElementById("holtContinue").onclick = showValentine;
}

  /* VALENTINE QUESTION */
  function showValentine() {
    holt.classList.add("hidden");
    dialogue.className = "valentine-box";
    dialogue.innerHTML = `
      <strong style="font-size:26px;">
        Janani, will you be my Valentine? ❤️
      </strong>

      <div class="valentine-buttons">
        <button id="yesBtn">Yes 💕</button>
        <button id="noBtn">No 🥺</button>
      </div>
    `;

    document.getElementById("yesBtn").onclick = finalYes;

    const noBtn = document.getElementById("noBtn");
    noBtn.addEventListener("mouseenter", () => {
      const x = (Math.random() * 260) - 130;
      const y = (Math.random() * 180) - 90;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  /* FINAL YES */
  function finalYes() {
    dialogue.className = "final-fullscreen";
    dialogue.innerHTML = `
  <div style="font-size:42px; font-weight:800; margin-bottom:24px;">
    HOT DAMN 🔥
  </div>

  <img src="assets/gifs/hotdamn.gif" style="width:420px; max-width:90%; margin-bottom:24px;">

  <div style="font-size:24px; max-width:620px; margin-bottom:30px;">
    I can’t wait to spend the Valentine’s Day and the rest of my life with you,
    my kannamma ❤️
  </div>

  <button id="restartBtn" style="
    padding: 14px 28px;
    font-size: 18px;
    border-radius: 999px;
    border: none;
    background: #111;
    color: #fff;
    cursor: pointer;
  ">
    Restart 💕
  </button>
`;

document.getElementById("restartBtn").onclick = () => {
  window.location.reload();
};

    /* HEART CONFETTI */
    for (let i = 0; i < 160; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      h.textContent = "❤️";
      h.style.left = Math.random() * 100 + "vw";
      h.style.animationDuration = (2.5 + Math.random() * 2) + "s";
      scene.appendChild(h);
      setTimeout(() => h.remove(), 5000);
    }
  }

});