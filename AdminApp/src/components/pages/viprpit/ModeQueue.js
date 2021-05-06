import React from 'react';

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    multilineColor:{
        color:'white'
    },
}));
  
export default function ModeQueue() {
    
    const classes = useStyles();    
    
        return (
          <div className="searchBox">
            <div className="nav-buttons">
              <h2>Mode Queue</h2>
            </div>
              <form className={classes.root} id="modeQueueSearch">
                <TextField id="elnot" label="Elnot" variant="filled"
                    InputProps={{ className: classes.multilineColor }}
                    InputLabelProps={{ className: classes.multilineColor }}/>
                <TextField id="modType" label="ModType" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="pri-min" label="Pri Min" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="pri-max" label="Pri Max" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="rf-min" label="RF Min" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="rf-max" label="RF Max" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="pd-min" label="PD Min" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="pd-max" label="PD Max" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="sp-min" label="SP Min" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <TextField id="sp-max" label="SP Max" variant="filled" 
                    InputProps={{ className: classes.input }}/>
                <button
                  type="submit"
                  className="submit">
                  Submit
                </button>
              </form>
          </div>
        );
    }