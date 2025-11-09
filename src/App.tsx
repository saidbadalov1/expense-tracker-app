import { Typography } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/store";

const App = () => {
  return (
    <Provider store={store}>
      <Typography variant="7xl_regular">Hello World</Typography>
    </Provider>
  );
};

export default App;
