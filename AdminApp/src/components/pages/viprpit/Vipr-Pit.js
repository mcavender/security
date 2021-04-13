import React, { useState, useEffect } from 'react'
import {
    Grid, Paper, makeStyles, TableBody, TableRow,
    Toolbar, InputAdornment, TableCell
} from '@material-ui/core';
import useTable from "../../controls/useTable";
import IntTbl from "./IntTbl";
import PriTbl from "./PriTbl";
import RfTbl from "./RfTbl";
import Controls from "../../controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';

import InterceptsService from '../../../services/InterceptsService';

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
}))


const elnotHead = [
    { id: 'elnot', label: 'Elnot', width: 50 }
]

const intHead = [
    { id: 'elnot', label: 'Elnot', width: 50 },
    { id: 'pd', label: 'PD', width: 50 },
    { id: 'scan_type', label: 'Scan Type', width: 50 },
    { id: 'ir', label: 'IR', width: 50 },
    { id: 'scan_period', label: 'Scan Period', width: 50 },
    { id: 'mod_type', label: 'Mod Type', width: 50 }
]

const priHead = [
    { id: 'pri1', label: 'PRI1', width: 50 },
    { id: 'pri2', label: 'PRI2', width: 50 },
    { id: 'pri3', label: 'PRI3', width: 50 }
]

const rfHead = [
    { id: 'rf1', label: 'RF1', width: 50 },
    { id: 'rf2', label: 'RF2', width: 50 },
    { id: 'rf3', label: 'RF3', width: 50 }
]


export default function ViprPitComponent() {

    const classes = useStyles();
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    useEffect(() => {
        InterceptsService.getIntercepts()
        .then(response => {
            setRecords(response.data);
        })
    }, []);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, elnotHead, filterFn);

    const {
        IntContainer,
        IntHead,
        IntPagination,
        intsAfterPagingAndSorting
    } = IntTbl(records, intHead, filterFn);

    const {
        PriContainer,
        PriHead,
        PriPagination,
        prisAfterPagingAndSorting
    } = PriTbl(records, priHead, filterFn);

    const {
        RfContainer,
        RfHead,
        RfPagination,
        rfsAfterPagingAndSorting
    } = RfTbl(records, rfHead, filterFn);
    
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
    
    return (
        <>
            <Grid container spacing={3} direction="column">
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Toolbar>
                            <Controls.Input
                                label="Search Users"
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
                                        recordsAfterPagingAndSorting(records).map(item =>
                                            (<TableRow key={item.elnot}>
                                                <TableCell>{item.elnot}</TableCell>
                                            </TableRow>)
                                        )
                                    }
                                </TableBody>
                            </TblContainer>
                            <TblPagination />
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <IntContainer>
                                    <IntHead />
                                    <TableBody>
                                        {
                                            intsAfterPagingAndSorting(records).map(item =>
                                                (<TableRow key={item.elnot}>
                                                    <TableCell>{item.elnot}</TableCell>
                                                    <TableCell>{item.pd}</TableCell>
                                                    <TableCell>{item.scan_type}</TableCell>
                                                    <TableCell>{item.ir}</TableCell>
                                                    <TableCell>{item.scan_period}</TableCell>
                                                    <TableCell>{item.mod_type}</TableCell>
                                                </TableRow>)
                                            )
                                        }
                                    </TableBody>
                                </IntContainer>
                                <IntPagination/>
                            </Paper>
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <PriContainer>
                                        <PriHead />
                                        <TableBody>
                                            {
                                                prisAfterPagingAndSorting(records).map(item =>
                                                    (<TableRow key={item.elnot}>
                                                        <TableCell>{item.pri1}</TableCell>
                                                        <TableCell>{item.pri2}</TableCell>
                                                        <TableCell>{item.pri3}</TableCell>
                                                    </TableRow>)
                                                )
                                            }
                                        </TableBody>
                                    </PriContainer>
                                    <PriPagination />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <RfContainer>
                                        <RfHead />
                                        <TableBody>
                                            {
                                                rfsAfterPagingAndSorting(records).map(item =>
                                                    (<TableRow key={item.elnot}>
                                                        <TableCell>{item.rf1}</TableCell>
                                                        <TableCell>{item.rf2}</TableCell>
                                                        <TableCell>{item.rf3}</TableCell>
                                                    </TableRow>)
                                                )
                                            }
                                        </TableBody>
                                    </RfContainer>
                                    <RfPagination/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>    
            </Grid>
        </>
    )
}