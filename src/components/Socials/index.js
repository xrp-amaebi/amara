import { FaGithub, FaLinkedin } from 'react-icons/fa'

let styles = { 
    display: "flex", cursor: "pointer", 
    justifyContent: "space-around", 
    borderTop: "1px solid #4c8bf5", 
    padding: "12px",
    position: "fixed",
    bottom: 0,
    marginTop: "12px",
    backgroundColor: "rgba(0,0,0, .8)",
    zIndex: 2,
    width: "inherit"

}
export function Socials() {

    return(
        <div style={styles}>
            <a rel="noreferrer" href="https://github.com/xrp-amaebi/amara" target="_blank" title="xrp-amaebi"><FaGithub color="#4c8bf5"/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/amaebi-amara-938975200" target="_blank" title="Amaebi Amara"><FaLinkedin color="#4c8bf5"/></a>
        </div>
    )
}