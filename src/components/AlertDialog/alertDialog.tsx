import { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import "./alertDialog.scss";

export interface AlertDialogProps {
  isError: boolean;
  errorData: string;
}

export const AlertDialog = ({ isError, errorData }: AlertDialogProps) => {
  const [open, setOpen] = useState<boolean>(isError);
  const history = useHistory();

  return (
    <div className="alert-container">
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                history.push(`/`);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {errorData}
        </Alert>
      </Collapse>
    </div>
  );
};
