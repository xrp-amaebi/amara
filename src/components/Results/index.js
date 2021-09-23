import { useState } from "react";
import { EntryCard } from "../EntryCard";
import { Container, InfoWrapper, ShowLess, Content } from "./style"
import ReactPaginate from "react-paginate"

export function Results({ entries, isSearch }){
    const [pageNumber, setPageNumber] =  useState(0)

    let limit = 10
    const pageCount = Math.ceil(entries.length / limit)

    let _pagePosition = pageNumber * limit

    function pageChange({ selected }){
        setPageNumber(selected)
    }   

    function renderResults(){
        if(!isSearch){
            return(
                <Container>
                    {
                        <InfoWrapper>
                            <span style={{ fontSize: "small" }}>{"No Results found"}</span><br /> 
                            <span style={{ fontSize: "x-small" }}>{"Search or check your internet connection ..."}</span>
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