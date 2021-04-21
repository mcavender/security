import React, { useState, useEffect } from 'react'
import {
    Grid, Paper, makeStyles, TableBody, TableRow,
    Toolbar, InputAdornment, TableCell
} from '@material-ui/core';
import useTable from "../../controls/useTable";
import IntTbl from "./IntTbl";
import Controls from "../../controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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

const elnotHead = [
    { id: 'elnot', label: 'Elnot', width: 50 },
    { label: 'Validation Status', width: 40 },
    { label: 'Validate', width: 40, disableSorting: true },
]

const intHead = [
    { id: 'elnot', label: 'Elnot', width: 50 },
    { id: 'op_mode_id', label: 'Mode', width: 50 },
    { id: 'rf_mode', label: 'RF Min', width: 50 },
    { id: 'rf_mode', label: 'RF Max', width: 50 },
    { id: 'mode_type', label: 'Mode Type', width: 50 },
    { id: 'pri_seq', label: 'Pri Min', width: 50 },
    { id: 'pri_seq', label: 'Pri Max', width: 50 },
    { id: 'pd_mode', label: 'PD Min', width: 50 },
    { id: 'pd_mode', label: 'PD Max', width: 50 },
    { id: 'sp_mode', label: 'SP Min', width: 50 },
    { id: 'sp_mode', label: 'SP Max', width: 50 },
    { id: 'scan_type', label: 'Scan Type', width: 50 },
]


export default function ViprPitComponent() {

    const classes = useStyles();
    const [viprView, setViprView] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [openPopup, setOpenPopup] = useState(false)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [selectedID, setSelectedID] = useState(null);
    
    useEffect(() => {
        ViprTablesViewService.getViprTablesView()
        .then(response => {
            setViprView(response.data);
        })
    }, []);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(viprView, elnotHead, filterFn);

    const {
        IntContainer,
        IntHead,
        IntPagination,
        intsAfterPagingAndSorting
    } = IntTbl(viprView, intHead, filterFn);
    
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.elnot.toLowerCase().includes(target.value))
            }
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const conditionalRowStyles = [
        {
          when: item => item.elnot === "3",
          style: {
            backgroundColor: "red"
          }
        }
    ]
    
    return (
        <>
            <Grid container spacing={3} direction="column">
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Toolbar>
                            <Controls.Input
                                label="Search Elnot"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>)
                                }}
                                onChange={handleSearch}
                            />
                            <Controls.Button
                                text="Add New"
                                variant="outlined"
                                startIcon={<AddIcon />}
                                className={classes.newButton}
                            />
                            </Toolbar>
                            <TblContainer>
                                <TblHead />
                                <TableBody>
                                    {
                                        recordsAfterPagingAndSorting(viprView).map(item =>
                                            (<TableRow key={item.elnot}
                                                hover
                                                onClick={() => {
                                                  setSelectedID(item.elnot);
                                                }}
                                                selected={selectedID === item.elnot}
                                                classes={{ selected: classes.selected }}
                                                className={classes.tableRow}
                                                conditionalRowStyles={item}>
                                                <TableCell>{item.elnot}</TableCell>
                                                <TableCell></TableCell>
                                                <TableCell>
                                                    <Controls.ActionButton
                                                        color="primary"
                                                        onClick={() => { openInPopup(item) }}>
                                                        <EditOutlinedIcon fontSize="small" />
                                                    </Controls.ActionButton>
                                                </TableCell>
                                            </TableRow>)
                                        )
                                    }
                                </TableBody>
                            </TblContainer>
                            <TblPagination />
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <IntContainer>
                                    <IntHead />
                                    <TableBody>
                                        {
                                            intsAfterPagingAndSorting(viprView).map(item =>
                                                (<TableRow 
                                                    key={item.elnot}
                                                >
                                                    <TableCell>{item.elnot}</TableCell>
                                                    <TableCell>{item.op_mode_id}</TableCell>
                                                    <TableCell>{item.rf_mode}</TableCell>
                                                    <TableCell>{item.rf_mode}</TableCell>
                                                    <TableCell>{item.mode_type}</TableCell>
                                                    <TableCell>{item.pri_seq}</TableCell>
                                                    <TableCell>{item.pri_seq}</TableCell>
                                                    <TableCell>{item.pd_mode}</TableCell>
                                                    <TableCell>{item.pd_mode}</TableCell>
                                                    <TableCell>{item.sp_mode}</TableCell>
                                                    <TableCell>{item.sp_mode}</TableCell>
                                                    <TableCell>{item.scan_type}</TableCell>
                                                </TableRow>)
                                            )
                                        }
                                    </TableBody>
                                </IntContainer>
                                <IntPagination/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>    
            </Grid>
        </>
    )
}