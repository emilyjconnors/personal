import React from "react"

export default class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        message: ""
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.name} @ ${this.state.email}!`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} action="mailto:contact@yourdomain.com" method="POST">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <textarea
                    name="message"
                    placeholder="Your message..."
                    rows="5"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        )
    }
}