import { useState } from "react";
import { EntryCard } from "../EntryCard";
import { Container, InfoWrapper, Content } from "./style"
import ReactPaginate from "react-paginate"

export function Results({ entries, isSearch }){
    const [pageNumber, setPageNumber] =  useState(0)

    let limit = 10
    const pageCount = Math.ceil(entries.length / limit)
    let _pagePosition = pageNumber * limit

    const [dot, setDot] = useState("")
    function renderDots(){
        const count = dot.length
        let extra = dot + "."
        // console.log({ count, extra })
        setTimeout(() => {
            if(count === 3){
                extra = "."
                setDot(extra)
                return
            }
            setDot(extra)
        }, 1000)

        return(
            <span>{dot}</span>
        )
    }

    function pageChange({ selected }){
        setPageNumber(selected)
    }   

    function renderResults(){
        if(!isSearch){
            return(
                <Container>
                    {
                        <InfoWrapper>
                            <span style={{ fontSize: "x-small" }}>{"No Results found ?"}</span><br /> 
                            <span style={{ fontSize: "xx-small" }}>{"Search or check your internet connection"}{renderDots()}</span>

                        </InfoWrapper>
                    }
                </Container>
            )
        } else {
            return(
                <Container>
                    <Content>
                        {entries.slice(_pagePosition, _pagePosition + limit).map((link, key) => <EntryCard key={key} {...link} />)}
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={pageChange}
                            containerClassName={"currentLink"}
                            previousLinkClassname={"previousLink"}
                            nextLinkClassName={"nextLink"}
                            disabledClassName={"paginateDisabled"}
                            activeClassName={"paginateActive"}
                        />
                    </Content>
                </Container>
            )
        }
    }

    return(
        <>
            {renderResults()}
        </>
    )
    
}