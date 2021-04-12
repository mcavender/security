import React, { useState, useEffect } from 'react'
import PageHeader from "../home/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Grid, Paper, makeStyles, TableBody, TableRow, Toolbar, InputAdornment, TableCell } from '@material-ui/core';
import useTable from "../../controls/useTable";
import Controls from "../../controls/Controls";
import Popup from "../../controls/Popup";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

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
    }
}))


const headCells = [
    { id: 'elnot', label: 'Elnot', width: 50 }
]

export default function ViprPitComponent() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    useEffect(() => {
        InterceptsService.getIntercepts()
        .then(response => {
            setRecords(response.data);
        })
    }, []);

    console.log(records);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

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
    
    const addOrEdit = (intercepts, resetForm) => {
        if (intercepts.elnot === 0)
        InterceptsService.addIntercepts(intercepts)
        else
        InterceptsService.updateIntercepts(intercepts)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(InterceptsService.getIntercepts())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    
    return (
        <>
            <PageHeader
                title="Intercepts"
                subTitle="Test Subtitle"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Grid container spacing={2}>
                <Grid container xs={12} sm={6} style={{ height: "95vh" }}>
                    <Grid item xs={12} style={{ height: "95vh" }}>
                        <Paper style={{padding: 10}}>
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
                                    onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
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
                </Grid>
                <Grid container xs={12} sm={6} style={{height: "95vh"}}>
                    <Grid item xs={12} >
                        <Paper style={{ padding: 10, height: "70vh" }}>
                            
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper style={{ padding: 10, height: "25vh" }}>
                            
                        </Paper>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper style={{ padding: 10, height: "25vh" }}>
                            
                        </Paper>
                    </Grid>                    
                </Grid>
            </Grid>
            <Popup
                title="User Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
            </Popup>
        </>
    )
}