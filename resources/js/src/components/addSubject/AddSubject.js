import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from 'react-bootstrap';
import './AddSubject.scss';


//tao class
function createData(courseID, courseName, tinChiHocPhan, typeCourse, weekLearn) {
    return {
        courseID,
        courseName,
        tinChiHocPhan,
        typeCourse,
        weekLearn,
    };
}


const headCells = [
    {
        id: 'courseID',
        numeric: false,
        disablePadding: true,
        label: 'Mã học phần',
    },
    {
        id: 'courseName',
        numeric: false,
        disablePadding: false,
        label: 'Tên học phần',
    },
    {
        id: 'tinChiHocPhan',
        numeric: true,
        disablePadding: false,
        label: 'Tín chỉ học phần',
    },
    {
        id: 'typeCourse',
        numeric: false,
        disablePadding: false,
        label: 'Loại lớp',
    },
    {
        id: 'weekLearn',
        numeric: false,
        disablePadding: false,
        label: 'Tuần học',
    },
];



function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } = props;
    return (
        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.disablePadding ? "left" : "inherit"}
                    >
                        <TableSortLabel
                        >
                            {headCell.label}

                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { handleClickDelete, numSelected, totalAmountSubject } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Tổng số tín chỉ  = {totalAmountSubject}
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={handleClickDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : null}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    handleClickDelete: PropTypes.func.isRequired,
    totalAmountSubject: PropTypes.number.isRequired
};

export default function AddSubject() {

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);
    const [totalAmountSubject, setTotalAmountSubject] = React.useState(0);

    React.useEffect(() => {
        let total = 0;
        rows.forEach(element => {
            total = total + element.tinChiHocPhan;
        });
        setTotalAmountSubject(total);

    }, [rows]);


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.courseID);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };



    const handleClick = (event, courseID) => {
        const selectedIndex = selected.indexOf(courseID);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, courseID);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };




    const isSelected = (courseID) => selected.indexOf(courseID) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [codeSubject, setCodeSubject] = React.useState('');
    const handleValueCodeSubject = (e) => {
        setCodeSubject(e.target.value);
    }

    const [errors, setErrors] = React.useState("");

    const addRegister = async () => {
        const data = {
            codeSubject: codeSubject
        }
        if (rows.length === 0) {
            axios.post(`/api/subject/find-subject-by-code`, data).then(res => {
                if (res.data.status === 200) {
                    setErrors("");
                    const newListSubject = [];
                    newListSubject.push(...rows);
                    newListSubject.push(createData(res.data.subject.code_subject, res.data.subject.name_subject, res.data.subject.amount_subject,
                        res.data.subject.type_subject, res.data.subject.week_learn));
                    setRows(newListSubject);

                } else if (res.data.status === 404) {
                    setErrors("Không tồn tại mã lớp");

                }


            }).catch(e => {
                console.log(e);

            });
        }
        else if (rows.length > 0) {
            let check = 0;
            rows.forEach(element => {
                if (element.courseID === codeSubject) {
                    setErrors("Mã lớp đã tồn tại");
                    check = 1;
                }
            });
            if(check === 0){
                axios.post(`/api/subject/find-subject-by-code`, data).then(res => {
                    if (res.data.status === 200) {
                        setErrors("");
                        const newListSubject = [];
                        newListSubject.push(...rows);
                        newListSubject.push(createData(res.data.subject.code_subject, res.data.subject.name_subject, res.data.subject.amount_subject,
                            res.data.subject.type_subject, res.data.subject.week_learn));
                        setRows(newListSubject);

                    } else if (res.data.status === 404) {
                        setErrors("Không tồn tại mã lớp");

                    }
                    


                }).catch(e => {
                    console.log(e);
                });
            }
        }
    }
    const handleDelete = async () => {
        setRows(rows.filter((r) => !selected.some((sr) => sr == r.courseID)));
        setSelected([]);
    }

    const handleCreateSchedule = async() => {
        const data = {
            listSubject : rows
        }
        axios.post(`/api/schedule/list-subject`, data).then((res)=>{
            console.log(res);
        })


    }

    return (
        <Container className="add-subject">
            <div className="form-add-subject mt-5 mb-5">
                <span>Mã môn học đăng ký : </span>
                {errors ?
                    (
                        <TextField label="Nhập mã học phần .... " variant="outlined" style={{ 'marginTop': '-10px' }}
                            value={codeSubject} onChange={handleValueCodeSubject} error helperText={errors} />
                    ) :
                    (
                        <TextField label="Mã học phần" variant="outlined" style={{ 'marginTop': '-10px' }}
                            value={codeSubject} onChange={handleValueCodeSubject} />
                    )}
                <Button variant="contained" className="mx-4" onClick={addRegister}>Đăng ký</Button>
            </div>
            <Box sx={{ width: '100%' }}>

                <Paper sx={{ width: '100%', mb: 2 }}>
                    <div>
                        <h3 className="title text-center mt-3 mb-3 pt-3 pb-3">Danh sách môn học chọn tạo thời khoá biểu</h3>
                    </div>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                onSelectAllClick={handleSelectAllClick}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {rows
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.courseID);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.courseID)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.courseID}
                                                selected={isItemSelected}
                                            >

                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"

                                                >
                                                    {row.courseID}
                                                </TableCell>
                                                <TableCell align="left" className="content-subject">{row.courseName}</TableCell>
                                                <TableCell align="left" className="content-subject">{row.tinChiHocPhan}</TableCell>
                                                <TableCell align="left" className="content-subject">{row.typeCourse}</TableCell>
                                                <TableCell align="left" className="content-subject">{row.weekLearn}</TableCell>

                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <EnhancedTableToolbar numSelected={selected.length} handleClickDelete={handleDelete} totalAmountSubject={totalAmountSubject} />
                </Paper>

            </Box>

            <div className="btn-create-schedule text-center mt-5 mb-5">
                <Button variant="contained" onClick={handleCreateSchedule}>Create Schedule</Button>
            </div>
        </Container>
    );
}
