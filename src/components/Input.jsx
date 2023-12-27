import { TextField } from '@mui/material';


// eslint-disable-next-line react/prop-types
let Input = ({ label, name, register, required }) => (  
  <TextField 
    id="outlined-basic"
    label={label} 
    variant="outlined"
    sx={{ mb: 1, pb: 1.2, width: '100%'}} 
    {...register(name, { required })}
  />
)

export default Input