import "lib/i18next";
import { useTranslation } from "react-i18next";
const useTableHeader = () => {
  const { t: tCommon } = useTranslation();
  const { t } = useTranslation("city", { keyPrefix: "table" });
  return [t("name"), tCommon("action")];
};

export default useTableHeader;
