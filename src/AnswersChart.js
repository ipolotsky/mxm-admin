import React, {useState, useEffect, useCallback} from 'react'
import {ColumnChart} from "@opd/g2plot-react";

function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

const AnswersChart = (props) => {

    const [data, setData] = useState({});

    const handleChartMount = useCallback(chart => {
        console.log(chart)
    }, [])

    useEffect(() => {
        let _data = [].concat(props.choices).map(choice => {
            return {
                answer: choice,
                amount: 0
            }}
        );
        props.answers.forEach((answer) => {
            _data.find((choice, index) => {
                if (choice.answer === answer.answer) {
                    choice.amount++;
                    return true;
                }
            })
        })
        _data.find(element => {
            element.answer = truncate(element.answer, 15)
        })
        setData(_data);
    }, [])

    const config = {
        title: {
            visible: true,
            text: "",
        },
        forceFit: true,
        padding: 'auto',
        data: data,
        xField: 'answer',
        yField: 'amount',
        meta: {
            type: {
                alias: 'Answer',
            },
            sales: {
                alias: 'Count',
            },
        },
    };

    return <ColumnChart {...config} onMount={handleChartMount} />
}


export default AnswersChart