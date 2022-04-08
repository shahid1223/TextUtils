import React, { useState } from 'react'


export default function TextForm(props) {
    // const wordcount = text.split(" ").length()
    const handleOnChange = (event) => {
        console.log("On Chnage")
        setText(event.target.value)
    }
    const Touppercase = () => {
        console.log("To Uppercase clicked " + text)
        let neWText = text.toUpperCase()
        setText(neWText)
    }
    const Tolowercase = () => {
        console.log("To  LOw")
        let lowertext = text.toLowerCase()
        setText(lowertext)
    }
    const Trim = () => {
        console.log("Trim is clicked")
        let texttrim = text.trim()
        setText(texttrim)
    }
    const clear = () => {
        console.log("Clear")
        setText('')
        setReptext('')
        setRepfrom('')
        setTextchar('')
        setSrch('')
        setUnicode('')

    }
    const [text, setText] = useState('');
    const [reptext, setReptext] = useState('')
    const handlerep = (event) => {
        setReptext(event.target.value)
    }
    const Replace = () => {
        console.log("Replace Clicked")
        let newtext = text.replace(reptext, repfrom)
        setText(newtext + " ")
    }

    const [repfrom, setRepfrom] = useState('')
    const handlefrom = (event) => {
        setRepfrom(event.target.value)
    }

    const [textchar, setTextchar] = useState('')
    const charhandle = (event) => {
        // console.log("Char Clicked")
        setTextchar(event.target.value)
    }

    const charat = () => {
        console.log("Char At Clicked")
        let index = text.charAt(textchar)
        setTextchar(index)
    }
    const [srch, setSrch] = useState('')
    const srchtext = (event) => {
        // console.log("Search clicked")
        setSrch(event.target.value)
    }
    const search = () => {
        console.log("seach clicked")
        let searchedtxt = text.search(srch)
        setSrch(searchedtxt)
    }

    const [unicode, setUnicode] = useState('')
    const unicodetext = (event) => {
        setUnicode(event.target.value)
    }
    const ganrateUnicode = () => {
        console.log("Unicode clicked")
        let newUnicode = unicode.charCodeAt()
        setUnicode(newUnicode)
    }

    const hnadlecopy = () => {
        console.log("I am Copy")
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraspace = () => {
        let extraspace = text.split(/[ ]+/)
        setText(extraspace.join(" "))
    }



    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" placeholder='Enter Text Here' value={text} onChange={handleOnChange} ></textarea>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={Touppercase}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={Tolowercase}>Convert to lowercase</button>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={Trim}>Trim</button>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleExtraspace}>Remove Extra Space</button>
                    <button type="button" className="btn btn-success my-3 mx-2" onClick={hnadlecopy}>Copy Text</button>
                    <button type="button" className="btn btn-danger my-3 mx-2" onClick={clear}>Clear</button>
                    <div className="input-group">
                        <span className="input-group-text" onClick={Replace}>REPLACE</span>
                        <input placeholder="Enter the word you want to repalce" value={reptext} onChange={handlerep} type="text" aria-label="First name" className="form-control" />
                        <input placeholder="Enter the Word you want to replace from" value={repfrom} onChange={handlefrom} type="text" aria-label="Last name" className="form-control" />
                    </div>
                    <div className="input-group my-3">
                        <span className="input-group-text" onClick={charat}>Charecter At</span>
                        <input placeholder="Enter the word you want to repalce" value={textchar} onChange={charhandle} type="text" aria-label="First name" className="form-control" />
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-outline-success " onClick={search} >Search</button>
                        <input className="form-control me-2 mx-3" type="search" placeholder="Search" aria-label="Search" value={srch} onChange={srchtext} />
                    </div>
                    <div className="d-flex my-3">
                        <button className="btn btn-outline-success " onClick={ganrateUnicode} >Unicode</button>
                        <input className="form-control me-2 mx-3" type="search" placeholder="Search" aria-label="Search" value={unicode} onChange={unicodetext} />
                    </div>
                </div>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your text summary </h1>
                <p>{text.split(" ").length} words and {text.length}</p>
                {/* <p>{lengthtxt} words and {text.length}</p> */}
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
            </div>
        </>
    )
}
