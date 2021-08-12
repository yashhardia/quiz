import React, { Component } from 'react'

export default class Result extends Component {
    constructor({quizList}) {
        super()
        this.state = {
            totalQues : 0,
            correctQues : 0,
            wrongQues : 0,
            notAnswered : 0,
            attempted : 0
        }
        quizList.forEach(element => {
           if(element.userAns != ""){
            (element.isWrong == true)?this.state.wrongQues++:this.state.correctQues++;
            this.state.attempted++
           }else{
            this.state.notAnswered++;
           }
           this.state.totalQues++;
        });
    }
    
    render() {
        return (
            <div className="col-md-4">
                <table className="table table-bordered">
                    <thead><tr><th>Scrore Card</th><th>Score</th></tr></thead>
                    <tbody>
                        <tr><th scope="row">Total Questions </th><td>{this.state.totalQues}</td></tr>
                        <tr><th scope="row">Total Attempted </th><td>{this.state.attempted}</td></tr>
                        <tr><th scope="row">Total Not Answered </th><td>{this.state.notAnswered}</td></tr>
                        <tr><th scope="row">Total Correct Answers </th><td>{this.state.correctQues}</td></tr>
                        <tr><th scope="row">Total Wrong Answers </th><td>{this.state.wrongQues}</td></tr>
                        <tr><th scope="row">Score </th><td>{this.state.correctQues}</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
