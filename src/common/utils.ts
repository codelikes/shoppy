export const isDev = () => {
  const hostname = new URL(String(process.env.APP_SITE_URL)).hostname;

  return (
    process.env.APP_DEBUG === 'true' &&
    (hostname === 'localhost' || hostname === 'shoppy.local')
  );
};

export const getShopUrl = (appSiteUrl: string, account: string): string => {
  const url = new URL(appSiteUrl);

  // https://shop.makemyshop.app/admin
  // https://localhost:3000/admin

  return isDev()
    ? `${appSiteUrl}/shop/${account}/panel`
    : // : `${url.protocol}//${account}.${url.host}${!!url.port ? `:${url.port}` : ''}/panel`;
      `${url.protocol}//${account}.${url.host}/panel`;
};
