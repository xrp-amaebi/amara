import {  useState, useRef, useCallback } from "react";
import { collective } from "../../utils/build.functions"
import { Container, InfoWrapper, Content, Table } from "./style"

export function Results({ entries, items=[], isSearch, count, setPageNumber, loading, error }){
    const [dot, setDot] = useState("")
    // let defaults = []
    let titleBars = {}

    items.length > 0 && items[0].column_values.map((itemProps, key) => {
        const { value, title, type  } = itemProps

        // defaults.push({
        //     value, 
        //     title, 
        //     type
        // })

        items[0].column_values.map((subProps, index) => {

            const { value: subValue, title: subTitle } = subProps

            titleBars[subTitle] = JSON.parse(subValue)

            return {}
        })

        return null
    })


    const observer = useRef()
    const lastQueryElement = useCallback(node => {
        if(loading | isSearch) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(watchables => {
            const [instance] = watchables
            if(instance.isIntersecting){
                // console.log("visible", { watchables })
                setPageNumber(prev => prev + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [setPageNumber, loading, isSearch])

    function renderTableFunction({ link, key, size }){
        const { column_values, name } = link
        return (
            (size === key+1) ?
                <tr style={{ height:"20px" }} key={key} ref={lastQueryElement}>

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
                            ;

                            
                            return <td key={key} style={{ width: "10%" }}>{result}</td>
                            
                        })
                    }
                    
                </tr>
            :
                <tr style={{ height:"20px" }} key={key}>

                <td>{name}</td>
                {
                    column_values && column_values.map((column, key) => {

                        let result = (typeof(JSON.parse(column.value)) === "object") ? 
                            column.value == null ? 
                                "null" 
                            : 
                                column.type === 'file' ? "files" : "object values"
                        :
                            String(JSON.parse(column.value))
                        ;

                        if(result === "files") {
                            const [file] = JSON.parse(column.value)["files"]
                            return file.isImage && <td key={key} style={{ width: "10%" }}><img  alt={file.name} src={file.assetId} /></td> 
                        }  else {
                            return <td key={key} style={{ width: "10%" }}>{result}</td> 
                        } 
                    })
                }
                
            </tr>
        )
    }

// "{
//     "files":[
//      {"name":"pipework dimensions.jpg","assetId":318520476,"isImage":"true","fileType":"ASSET","createdAt":1632380805310,"createdBy":"16250282"},
//      {"name":"bfbc5cc3-17d9-4adf-967d-a02d930a6e0f.jpg","assetId":318520532,"isImage":"true","fileType":"ASSET","createdAt":1632380974118,"createdBy":"16250282"},
//      {"name":"1ccba7f8-9117-4764-aaa6-514dc40cdfae.jpg","assetId":318520568,"isImage":"true","fileType":"ASSET","createdAt":1632380974112,"createdBy":"16250282"}
//      ]
// }"
    

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
                                <thead styles={{ position: "fixed", top: 0 }}>
                                    <tr>
                                        <th style={{ minWidth: "40px" }}>{"Name"}</th >
                                        {
                                            Object.keys(titleBars).map((head, index) => <th key={index}>{head}</th>)
                                        }             
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        entries && isSearch ? 
                                            entries && entries.map((link, index) => renderTableFunction({ link, key: index, size: entries.length })) 
                                        : 
                                            items && items.map((link, index) => renderTableFunction({ link, key: index, size: items.length }))
                                    }
                                </tbody>
                            </Table>  
                        }
                        <div style={{ color: "rgba(76, 139, 245, .6)", alignSelf: "center", fontSize: "10px" }}>{loading && `loading${collective.renderDots({ dot, setDot })}`}</div>
                        <div style={{ color: "rgba(255, 13, 24, .6)", alignSelf: "center", fontSize: "10px" }}>{error && `Error Fetching latest items...`}</div>
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
// const observer = useRef()
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

                        