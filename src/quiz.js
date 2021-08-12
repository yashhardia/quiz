import React, {useState} from 'react';
import {
    BrowserRouter as Router,    
    Route, 
    Switch    
  } from "react-router-dom";
import Result from './result';
const quizData =[
        {quid:"1At2a",quetext:"In 1768, Captain James Cook set out to explore which ocean?",options:{
            "A":"Pacific Ocean",
            "B":"Atlantic Ocean",
            "C":"Indian Ocean",
            "D":"Arctic Ocean",
           },ans:"A",userAns:"",isWrong:"",notAnswered:"",marked:""},
        {quid:"1Bt2b",quetext:"What is actually electricity",options:{
            "A":"A flow of water",
            "B":"A flow of air",
            "C":"A flow of electrons",
            "D":"A flow of atoms",
           },ans:"C",userAns:"",isWrong:"",notAnswered:"",marked:""},
       {quid:"1Ct2c",quetext:"Which of the following is not an international organisation?",options:{
            "A":"FIFA",
            "B":"NATO",
            "C":"ASEAN",
            "D":"FBI",
           },ans:"D",userAns:"",isWrong:"",notAnswered:"",marked:""},
        {quid:"1Dt2d",quetext:"Which of the following is Cleanet city in India?",options:{
            "A":"Bhopal",
            "B":"Indore",
            "C":"Mumbai",
            "D":"Guwhati",
           },ans:"B",userAns:"",isWrong:"",notAnswered:"",marked:""},
    ];
export default function Quiz() {
    const [currentQuest,setCurrentQuest] = useState(quizData[0])
    const [quizList,setQuizList] = useState(quizData)
    const [changedQuestion,setChangedQuestion] = useState([])
    const [currentOption,setCurrentOption] = useState(null)
    const [answerList,setAnswerList] = useState([])
    const [isNext,setIsNext] = useState(false)
    const [isPrevious,setPrevious] = useState("disabled")
    const [result,setResult] = useState([])
    const [is_submit,setIsSubmit] = useState(false);
    let saveAnswer = ()=>{
        if(currentOption == null && currentQuest.userAns == ""){
            alert("Please Select Option");return false;
        }
        if(currentQuest.ans == currentOption){
            currentQuest.userAns = currentOption;
            currentQuest.isWrong = false;
            currentQuest.marked = "";
        }else{
            currentQuest.marked = "";
            currentQuest.isWrong = true;
            currentQuest.userAns = currentOption;
        }
        let indx = quizList.findIndex(e=> e.quid == currentQuest.quid);
        quizList[indx] = currentQuest;
        
        if(quizList[indx+1] != undefined){
            setCurrentQuest(quizList[indx+1]);
            prevNext(quizList[indx+1])
        }else{
            setCurrentQuest(quizList[indx])
            prevNext(quizList[indx])
        }setQuizList(quizList)
        setCurrentOption(null)
    }
    let clearAnswer = ()=>{
        currentQuest.userAns = "";
        currentQuest.isWrong = "";
        setCurrentOption(null);
        let indx = quizList.findIndex(e=> e.quid == currentQuest.quid);
        quizList[indx] = currentQuest;
        setCurrentQuest(quizList[indx]);
    }
    let markOption = ()=>{
        if(currentOption){
            if(currentQuest.ans == currentOption){
                currentQuest.userAns = currentOption;
                currentQuest.isWrong = false;
            }else{
                currentQuest.isWrong = true;
                currentQuest.userAns = currentOption;
            }
        }
        currentQuest.marked = true;
        let indx = quizList.findIndex(e=> e.quid == currentQuest.quid);
        quizList[indx] = currentQuest;
        
        if(quizList[indx+1] != undefined){
            setCurrentQuest(quizList[indx+1]);
            prevNext(quizList[indx+1])
        }else{
            setCurrentQuest(quizList[indx])
            prevNext(quizList[indx])
        }setQuizList(quizList)
        setCurrentOption(null)
    }
    let submit = () => {
       if(window.confirm("Are you sure?")){
           setIsSubmit(true)
       }
    }
    let prevNext = (Quest)=>{
        let indx = quizList.findIndex(e=> e.quid == Quest.quid);
        let prevQuote = quizList[indx-1]
        if(prevQuote != undefined){
            setPrevious('');
        }else{
            setPrevious('disabled');
        }

        let nextQuote = quizList[indx+1]
        if(nextQuote != undefined){
            setIsNext("")
        }else{
            setIsNext("disabled");
        }
        setCurrentOption(null)
    }
    let previous = () => {
        if(currentOption){
            currentQuest.notAnswered = false;
            if(currentQuest.ans == currentOption){
                currentQuest.userAns = currentOption;
                currentQuest.isWrong = false;
            }else{
                currentQuest.isWrong = true;
                currentQuest.userAns = currentOption;
            }
        }else{
            currentQuest.notAnswered = true;
        }
        let indx = quizList.findIndex(e=> e.quid == currentQuest.quid);
        quizList[indx] = currentQuest;
        let prevQuote = quizList[indx-1]
        setCurrentQuest(prevQuote);
        prevNext(prevQuote);
    }
    let openQuestion = (quid)=>{
        let indx = quizList.findIndex(e=> e.quid == quid);
        setCurrentQuest(quizList[indx])
        prevNext(quizList[indx])
    }
    let next = () => {
        if(currentOption){
            currentQuest.notAnswered = false;
            if(currentQuest.ans == currentOption){
                currentQuest.userAns = currentOption;
                currentQuest.isWrong = false;
            }else{
                currentQuest.isWrong = true;
                currentQuest.userAns = currentOption;
            }
        }else{
            currentQuest.notAnswered = true;
        }
        let indx = quizList.findIndex(e=> e.quid == currentQuest.quid);
        quizList[indx] = currentQuest;
        let nextQuote = quizList[indx+1]
        setCurrentQuest(nextQuote);
        prevNext(nextQuote);
    }
    return (
        <div className="container-fluid">
            {!is_submit && <div className="row">
                <div className="col-md-8 border-right">
                    <h4><strong>Question : </strong></h4>
                    <h5>Current Selected Option : {currentOption || currentQuest.userAns}</h5>
                    {
                        <div>
                            <p>{currentQuest.quetext}</p>
                            <div className="table-custom">
                                    <ul>
                                        <li> <input type="radio" onChange={()=>setCurrentOption("A")} checked={(currentQuest.userAns == "A" || currentOption == "A")?true:false} name="radiospage08" value="A"/> A) {currentQuest.options["A"]}</li>
                                        <li> <input type="radio" onChange={()=>setCurrentOption("B")} checked={(currentQuest.userAns == "B" || currentOption == "B")?true:false} name="radiospage08" value="B"/> B) {currentQuest.options["B"]}</li>
                                        <li> <input type="radio" onChange={()=>setCurrentOption("C")} checked={(currentQuest.userAns == "C" || currentOption == "C")?true:false} name="radiospage08" value="C"/> C) {currentQuest.options["C"]}</li>
                                        <li> <input type="radio" onChange={()=>setCurrentOption("D")} checked={(currentQuest.userAns == "D" || currentOption == "D")?true:false} name="radiospage08" value="D"/> D) {currentQuest.options["D"]}</li>
                                    </ul>
                            </div>
                            <button className="btn btn-primary" onClick={()=>saveAnswer()}>Save & Next</button>
                            <button className="btn btn-light" onClick={()=>clearAnswer()}>Clear</button>
                            <button className="btn btn-warning" onClick={()=>markOption()}>Mark and next</button>
                            <br/>
                            <div className="row">
                                <div className="col-md-8">
                                    <button className="btn btn-light" disabled={isPrevious} onClick={()=>previous()}>Previous</button>
                                    <button className="btn btn-light" disabled={isNext} onClick={()=>next()}>Next</button>                                    
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-success" onClick={()=>submit()}>Submit</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="col-md-3" >
                    <h4>Lists</h4>
                    <div className="row">
                            {quizList.map((elem,key) => {                  
                               return <div onClick={()=>openQuestion(elem.quid)} class={`question-box ${(elem.userAns != "" && elem.marked == "")?"answered":''} ${(elem.notAnswered && elem.marked == "")?'noanswer':''} ${(elem.marked)?'marked':''}`}>{key+1}</div>
                            })}
                    </div>
                </div>
            </div>}
            {is_submit && <div className="row">
                <Result quizList={quizList} />
            </div>}
        </div>
    )
}
