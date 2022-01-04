import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, 
        Radio, 
        RadioGroup, 
        FormControlLabel, 
        FormControl, 
        FormLabel 
    } from '@mui/material';


export default function Quiz() {
    
    let navigate = useNavigate();

    function pushButtonHandler() {
    navigate('/answer');
    }

    return (
      <div>
        <div>
          <h3>Find out which STEMinist hero matches you!</h3>
        </div>
        <form>
          <p>What is your coding playlist like?</p>
          <input type="radio" id="music1" name="music" required />
          <label htmlFor="music1">Rock/metal</label>
          <br />
          <input type="radio" id="music2" name="music" />
          <label htmlFor="music2">Ambient/acoustic</label>
          <br />
          <input type="radio" id="music3" name="music" />
          <label htmlFor="music3">Female solo artists</label>
          <br />

          <p>What is your drink of choice?</p>
          <input type="radio" id="drink1" name="drink" required />
          <label htmlFor="drink1">Coffee, duh!</label>
          <br />
          <input type="radio" id="drink2" name="drink" required />
          <label htmlFor="drink2">Green tea</label>
          <br />
          <input type="radio" id="drink3" name="drink" required />
          <label htmlFor="drink3">Organic kombucha</label>
          <br />

          <p>What is your favorite snack?</p>
          <input type="radio" id="snack1" name="snack" required />
          <label htmlFor="snack1">Something healthy</label>
          <br />
          <input type="radio" id="snack2" name="snack" required />
          <label htmlFor="snack2">Something sweet</label>
          <br />
          <input type="radio" id="snack3" name="snack" required />
          <label htmlFor="snack3">Something salty</label>
          <br />

          <p>How do you unwind and relax?</p>
          <input type="radio" id="chill1" name="chill" required />
          <label htmlFor="chill1">Watch Netflix</label>
          <br />
          <input type="radio" id="chill2" name="chill" />
          <label htmlFor="chill2">Arts and crafts</label>
          <br />
          <input type="radio" id="chill3" name="chill" />
          <label htmlFor="chill3">Go htmlFor a run</label>
          <br />

          <p>In your opinion, what is humanity's biggest achievement?</p>
          <input type="radio" id="achiev1" name="achiev" required />
          <label htmlFor="achiev1">Landing on the Moon</label>
          <br />
          <input type="radio" id="achiev2" name="achiev" />
          <label htmlFor="achiev2">Modern medicine</label>
          <br />
          <input type="radio" id="achiev3" name="achiev" />
          <label htmlFor="achiev3">Wi-Fi</label>
          <br />

          <p>Who is your modern-day feminist icon?</p>
          <input type="radio" id="fem1" name="fem" required />
          <label htmlFor="fem1">Alexandria Ocasio-Cortez</label>
          <br />
          <input type="radio" id="fem2" name="fem" />
          <label htmlFor="fem2">Malala Yousafzai</label>
          <br />
          <input type="radio" id="fem3" name="fem" />
          <label htmlFor="fem3">Jameela Jamil</label>
          <br />
          <br />

          <p></p>
          <input type="radio" id="fem1" name="fem" required />
          <label htmlFor="fem1">yes</label>
          <br />
          <input type="radio" id="fem2" name="fem" />
          <label htmlFor="fem2">no</label>
          <br />
          <input type="radio" id="fem3" name="fem" />
          <label htmlFor="fem3">maybe</label>
          <br />

          <FormControl component="fieldset">
            <FormLabel component="legend">
              Question to test out the material ui
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="no" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="maybe"
              />
            </RadioGroup>

            <FormLabel component="legend">
              something else
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="llama"
              />
              <FormControlLabel value="male" control={<Radio />} label="shark" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                size="small"
                label="bunnybee"
              />
            </RadioGroup>
          </FormControl>

          <br />

          <Button onClick={pushButtonHandler} value="Submit" variant="outlined">
            Submit
          </Button>
        </form>
      </div>
    );
}