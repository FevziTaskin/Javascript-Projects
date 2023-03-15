function generateRandomQuote() {
  const quotes = {
    "― Albert Einstein":
      '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
    "― Pierce Brown":
      '"Man cannot be freed by the same injustice that enslaved it."',
    "― Alysha Speer":
      '"You never really know what is coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."',
    "― C.S. Lewis":
      '"I was not born to be free---I was born to adore and obey."',
    "― Oscar Wilde": '"Be yourself; everyone else is already taken."',
    "― Marilyn Monroe":
      '"I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best."',
    "― Oscar Wilde":
      '"To live is the rarest thing in the world. Most people exist, that is all."',
    "― Mahatma Gandhi":
      '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    "― Fyodor Dostoevsky":
      '"Above all, do not lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love."',
    "― Stephen Hawking":
      '"One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and do not throw it away."',
  };

  const authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
