import { useState } from "react";
import "./login.css"

const user = {
  id: '123',
  email: 'test@mail.com',
  password: '123456'
}

function Login({ setUser }) {
  const IconoOscuro=require("../logos/iconoOscuro.PNG")
  const [email, setEmail] = useState()
  const [password, setPasword] = useState()

  


  function login() {
    if (email === user.email && password === user.password) {

      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  return (
    <div className="login-form form">
        <img src={IconoOscuro} alt="LdeSA"></img>
      <div className="login-form box">
      <h1 >Qué es LdeSA?</h1> 
      <p>Once upon a midnight dreary, while I pondered, weak and weary,
    Over many a quaint and curious volume of forgotten lore—
    While I nodded, nearly napping, suddenly there came a tapping,
    As of some one gently rapping, rapping at my chamber door.
“’Tis some visitor,” I muttered, “tapping at my chamber door—
            Only this and nothing more.”

Ah, distinctly I remember it was in the bleak December;
And each separate dying ember wrought its ghost upon the floor.
    Eagerly I wished the morrow;—vainly I had sought to borrow
    From my books surcease of sorrow—sorrow for the lost Lenore—
For the rare and radiant maiden whom the angels name Lenore—
            Nameless here for evermore.

    And the silken, sad, uncertain rustling of each purple curtain
Thrilled me—filled me with fantastic terrors never felt before;
    So that now, to still the beating of my heart, I stood repeating
    “’Tis some visitor entreating entrance at my chamber door—
Some late visitor entreating entrance at my chamber door;—
            This it is and nothing more.”

    Presently my soul grew stronger; hesitating then no longer,
“Sir,” said I, “or Madam, truly your forgiveness I implore;
    But the fact is I was napping, and so gently you came rapping,
    And so faintly you came tapping, tapping at my chamber door,
        That I scarce was sure I heard you”—here I opened wide the door;—
            Darkness there and nothing more.

    Deep into that darkness peering, long I stood there wondering, fearing,
    Doubting, dreaming dreams no mortal ever dared to dream before;
    But the silence was unbroken, and the stillness gave no token,
    And the only word there spoken was the whispered word, “Lenore ?”
This I whispered, and an echo murmured back the word, “Lenore!”—
            Merely this and nothing more.

    Back into the chamber turning, all my soul within me burning,
    Soon again I heard a tapping somewhat louder than before.
    “Surely,” said I, “surely that is something at my window lattice;
      Let me see, then, what thereat is, and this mystery explore—
Let my heart be still a moment and this mystery explore;—
            ’Tis the wind and nothing more!”

    Open here I flung the shutter, when, with many a flirt and flutter,
    In there stepped a stately Raven of the saintly days of yore;
    Not the least obeisance made he; not a minute stopped or stayed he;
But, with mien of lord or lady, perched above my chamber door—
Perched upon a bust of Pallas just above my chamber door—
Perched, and sat, and nothing more.</p>
      </div>
      <label  >Email</label>
      <input  className=" login-form input" type="email" onChange={(e) => setEmail(e.target.value)} />
      <label  >Password</label>
      <input  className=" login-form input" type="password" onChange={(e) => setPasword(e.target.value)} />
      <button className="login-form button" type="button" onClick={login}>Login</button>
    </div>
  )
}

export default Login;
