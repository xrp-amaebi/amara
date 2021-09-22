import { Wrapper, Main, Sub } from "./style"

export function EntryCard({ API, Cors, HTTPS, Category, Auth, Description, Link, show }){
    const none = "none"
    
    return(
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
                <div><span>{"HTTPS"}</span>{HTTPS || none}</div>
                <div><span>{"Link "}</span>{Link || none}</div>
            </Sub>
        </Wrapper>
    )
}