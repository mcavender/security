import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import { Grid, Paper, makeStyles } from '@material-ui/core';

import ViprTablesViewService from '../../../services/ViprTablesViewService';


const useStyles = makeStyles(theme => ({
  elnotTbl: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      width: '25%'
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tableRow: {
      "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "red",
              "& > .MuiTableCell-root": {
              color: "black"
          }
      }
  },
}))

export default function ViprPit() {

  const classes = useStyles();
  const [elnotClm, setElnotClm] = useState([]);
  const [viprViewClm, setViprViewClm] = useState([]);
  const [vipr, setvipr] = useState({ data: [] });

  useEffect(() => {
    setElnotClm([      
      { field: 'state_id', title: 'Status', width: 50 },
      { field: 'elnot', title: 'Elnot', width: 50 },
    ])

    setViprViewClm([
      { field: 'elnot', title: 'Elnot', width: 50 },
      { field: 'op_mode_id', title: 'Mode', width: 50 },
      { field: 'rf_mode', title: 'RF Min', width: 50 },
      { field: 'rf_mode', title: 'RF Max', width: 50 },
      { field: 'mode_type', title: 'Mode Type', width: 50 },
      { field: 'pri_seq', title: 'Pri Min', width: 50 },
      { field: 'pri_seq', title: 'Pri Max', width: 50 },
      { field: 'pd_mode', title: 'PD Min', width: 50 },
      { field: 'pd_mode', title: 'PD Max', width: 50 },
      { field: 'sp_mode', title: 'SP Min', width: 50 },
      { field: 'sp_mode', title: 'SP Max', width: 50 },
      { field: 'scan_type', title: 'Scan Type', width: 50 },
    ])

    ViprTablesViewService.getViprTablesView()
    .then(response => {
      setvipr({data: response.data });
    })
  }, []);
  
  return (
    <Grid container spacing={3} direction="column">
      <Grid container xs={12} spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <MaterialTable
              title="Vipr-Pit"
              columns={elnotClm}
              data={vipr.data}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const data = [...vipr.data];
                      data[data.indexOf(oldData)] = newData;
                      setvipr({ ...vipr, data });
                    }, 600);
                  }),
              }}
            />
          </Paper>        
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>      
              <MaterialTable
                title=""
                columns={viprViewClm}
                data={vipr.data}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>    
    </Grid>      
  );
}