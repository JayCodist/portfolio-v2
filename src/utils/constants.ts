interface Link {
  icon: string;
  title: string;
  url: string;
}

export const initialPaginationParams = { pageNumber: 1, pageSize: 10 };

export const initialPaginationData = { total: 0, pageSize: 10, pageNumber: 1 };

export const links: Link[] = [
  {
    icon: "/icons/institution.svg",
    title: "Issuers",
    url: "/issuers"
  },
  {
    icon: "/icons/configuration.svg",
    title: "Configuration",
    url: "/configuration"
  }
];

export const logoutLink: Link = {
  icon: "/icons/sign-out.svg",
  url: "/",
  title: "Logout"
};

export const imageExtensions = {
  tiff: true,
  tif: true,
  bmp: true,
  jpg: true,
  jpeg: true,
  gif: true,
  png: true,
  eps: true
};
