const PUBLIC = {
  WELCOME: "خوش آمدید",
  RELOAD: "بارگیری مجدد",
  DESCRIPTION: "توضیحات",
  CONFIRM: "تایید",
  CANCEL: "انصراف",
  SAVE: "دخیره",
  SAVED: "دخیره انجام شد",
  SAVING_DATA: "در حال دخیره اطلاعات",
  NOT_SAVED: "دخیره انجام نشد",
  DELETE: "حذف",
  DELETED: "حذف انجام شد",
  DELETING: "در حال حذف",
  DELETING_DATA: "در حال حذف اطلاعات",
  NOT_DELETED: "حذف انجام نشد",
  YES: "بله",
  NO: "خیر",
  CONFIRM_AND_SAVE: "تایید و دخیره",
  SAVED_SUCCESSFUL_WITH_ID: (param = []) => {
    return `${param[0]}  مورد نظر با موقیت با شناسه ${param[1]} ذخیره شد`;
  },
};

const AUT = {
  USER: "کاربر",
  USER_NAME: "نام کاربری",
  PASS: "رمز عبور",
  REMEMBER_ME: "مرا به خاطر بسپار",
  SIGN_IN_TO_CONTINUE: "برای ادامه وارد شوید",
  LOG_IN: "ورود به سیستم",
};
const REPORTS = {
  REPORTS: "گزارشات",
  REPORT: "گزارش",
  REPORT_NAME: "نام گزارش",
  REPORT_PATH: "مسیر گزارش",
  RECEIVING_RELEVANT_REPORTS: "درحال دریافت گزارشات مربوطه",
  RECEIVING_DATA_REPORTS: "درحال دریافت داده های گزارش",
  ADD_NEW_REPORT: "اضافه کردن گزارش جدید",
  NO_DATA: "هیچ داده ای وجود ندارد",
  NO_REPORT: "هیچ گزارشی وجود ندارد",
  
};

const ERRORS = {
  ERROR: "خطا",
  NETWORK_ERROR: "خطای شبکه",
  CONNECTION_SERVER_ERROR: "خطا در برقراری ارتباط با سرور"

};

export default { PUBLIC };
export { PUBLIC, AUT, REPORTS,ERRORS };
