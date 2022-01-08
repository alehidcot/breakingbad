import { render } from "@testing-library/react";
import { AlertDialog, AlertDialogProps } from "components/AlertDialog";

describe("<AlertDialog />", () => {
  const alertValues: AlertDialogProps = {
    isError: true,
    errorData: "error test message",
  };

  it("should display an alert dialog", async () => {
    const { isError, errorData } = alertValues;
    const component = render(
      <AlertDialog isError={isError} errorData={errorData} />
    );
    const alertDialog = component.container.querySelector(".alert-container");
    expect(alertDialog).toBeEnabled();
  });
});
