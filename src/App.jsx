import React, { useState, useEffect } from 'react';
import './css/vars.css';
import './css/reset.css';
import './css/App.css';

function App() {
    const [payload, setPayload] = useState([]);
    const [mode] = useState('text');
    const [image, setImage] = useState();
    const [bot] = useState('Chatty McChatterton');
    const [formData, setFormData] = useState(
        { prompt: "" }
    )

    function handleChange(event) {
        //event.preventDefault();
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handlePayload(arr, type, next) {
        let _arr = arr;
        _arr.push({ type: type, line: next });
        setPayload(_arr);
        return _arr;
    }
    const getResponse = async (event) => {
        event.preventDefault();
        let _arr = handlePayload([...payload], 'user', formData['prompt']);
        document.querySelector("input[name='prompt']").value = '';
        console.log(JSON.stringify(formData));
        fetch('/api/response', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => handlePayload([..._arr], 'bot', data.choices[0].message.content))
            .catch(error => {
                console.log('Error!');
            });
    }

    return (
        <form class="App" autocomplete="off">
            <section>
                <div class="Payload">
                    {payload.map(item =>
                        <div class={`Entry ${item.type}`}>
                            <div data-label={bot}>{item.line}</div>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <input
                    defaultValue={''}
                    placeholder={`Type something...`}
                    onChange={handleChange}
                    name="prompt"
                />
                {formData.prompt.length > 0 && <button onClick={getResponse}>{`Send`}</button>}
            </section>
        </form>
    )
}

export default App;
