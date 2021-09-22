import { Wrapper } from "./style"

export function EntryCard({ API, Cors, HTTPS, Category, Auth, Description, Link }){
    const none = "none"
    
    return(
        <Wrapper>
            <div><span>{"API "}</span> {API}</div>
            <div><span>{"Auth "}</span>{Auth}</div>
            <div><span>{"Category "}</span>{Category}</div>
            <div><span>{"Cors "}</span>{Cors}</div>
            <div><span>{"Description "}</span>{Description}</div>
            <div><span>{"HTTPS"}</span>{HTTPS || none}</div>
            <div><span>{"Link "}</span>{Link || none}</div>
        </Wrapper>
    )
}