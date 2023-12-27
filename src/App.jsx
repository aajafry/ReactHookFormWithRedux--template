import { Provider } from "react-redux";
import store from "./app/store";
import { DataTable } from "./components/DataTable";
import HookForm from "./components/hookForm";

import Typography from '@mui/material/Typography';

function App() {

  return (
      <Provider store={store}>
        <Typography 
        variant="h2"
        sx={{textAlign: "center"}} 
        gutterBottom>React Hook Form</Typography>
        <HookForm />
        <DataTable />
      </Provider>
  )
}

export default App
