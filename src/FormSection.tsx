import { useState } from "react";

const FormSection = ( {submitQuestion}) => {

    const [newQuestion, setNewQuestion] = useState("")

//generate a function to add two numbers

const onClickSubmit = () => {
    submitQuestion(newQuestion)
    setNewQuestion("")
}


    return (
        <div className="form-section flex-center">
            <textarea
            className="chat-input"
            cols={40}
            rows={3}
                className="form-control"
                placeholder="Ask me anything..."
                onChange={(e) => {
                    setNewQuestion(e.target.value)
                }}
                value={newQuestion}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        onClickSubmit();
                    }
            }}
            ></textarea>
            <button className="btn width125" onClick={onClickSubmit} >
                <b>Coach Me</b>
            </button>
        </div>
    )
}

export default FormSection;