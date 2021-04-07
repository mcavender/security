import React, { useState, useEffect } from 'react'
import NewUsersForm from "./NewUserForm";
import PageHeader from "./PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, Toolbar, InputAdornment, TableCell } from '@material-ui/core';
import useTable from "../useTable";
import Controls from "../controls/Controls";
import Popup from "../controls/Popup";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

import UsersService from '../../services/UsersService';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
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
    { id: 'id', label: 'ID', width: 70 },
    { id: 'email', label: 'Email', width: 130 },
    { id: 'fullname', label: 'Name', width: 130 },
    { id: 'phonenumber', label: 'Phone Number', width: 150, disableSorting: true },
    { id: 'role', label: 'Role', width: 130 },
    { id: 'username', label: 'Username', width: 130 }, ,
    { id: 'actions', label: 'Actions'}
]

export default function UsersComponent() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    useEffect(() => {
        UsersService.getUsers()
        .then(response => {
          setRecords(response.data);
        })
    }, []);

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
                    return items.filter(x => x.fullname.toLowerCase().includes(target.value))
            }
        })
    }
    
    const addOrEdit = (user, resetForm) => {
        if (user.id === 0)
            UsersService.addUsers(user)
        else
            UsersService.updateUsers(user)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(UsersService.getUsers())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    
    return (
        <>
            <PageHeader
                title="Users"
                subTitle="Test Subtitle"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
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
                                (<TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.fullname}</TableCell>
                                    <TableCell>{item.phonenumber}</TableCell>
                                    <TableCell>{item.role}</TableCell>
                                    <TableCell>{item.username}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary">
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>            
            <Popup
                title="User Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <NewUsersForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}