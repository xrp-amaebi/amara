import axios from 'axios'
export let collective = { setLocalStorage, getLocalStorage, fillLocalStorage, fetchData, fetchItemCount, renderDots }

const _ENDPOINT = "https://api.monday.com/v2"

async function fetchItemCount({ setFetchCount }){
    // let query = '{boards(ids: 1832485672) { name id description items { name column_values{title id type text } } } }';
    // let query = '{boards(ids: 1832485672) { items{ name } views { id name type  } }}';
    let query = '{boards(ids: 1832485672) { items{ name }}}';
    // let query = '{boards(ids: 1832485672) { items { name  column_values{ id text title type value } } }}';
    // let query2 = '{boards(ids: 1832485672) { items(limit: 10 page: 2){ name column_values{ id text title type value }}}}';

    const result = await axios({
        method: "POST",
        url: _ENDPOINT,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjk5ODEwOTY1LCJ1aWQiOjE1MzUwNTMzLCJpYWQiOiIyMDIxLTAyLTE2VDEyOjE3OjQ1LjAwMFoiLCJwZXIiOiJtZTp3cml0ZSIsImFjdGlkIjo0MjU4MjgwLCJyZ24iOiJ1c2UxIn0.wrR7q2mQTPRJ8tOzSN2IVLDG81DJ_d-VxRkpSPSLZ2M"
        },
        data: JSON.stringify({
            "query": query
        })
    })
    .then((res) => res.data)
    .catch((error) => console.log("error caught 404", { error }))

    
    

    return result && setFetchCount(result.data['boards'][0]["items"].length)
}

async function fetchData({ page, setItems, setLoading, setError }){
    setLoading(true)
    setError(false)
    let variables = {"page": page}
    await axios({
        method: "POST",
        url: _ENDPOINT,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjk5ODEwOTY1LCJ1aWQiOjE1MzUwNTMzLCJpYWQiOiIyMDIxLTAyLTE2VDEyOjE3OjQ1LjAwMFoiLCJwZXIiOiJtZTp3cml0ZSIsImFjdGlkIjo0MjU4MjgwLCJyZ24iOiJ1c2UxIn0.wrR7q2mQTPRJ8tOzSN2IVLDG81DJ_d-VxRkpSPSLZ2M"
        },
        data: JSON.stringify({
            "query": `{boards(ids: 1832485672) {items(limit: 10 page: ${page}){ name column_values{ id text title type value }}}}`,
            'variables': JSON.stringify(variables)
        })
    })
    .then((res) => {
        setLoading(false)
        return setItems(prevItems => [...prevItems, ...res.data.data['boards'][0]["items"]])
    })
    .catch((error) => { setError(true) ; console.log("error caught 404")})
}

function getLocalStorage(){
    const [ _package ] = JSON.parse(localStorage.getItem("items")) || [ 0 ]
    let localPageCount = _package ? Math.floor(_package.length / 10) : null
    let nextPageCount = localPageCount ? localPageCount + 1 : 1

    return { _package, localPageCount, nextPageCount }
}

function setLocalStorage({ storageParcel,  response }){
    let value = storageParcel || [];
    value.push(response.data['boards'][0]['items'])
    localStorage.setItem("items", JSON.stringify(value))

    console.log({ message: "storage is set"})
}

async function fillLocalStorage(){
    const { nextPageCount, _package } = getLocalStorage()

    const result = await fetchData(nextPageCount)

    if(!result){
        return
    }

    setLocalStorage({ _package, result })
    // continue to fill LocalStorage recursively until fetchCount is fulfilled()

    // setEntries(result)
}

function renderDots({ setDot, dot }){
    // const count = dot.length
    // let extra = dot + "."
    // setTimeout(() => {
    //     if(count === 3){
    //         extra = "."
    //         setDot(extra)
    //         return
    //     }
    //     setDot(extra)
    // }, 300)

    return (
        dot
    )
}