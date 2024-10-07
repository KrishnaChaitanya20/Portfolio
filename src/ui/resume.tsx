import { useEffect } from 'react'

const Resume = () => {
    useEffect(() => {
        window.location.href = "/documents/Resume.pdf";

    }, []);
    return (
        <div></div>
    )
}

export default Resume