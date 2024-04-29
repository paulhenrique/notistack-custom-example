import "./styles.css";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

console.log(SnackbarProvider);

export const ContentApp = () => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    enqueueSnackbar("ContentApp", { variant: "success" });
  }, []);
  return <div>ContentApp</div>;
};

const useStyle = makeStyles({
  variantSuccess: {
    backgroundColor: "black",
  },
});

export default function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <SnackbarProvider
        classes={{
          variantSuccess: classes.variantSuccess,
        }}
      >
        <ContentApp />
      </SnackbarProvider>
    </div>
  );
}
