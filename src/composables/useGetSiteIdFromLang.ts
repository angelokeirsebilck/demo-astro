interface IGetSiteIdFromLang {
  lang: string | number | undefined;
}

export const GetSiteIdFromLang = (params: IGetSiteIdFromLang) => {
  switch (params.lang) {
    case "nl":
      return 2;
    case "en":
      return 1;

    default:
      return 2;
  }
};
