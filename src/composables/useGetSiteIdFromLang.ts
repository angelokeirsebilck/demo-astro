interface IGetSiteIdFromLang {
  lang: string | number | undefined;
}

export const GetSiteIdFromLang = (params: IGetSiteIdFromLang) => {
  switch (params.lang) {
    case "nl":
      return 1;
    case "en":
      return 2;

    default:
      return 1;
  }
};
