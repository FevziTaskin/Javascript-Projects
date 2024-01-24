const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = "en-US";
rec.continuous = true;

rec.onresult = function (e) {
  // console.log(e.results[0][0].transcript);

  const acceptedColor = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "brown",
    "purple",
    "orange",
    "black",
    "white",
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    console.log(script);

    if (acceptedColor.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert("Please say a color");
    }
  }
};

rec.start();
