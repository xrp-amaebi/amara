import { useState } from "react";
import { EntryCard } from "../EntryCard";
import { Container, ShowLess, Content } from "./style"

export function Results({ entries, isSearch }){
    const [show, setShow] = useState(true)

    function onSetShow() {
        setShow(!(show))
    }

    if(!isSearch){
        return(
            <Container>
                {
                    <div>
                        <span style={{ fontSize: "small" }}>{"No Results found"}</span> <br /> 
                        <span style={{ fontSize: "x-small" }}>{"check your internet connection..."}</span>
                    </div>
                }
               
            </Container>
        )
    } else {
        return(
            <Container>
                <ShowLess onClick={onSetShow}>{!show ? "show more" : "show less"}</ShowLess>
                <Content>
                    {entries.map((link, key) => <EntryCard key={key} {...link} show={show} />)}
                </Content>
            </Container>
        )
    }
}