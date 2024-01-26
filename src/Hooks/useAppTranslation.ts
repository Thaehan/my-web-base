import { useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { IRootState } from "Store";
import { EN_RELATIVE_TIME, VI_RELATIVE_TIME } from "Constants/Locals";
import { setLanguage } from "Store/Slices/SystemSlice";
import { TLanguages, translate } from "Languages";

export default function useAppTranslation() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const systemLang = useSelector((state: IRootState) => state.system.language);

  const initLanguage = (isInit?: boolean) => {
    let newLanguage: TLanguages = systemLang === "vi" ? "en" : "vi";
    if (isInit) {
      newLanguage = systemLang;
    }

    dayjs.locale(newLanguage, {
      relativeTime: newLanguage === "vi" ? VI_RELATIVE_TIME : EN_RELATIVE_TIME,
    });
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  const changeLanguage = () => {
    initLanguage();
  };

  useEffect(() => {
    initLanguage(true);
  }, []);

  return {
    translate,
    changeLanguage,
    systemLang,
  };
}
