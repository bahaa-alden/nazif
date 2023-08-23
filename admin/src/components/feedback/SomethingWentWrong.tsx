import ErrorIcon from "@mui/icons-material/Error";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const SomethingWentWrong = () => {
  const { t } = useTranslation();
  return (
    <Stack alignItems={"center"} py={10} gap={1}>
      <ErrorIcon sx={{ height: "10rem", width: "10rem" }} color="error" />
      <Typography color="primary" variant="h5" textAlign={"center"}>
        {t`error.somethingWentWrong`}
      </Typography>
    </Stack>
  );
};
export default SomethingWentWrong;
