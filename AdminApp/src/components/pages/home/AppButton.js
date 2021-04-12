import React from 'react'

import { Grid, Button } from '@material-ui/core';

const AppButton = () => {
    return (
        <Grid item xs={10} sm={3}>
            <Button
                style={{ height: 200, width: '100%', minWidth: 125 }}
                className="home-buttons"
                elevation={5} />
        </Grid>
    )
}

export default AppButton
