import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Survey() {
    const [answers, setAnswers] = useState({
        inside_outside: '',
        mountain_ocean: '',
        properties: []
    });

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'properties') {
            let newProperties = answers.properties.slice();
            if (checked) {
                newProperties.push(value);
            } else {
                newProperties = newProperties.filter(prop => prop !== value);
            }
            setAnswers(prev => ({ ...prev, properties: newProperties }));
        } else {
            setAnswers(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Answers:', answers);

        fetch('http://127.0.0.1:5000/togo', {  // <-- Change the URL here
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(answers)
        })
            .then(response => response.json())
            .then(data => console.log('Server response:', data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container">
            <h1>Travel Survey</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="inside_outside">
                    <Form.Label>Inside vs Outside</Form.Label>
                    <Form.Control as="select" name="inside_outside" onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="mountain_ocean">
                    <Form.Label>Mountain vs Ocean</Form.Label>
                    <Form.Control as="select" name="mountain_ocean" onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="mountain">Mountain</option>
                        <option value="ocean">Ocean</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="properties">
                    <Form.Label>Properties</Form.Label>
                    <div>
                        <Form.Check type="checkbox" name="properties" value="temple" label="Temple" onChange={handleChange} />
                        <Form.Check type="checkbox" name="properties" value="walking" label="Walking" onChange={handleChange} />
                        <Form.Check type="checkbox" name="properties" value="drugstore" label="Drugstore" onChange={handleChange} />
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Survey;