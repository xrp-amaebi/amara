import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Socials() {
    return(
        <div style={{ display: "flex", cursor: "pointer", justifyContent: "space-around", borderTop: "1px solid #4c8bf5", padding: "12px"}}>
            <a rel="noreferrer" href="https://github.com/xrp-amaebi/amara" target="_blank" title="xrp-amaebi"><FaGithub color="#4c8bf5"/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/amaebi-amara-938975200" target="_blank" title="Amaebi Amara"><FaLinkedin color="#4c8bf5"/></a>
        </div>
    )
}