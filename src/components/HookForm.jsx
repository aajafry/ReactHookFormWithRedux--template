import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addedData } from "../features/form/formSlice";
import Input from "./input";


function HookForm() {
  const methods = useForm();
  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    dispatch(addedData(data));
  };
  
  return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input label="First Name" name="fName" register={methods.register} required />
          <Input label="Last Name" name="lName" register={methods.register} required />
          <Button 
            type="submit" 
            variant="outlined"
            sx={{display:"flex", m: "0px auto", mb: "20px"}}
          >Submit</Button>
        </form>
      </FormProvider>
  )
}

export default HookForm;