import React, { useState, useEffect } from 'react'
//import NewUsersForm from "./NewUserForm";
import PageHeader from "../../components/pages/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, Toolbar, InputAdornment, TableCell } from '@material-ui/core';
import useTable from "../../components/useTable";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";

import UsersService from '../../services/UsersService';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))


const headCells = [
    { id: 'id', label: 'ID', width: 70 },
    { id: 'email', label: 'Email', width: 130 },
    { id: 'fullname', label: 'Name', width: 130 },
    { id: 'phonenumber', label: 'Phone Number', width: 150, disableSorting: true },
    { id: 'role', label: 'Role', width: 130 },
    { id: 'username', label: 'Username', width: 130 },
]

export default function TestTable3Page() {

    const classes = useStyles();
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    
    console.log(records);

    useEffect(() => {
        UsersService.getUsers()
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
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <>
            <PageHeader
                title="Users"
                subTitle="Test Subtitle"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
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
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}