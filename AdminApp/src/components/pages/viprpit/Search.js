import React from 'react'
import { TextField, Button } from '@material-ui/core'

export default ({ handleSubmit, handleChange, keyPress, input }) => {
    return (
        <form onSubmit={handleSubmit} >
            <TextField required id="standard-basic" label="ELNOT" type="string" inputProps={{ maxLength: 6 }} onChange={handleChange} onKeyDown={keyPress} value={input} />
            <Button variant="contained" style={{display: 'block', marginTop: 5}} type="submit" >Search</Button>
        </form>
    )
}