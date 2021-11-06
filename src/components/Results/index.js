import {  useState } from "react";
import { Container, InfoWrapper, Content, Table } from "./style"

export function Results({ entries, items, isSearch, count, pageNumber, setPageNumber }){

    let defaults = []
    const [dot, setDot] = useState("")

    function renderDots(){
        const count = dot.length
        let extra = dot + "."
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

    let titleBars = {}

    items.length > 0 && items[0].column_values.map((itemProps, key) => {
        const { value, title } = itemProps

        defaults.push({
            value, title
        })

        items[0].column_values.map((subProps, index) => {

            const { value: subValue, title: subTitle } = subProps

            titleBars[subTitle] = JSON.parse(subValue)

            return {}
        })

        return null
    })
    

    // function renderNameCard({ name, column_values }, key){
    //     return <NameCard key={key} name={name} column_values={column_values} count={count} defaults={Object.keys(titleBars)} keyX={key}/> 
    // }

    function renderTableFunction({ link, key }){
        const { column_values, name } = link

        return (
        <tr style={{ height:"20px" }} key={key}>
            <td>{name}</td>
            {
                column_values && column_values.map((column, key) => {

                    let result = (typeof(JSON.parse(column.value)) === "object") ? 
                        column.value == null ? 
                            "null" 
                        : 
                            "object values"
                    :
                        String(JSON.parse(column.value))

                    return <td key={key} style={{ width: "10%" }}>{result}</td>
                })
            }
        </tr>
    )}


    function renderResults(){
        if(count === 0){
            return(
                <Container>
                    {
                        <InfoWrapper>
                            <span style={{ fontSize: "x-small" }}>{"No Results found ?"}</span><br /> 
                            <span style={{ fontSize: "xx-small" }}>{"Search or check your internet connection"}</span>
                        </InfoWrapper>
                    }
                </Container>
            )
        } else {
            return(
                <Container>
                    <Content>
                        {
                            <Table styles={{ colors: "white" }}>
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: "40px" }}>{"Name"}</th >
                                        {Object.keys(titleBars).map((head, index) => <th key={index}>{head}</th>) }             
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        entries && isSearch ? 
                                            entries && entries.map((link, index) => renderTableFunction({ link, key: index})) 
                                        : 
                                            items && items.map((link, index) => renderTableFunction({ link, key: index }))
                                    }
                                </tbody>
                            </Table>  
                        }
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

// Pagination
// const lastQueryElement = useCallback(node => {
//     if(loading) return
//     if(queryRef.current) queryRef.current.disconnect()
//     queryRef.current = new IntersectionObserver(watchables => {
//         if(watchables[0].isIntersecting){
//             console.log("visible", { watchables })
//             setPageNumber(prev => prev + 1)
//         }
//     })
//     if(node) queryRef.current.observe(node)

// }, [loading])


// let limit = 10
//     const pageCount = entries && isSearch ? Math.ceil(entries.length / limit) : Math.ceil(items.length / limit)
//     let _pagePosition = pageNumber * limit

// function pageChange({ selected }){
//     setPageNumber(selected)
// }

/* {entries && entries.slice(_pagePosition, _pagePosition + limit).map((link, key) => <EntryCard key={key} {...link} />)} 
    {
        entries && isSearch ? 
            entries.slice(_pagePosition, _pagePosition + limit).map((link, key) => <NameCard key={key} {...link} />)
        : 
            items.slice(_pagePosition, _pagePosition + limit).map((link, key) => <NameCard key={key} {...link} />)
    }
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
*/

                        