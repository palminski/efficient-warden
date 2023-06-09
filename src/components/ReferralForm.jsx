import { useState } from "react"

const ReferralForm = () => {

    const [formState, setFormState] = useState(
        {
            date: "",
            time: "",
            studentName: "",
            grade: "",
            staffName:"",
            majorMinor: "",
            offense: "",
            consequence1: "",
            consequence2: "",
            consequence3: "",
            consequence4: "",
            consequence5: "",
            location: "",
            motivation: "",
            others: "",
            notes: "",
            hateSymbol: "",
        }
    )
    const handleFormChange = (event) => {
        const {name,value} = event.target;
        setFormState({
            ...formState,
            [name]:value
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <form>
            <h2>Referral Form</h2>
            {/* Details of People Involved */}
            <input type="text" id="date" placeholder="date" />
            <br />

            <input type="text" id="time" placeholder="time" />
            <br />

            <input type="text" id="studentName" placeholder="studentName" />
            <br />

            <select type="text" id="grade" placeholder="grade">
                <option value="" disabled selected>Select Grade</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
            <br />

            <input type="text" id="staffName" placeholder="staffName" />
            <hr />

            {/* Details of Offense and Consequences */}
            <select type="text" id="majorMinor" >
                <option value="Administrator-managed (Major)">Major</option>
                <option value="Staff-managed (minor)">Minor</option>
            </select>
            <br />

            <input type="text" id="offence" placeholder="offence" />
            <br />

            <input type="text" class="consequence-list" id="consequence1" placeholder="consequence1" />
            <br />
            <input type="text" class="consequence-list" id="consequence2" placeholder="consequence2" />
            <br />
            <input type="text" class="consequence-list" id="consequence3" placeholder="consequence3" />
            <br />
            <input type="text" class="consequence-list" id="consequence4" placeholder="consequence4" />
            <br />
            <input type="text" class="consequence-list" id="consequence5" placeholder="consequence5" />
            <hr />

            {/* Notes section */}
            <input type="text" id="locationOfI" placeholder="location" />
            <br />
            <select type="text" id="motivation" >
                <option value="Unknown Motivation">Unknown Motivation</option>
                <option value="Obtain Peer Attention">Obtain Peer Attention</option>
                <option value="Escape/Avoid Tasks/Activities/Sensory">Escape/Avoid Tasks/Activities/Sensory</option>
                <option value="Obtain Items/Activities/Sensory">Obtain Items/Activities/Sensory</option>
                <option value="Obtain Adult Attention">Obtain Adult Attention</option>
                <option value="Escape/Avoid Adult(s)">Escape/Avoid Adult(s)</option>
                <option value="Escape/Avoid Peer(s)">Escape/Avoid Peer(s)</option>
                <option value="Other">Other</option>

            </select>
            <br />

            <select type="text" id="others" >
                <option value="Unknown">Unknown</option>
                <option value="None">None</option>
                <option value="Peers">Peers</option>
                <option value="Teacher">Teacher</option>
                <option value="Substitute">Substitute</option>
                <option value="Other">Other</option>
            </select>
            <br />

            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Notes" ></textarea>
            <br />

            <select type="text" id="hateSymbol" >
                <option value="No">No Hate Symbol</option>
                <option value="Yes">Yes</option>
            </select>
            <br/>

            <label for="copy">Copy over info?</label>
            <input id="copy" type="checkbox" />
            <br />
            <br />

            <button>Submit</button>
        </form>
    )

}
export default ReferralForm