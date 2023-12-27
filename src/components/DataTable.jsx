import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { useSelector } from "react-redux";

export let DataTable = () => {
  
    const formState = useSelector(state => state.formState);
  
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{p: "10px"}}>First Name</TableCell>
                        <TableCell sx={{p: "10px"}}>Last Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {formState.map((data, index) => (
                    <TableRow key={index}>
                    <TableCell 
                        component="th" 
                        scope="row"
                        sx={{p: "10px"}} >
                        {data.fName}
                    </TableCell>
                    <TableCell sx={{p: "10px"}} >{data.lName}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
