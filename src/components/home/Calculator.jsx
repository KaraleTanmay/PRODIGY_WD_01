import React, { useRef, useState } from 'react'
import Inputs from '../factory components/Inputs'
import axios from "axios";

const topics = ["Topic Selection", "Introduction Writing", "Literature", "Grammer Check", "Case Study"]

export default function Calculator() {

    const [selected, setSelected] = useState(1)
    const [loading, setLoading] = useState(1)
    const [resDiv, setResDiv] = useState(false)
    const [error, setError] = useState(false)
    const [topic, setTopic] = useState(false)
    const [words, setWords] = useState(false)
    const [abstract, setAbstract] = useState(false)
    const [conclusion, setConclusion] = useState(false)
    const [doi, setDoi] = useState(false)
    const [res, setRes] = useState("your response is being generated...please wait !")

    const makeApiCall = async (reqData) => {
        try {
            setLoading(true)
            const res = await axios({
                method: "POST",
                url: reqData.url,
                data: reqData.data
            })
            console.log(res)

        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmit = () => {
        if (selected === 1) {
            if (!topic) {
                setError(true)
            }
            else {
                setError(false)
                console.log({ topic })
                const data = {
                    url: "https://writer-api.eastus.cloudapp.azure.com/topicSelector",
                    data: { topic }
                }
                makeApiCall(data)
            }
        }
        if (selected === 2) {
            if (!(topic && words)) {
                setError(true)
            }
            else {
                setError(false)
                console.log({ topic, words })
                const data = {
                    url: "https://writer-api.eastus.cloudapp.azure.com/intro",
                    data: { topic, words }
                }
                makeApiCall(data)
            }
        }
        if (selected === 3) {
            if (!(abstract && doi && conclusion)) {
                setError(true)
            }
            else {
                setError(false)
                console.log({ abstract, conclusion, doi })
                const data = {
                    url: "https://writer-api.eastus.cloudapp.azure.com/literatureReview",
                    data: { abstract, conclusion, doi }
                }
                makeApiCall(data)
            }
        }
        if (selected === 4) {
            if (!abstract) {
                setError(true)
            }
            else {
                setError(false)
                console.log({ abstract })
                const data = {
                    url: "https://writer-api.eastus.cloudapp.azure.com/grammarChecker",
                    data: { abstract }
                }
                makeApiCall(data)
            }
        }
        if (selected === 5) {
            if (!(topic && words)) {
                setError(true)
            }
            else {
                setError(false)
                console.log({ topic, words })
                const data = {
                    url: "https://writer-api.eastus.cloudapp.azure.com/caseStudy",
                    data: { topic, words }
                }
                makeApiCall(data)
            }
        }

    }



    return (
        <div className='flex flex-col justify-center items-center w-[90%] mx-auto my-10'>
            <div className='w-full text-center text-[40px] text-sec my-5 font-[600]'>
                Calculate Your Expenses
            </div>

            <div className='w-full md:w-[80%] lg:w-[50%] md:h-[350px] h-[450px] flex flex-col md:flex-row justify-center items-center m-auto py-4 bg-slate-300 border-[2px] border-sec rounded-lg'>
                <div className='w-full md:h-full h-[43%] flex flex-wrap md:flex-col md:justify-between justify-evenly  items-center gap-y-4 text-[14px] md:text-[16px] md:gap-x-0 md:gap-y-0'>
                    {
                        topics.map((ele, i) => {
                            return (
                                <div key={i} className={`p-2 ${selected === i + 1 ? "bg-sec text-pri" : "text-sec bg-pri"}  text-center rounded-lg md:min-w-[200px] cursor-pointer md:text-lg`} onClick={() => { setSelected(i + 1) }}>
                                    {ele}
                                </div>
                            )
                        })
                    }

                </div>
                <div className='md:hidden w-[90%] my-5 h-[4px] bg-sec'></div>
                <div className='w-full h-full flex flex-col justify-between items-center'>
                    <div className='h-[70%] w-full flex justify-center items-start'>
                        {
                            selected === 1 ? <div className='w-[80%] flex justify-center items-start'>
                                <Inputs set={setTopic} />
                            </div> : ""
                        }
                        {
                            selected === 2 ? <div className='w-[80%]  flex flex-col justify-center items-start gap-y-3'>
                                <Inputs set={setTopic} />
                                <Inputs set={setWords} type="number" placeholder="enter number of words" />
                            </div> : ""
                        }
                        {
                            selected === 3 ? <div className='w-[80%]  flex flex-col justify-center items-start gap-y-3'>
                                <Inputs set={setAbstract} placeholder="enter abstract" />
                                <Inputs set={setConclusion} placeholder="enter conclusion" />
                                <Inputs set={setDoi} placeholder="enter DOI" />

                            </div> : ""
                        }
                        {
                            selected === 4 ? <div className='w-[80%]  flex flex-col justify-center items-start gap-y-3'>
                                <Inputs set={setAbstract} placeholder="enter abstract" />


                            </div> : ""
                        }
                        {
                            selected === 5 ? <div className='w-[80%]  flex flex-col justify-center items-start gap-y-3'>
                                <Inputs set={setTopic} />
                                <Inputs set={setWords} type="number" placeholder="enter number of words" />
                            </div> : ""
                        }

                    </div>
                    <div className='h-[30%] w-full flex justify-center items-end gap-x-4'>
                        <div className='text-center h-[30px] text-sec font-[600]'>0$</div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='p-2 bg-sec text-pri rounded-lg cursor-pointer' onClick={handleSubmit}>
                                Proceed to Order
                            </div>
                            {
                                error ? <div className='text-red-400 text-[12px]'>
                                    please fill all details
                                </div> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                resDiv ? <div className='my-10 md:w-[90%] flex flex-col justify-center items-center gap-y-10'>
                    <div className='text-secbl text-[40px] font-[500]'>
                        results
                    </div>
                    <div className='border-[2px] border-sec rounded-md p-8 w-full'>
                        {res}
                    </div>
                </div> : ""
            }

        </div>
    )
}
