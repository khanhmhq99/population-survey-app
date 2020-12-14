import React, { Component } from 'react'
import callApi from '../../utils/apiCaller'
import axios from 'axios'

class Matdodanso extends Component {
    state = {
        locals: [],
        years: [],
        targets: []
    }
    componentDidMount() {
        // callApi('GET', null).then(res => {
        //     // console.log(res.data.variables[0].valueTexts)
        //     this.setState({
        //         locals: res.data.variables[0].valueTexts,
        //         years: res.data.variables[1].valueTexts,
        //         targets: res.data.variables[2].valueTexts
        //     })
        // })
        axios.get('/V02.01.px')
            .then(res => {
                this.setState({
                    locals: res.data.variables[0].valueTexts,
                    years: res.data.variables[1].valueTexts,
                    targets: res.data.variables[2].valueTexts
                })
                // console.log(res.data.variables)
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let body = {
            "query": [
                {
                    "code": "Địa phương",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "11"
                        ]
                    }
                },
                {
                    "code": "Năm",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "4"
                        ]
                    }
                },
                {
                    "code": "Chỉ tiêu",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "1"
                        ]
                    }
                }
            ],
            "response": {
                "format": "px"
            }
        }
        console.log(body)
        callApi('POST', body).then(res => {
            console.log(res)
        })
        // console.log(this.state)
    }
    render() {
        const { locals, years, targets } = this.state
        const localList = locals.length ? (
            locals.map(local => {
                let index = locals.indexOf(local)
                return (
                    <option value={index} key={index}>{local}</option>
                )
            })
        ) : (
                null
            )
        const yearList = years.length ? (
            years.map(year => {
                let index = years.indexOf(year)
                return (
                    <option value={index} key={index}>{year}</option>
                )
            })
        ) : (
                null
            )
        const targetList = targets.length ? (
            targets.map(target => {
                let index = targets.indexOf(target)
                return (
                    <option value={index} key={index}>{target}</option>
                )
            })
        ) : (
                null
            )
        return (
            <div className="container">
                <h5>Diện tích, dân số và mật độ dân số phân theo địa phương</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s4 m4 l4">
                            <label htmlFor="local">Địa phương</label>
                            <select name="local" id="local" onChange={this.handleChange}>
                                {localList}
                            </select>
                        </div>
                        <div className="col s4 m4 l4">
                            <label htmlFor="year">Năm</label>
                            <select name="year" id="year" onChange={this.handleChange}>
                                {yearList}
                            </select>
                        </div>
                        <div className="col s4 m4 l4">
                            <label htmlFor="target">Chỉ tiêu</label>
                            <select name="target" id="target" onChange={this.handleChange}>
                                {targetList}
                            </select>
                        </div>
                    </div>
                    <button className="btn black lighten-1 z-depth-0">Tra cứu</button>
                </form>
            </div>
        )
    }
}


export default Matdodanso