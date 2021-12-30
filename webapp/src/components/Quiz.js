import React from 'react';

export default function Quiz() {
    return(
        <div>
          <form>
            <p>What is your coding playlist like?</p>
            <input type="radio" id="music1" name="music" />
            <label for="music1">Rock/metal</label>
            <br />
            <input type="radio" id="music2" name="music" />
            <label for="music2">Ambient/acoustic</label>
            <br />
            <input type="radio" id="music3" name="music" />
            <label for="music3">Female solo artists</label>

            <br />

            <p>What is your drink of choice?</p>
            <input type="radio" id="drink1" name="drink" />
            <label for="drink1">Coffee, duh!</label>
            <br />
            <input type="radio" id="drink2" name="drink" />
            <label for="drink2">Green tea</label>
            <br />
            <input type="radio" id="drink3" name="drink" />
            <label for="drink3">Organic kombucha</label>
            <br />

            <p>What is your favorite snack?</p>
            <input type="radio" id="snack1" name="snack" />
            <label for="snack1">Something healthy</label>
            <br />
            <input type="radio" id="snack2" name="snack" />
            <label for="snack2">Something sweet</label>
            <br />
            <input type="radio" id="snack3" name="snack" />
            <label for="snack3">Something salty</label>
            <br />

            <p>How do you unwind and relax?</p>
            <input type="radio" id="chill1" name="chill" />
            <label for="chill1">Watch Netflix</label>
            <br />
            <input type="radio" id="chill2" name="chill" />
            <label for="chill2">Arts and crafts</label>
            <br />
            <input type="radio" id="chill3" name="chill" />
            <label for="chill3">Go for a run</label>
            <br />

            <p>What is humanity's biggest achievement?</p>
            <input type="radio" id="achiev1" name="achiev" />
            <label for="achiev1">Landing on the Moon</label>
            <br />
            <input type="radio" id="achiev2" name="achiev" />
            <label for="achiev2">Modern medicine</label>
            <br />
            <input type="radio" id="achiev3" name="achiev" />
            <label for="achiev3">Wi-Fi</label>
            <br />

            <p>Who is your modern-day feminist icon?</p>
            <input type="radio" id="fem1" name="fem" />
            <label for="fem1">Alexandria Ocasio-Cortez</label>
            <br />
            <input type="radio" id="fem2" name="fem" />
            <label for="fem2">Malala Yousafzai</label>
            <br />
            <input type="radio" id="fem3" name="fem" />
            <label for="fem3">Jameela Jamil</label>
            <br />

            <br />

            <input type="button" value="Submit" />
          </form>
        </div>
    )
}