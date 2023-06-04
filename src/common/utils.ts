export const isDev = () =>
  process.env.APP_DEBUG === 'true' && new URL(String(process.env.APP_SITE_URL)).hostname === 'localhost';

export const getShopUrl = (appSiteUrl: string, username: string): string => {
  const url = new URL(appSiteUrl);

  // https://shop.makemyshop.app/admin
  // https://localhost:3000/admin

  return isDev()
    ? `${appSiteUrl}/${username}/admin`
    : `${url.protocol}//${username}.${url.host}${!!url.port ? `:${url.port}` : ''}/admin`;
};
