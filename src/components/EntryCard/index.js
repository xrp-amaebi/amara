import { useState } from "react"
import { Wrapper, Main, Sub, ShowLess } from "./style"

export function EntryCard({ API, Cors, HTTPS, Category, Auth, Description, Link }){
    const [show, setShow] = useState(true)

    function onSetShow() {
        setShow(!(show))
    }
    
    return(
        <>
            <Wrapper>
                <Main show={show}>
                    <div><span>{"API "}</span> <span>{API}</span></div>
                    <div><span>{"Description "}</span>{Description}</div>
                    <div><span>{"Category "}</span>{Category}</div>
                </Main>
                <Sub show={show}>
                    <div><span>{"API "}</span> <span>{API}</span></div>
                    <div><span>{"Description "}</span>{Description}</div>
                    <div><span>{"Auth "}</span>{Auth}</div>
                    <div><span>{"Category "}</span>{Category}</div>
                    <div><span>{"Cors "}</span>{Cors}</div>
                    <div><span>{"HTTPS"}</span>{HTTPS}</div>
                    <div><span>{"Link "}</span><a target="_blank" href={Link}>{Link}</a></div>
                </Sub>
                <ShowLess onClick={onSetShow}>{!show ? "show more" : "show less"}</ShowLess>

            </Wrapper>
            {/* <ShowLess onClick={onSetShow}>{!show ? "show more" : "show less"}</ShowLess> */}
        </>
    )
}