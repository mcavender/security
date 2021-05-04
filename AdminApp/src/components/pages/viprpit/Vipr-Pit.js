import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios'

import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import CreateIcon from '@material-ui/icons/Create';
import Clear from '@material-ui/icons/Clear';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import ViprTablesViewService from '../../../services/ViprTablesViewService';
import TopMenu from '../sidebar/TopMenu';

const api = axios.create({
  baseURL: `http://localhost:3000/`
})

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
  materialTable: {
    cellStyle: {textAlign:'center'},
    headerStyle: {textAlign:'center'},
  }
}))


export default function ViprPit() {

  const classes = useStyles();
  const [elnotClm, setElnotClm] = useState([]);
  const [viprClm, setViprClm] = useState([]);
  const [viprData, setViprData] = useState({ data: [] });
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])
  const [dataSelected, setDataSelected] = useState([]);

  useEffect(() => {
    setElnotClm([      
      {
        field: 'elnot', title: 'Elnot', width: 50, editable: 'never',
      },
      {
        field: 'state_id', title: 'Status', width: 50,
        render: viprData => {
          return (
            viprData.state_id === 1 ? <p>Valid</p> :
              viprData.state_id === 2 ? <p>Pending</p> :
                viprData.state_id === 3 ? <p>Invalid</p> :
                  viprData.state_id === 4 ? <p>Tech Analysis</p> :
                    <p>{viprData.state_id}</p>)
        },
      },
    ])

    setViprClm([
      {
        field: 'elnot', title: 'Elnot', width: 50, editable: 'never',
        render: viprData => {
            return(
              viprData.elnot === "3" ? <p style={{ backgroundColor: "red", fontWeight: "bold",}}>{viprData.elnot}</p> :
                viprData.elnot === "5" ? <p style={{ backgroundColor: "#008240" }}>{viprData.elnot}</p> :
                <p>{viprData.elnot}</p>)
        },
      },
      { field: 'op_mode_id', title: 'Mode', width: 50, editable: 'never', },
      { field: 'rf_mode', title: 'RF Min', width: 50, editable: 'never', },
      { field: 'rf_mode', title: 'RF Max', width: 50, editable: 'never', },
      { field: 'mode_type', title: 'Mode Type', width: 50, editable: 'never', },
      { field: 'pri_seq', title: 'Pri Min', width: 50, editable: 'never', },
      { field: 'pri_seq', title: 'Pri Max', width: 50, editable: 'never', },
      { field: 'pd_mode', title: 'PD Min', width: 50, editable: 'never', },
      { field: 'pd_mode', title: 'PD Max', width: 50, editable: 'never', },
      { field: 'sp_mode', title: 'SP Min', width: 50, editable: 'never', },
      { field: 'sp_mode', title: 'SP Max', width: 50, editable: 'never', },
      { field: 'scan_type', title: 'Scan Type', width: 50, editable: 'never', },
    ])

    ViprTablesViewService.getViprTablesView()
    .then(response => {
      setViprData({ data: response.data });
      console.log(response.headers);
    })
  }, []);
  
  const handleRowUpdate = (newData, oldData, resolve) => {

    let errorList = []

    if (viprData.state_id === "") {
      errorList.push("Please enter status")
    }

    if(errorList.length < 1){
      api.put("/vipr_tables_view/"+newData.op_mode_id, newData)
        .then(res => {
          const dataUpdate = [...viprData];
          const index = oldData.op_mode_id;
          dataUpdate[index] = newData;
          setViprData([...dataUpdate]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }
  
  return (
    <>
    <TopMenu />
    <Grid container spacing={3} direction="column"> 
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <div>
            {iserror && 
              <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }       
          </div>
          <Paper className={classes.paper}>
            <MaterialTable
              icons={{
                Check: Check,
                Clear: Clear,
                DetailPanel: ChevronRight,
                Export: SaveAlt,
                Filter: FilterList,
                FirstPage: FirstPage,
                LastPage: LastPage,
                NextPage: ChevronRight,
                PreviousPage: ChevronLeft,
                ResetSearch: Clear,
                Search: Search,
                SortArrow: ArrowDownwardIcon,
                ThirdStateCheck: Remove,
                Edit: CreateIcon,
                }}
              title="Vipr-Pit"
              columns={elnotClm}
              data={viprData.data}
              editable={{
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    handleRowUpdate(newData, oldData, resolve);                     
                }),
              }}
            />
          </Paper>        
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>      
              <MaterialTable                
                icons={{
                  Check: Check,
                  Clear: Clear,
                  DetailPanel: ChevronRight,
                  Export: SaveAlt,
                  Filter: FilterList,
                  FirstPage: FirstPage,
                  LastPage: LastPage,
                  NextPage: ChevronRight,
                  PreviousPage: ChevronLeft,
                  ResetSearch: Clear,
                  Search: Search,
                  SortArrow: ArrowDownwardIcon,
                  ThirdStateCheck: Remove,
                  Edit: CreateIcon,
              }}
                title=""
                columns={viprClm}
                data={viprData.data}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>    
    </Grid>      
    </>
  );
}