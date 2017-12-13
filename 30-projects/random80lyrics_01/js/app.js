var lyric = [
  "Let\'s dance! Put on your red shoes and dance the blues - David Bowie",
  "We don\'t need no education. We don\'t need no thought control. No dark sarcasm in the classroom. Teacher, leave those kids alone - Pink Floyd",
  "It\'s a nice day for a white wedding - Billy Idol",
  "If my rhyme was a drug I\'d sell it by the gram - Vanilla Ice",
  "Love my way, it\'s a new road. I follow where my mind goes - Psychedelic Furs",
  "Won\'t you come see about me? I\'ll be alone, dancing you know it baby - Simple Minds",
  "Take on me, (take on me). Take me on, (take on me). I\'ll be gone. In a day or two - Aha",
  "In a West end town a dead end world. The East end boys and West end girls - Pet Shop Boys",
  "All I know is that to me. You look like you\'re having fun. Open up your lovin\' arms. Watch out here I come - Dead or Alive",
  "And I\'m not the kind that likes to tell you. Just what you want me to. You\'re not the kind that needs to tell me, About the birds and the bees - New Order",
  "Something happens and I\'m head over heels. I never find out till I\'m head over heels - Tears for Fears",
  "All I ever wanted, All I ever needed, Is here in my arms. Words are very unnecessary, They can only do harm - Depeche Mode",
  "I\'m all out of hope, One more bad dream could bring a fall, When I\'m far from home Don\'t call me on the phone, To tell me you\'re alone - Billy Idol",
  "We will wade in the tides of the summer, every summer! Every my Velouria, my Velouria! - The Pixies",
]

function newLyric() {
  var randomNumber = Math.floor(Math.random() * (lyric.length));
  document.getElementById('lyricDisplay').innerHTML = lyric[randomNumber];
}
