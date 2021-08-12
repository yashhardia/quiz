import React from 'react'

export default function Question({}) {
    
    return (
        <div className="col-md-8">
            <h4><strong>Question : </strong></h4>
            <h5>Current Selected Option : {currentOption}</h5>
            {
                <div>
                    <p>{currentQuest.quetext}</p>
                    <table className="table table-borderless mb0">
                        <tbody>
                            <tr>
                                <td> <input type="radio" onChange={()=>setCurrentOption("A")} name="radiospage08" value="A"/> 1) {currentQuest.options["A"]}</td>
                                <td> <input type="radio" onChange={()=>setCurrentOption("B")} name="radiospage08" value="B"/> 2) {currentQuest.options["B"]}</td>
                                <td> <input type="radio" onChange={()=>setCurrentOption("C")} name="radiospage08" value="C"/> 3) {currentQuest.options["C"]}</td>
                                <td> <input type="radio" onChange={()=>setCurrentOption("D")} name="radiospage08" value="D"/> 4) {currentQuest.options["D"]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={()=>saveAnswer()}>Save & Next</button>
                    <button className="btn btn-info" onClick={()=>clearAnswer()}>Clear</button>
                    <button className="btn btn-warning" onClick={()=>markOption()}>Mark and next</button>
                </div>
            }
        </div>
    )
}
