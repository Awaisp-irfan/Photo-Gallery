import React, { useState } from "react";
import ProgressBar from "./progressBar";
const UpLoadForm = () => {
    const [file, setfile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg' ,'image/jpg']
    const handleChange = (e) => {
        let slected = e.target.files[0];
        if (slected && types.includes(slected.type)) {
            setfile(slected)
            setError(null)
        }
        else {
            
            setfile(null)
            setError('please select the correct format (png, jpeg)')
        }
    }
    return (
        <>
            <form>
                <input type="file" onChange={handleChange} />
                <div className="output">
                    {error &&
                        <div className="error">{error}</div>}
                    {file && <div className>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setfile} />}
                </div>

            </form>
        </>
    );
}

export default UpLoadForm;