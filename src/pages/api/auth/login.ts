import fetch from 'isomorphic-unfetch';
import {NextApiHandler} from 'next';
import {AUTH_SERVER_LOGIN_ENDPOINT} from '~/lib/env';

const ApiHandler: NextApiHandler = async (req, res) => {
  const result = await fetch(AUTH_SERVER_LOGIN_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: req.body,
  });
  if (result.status >= 400) {
    res.status(result.status);
    res.end();
  } else {
    const setCookie = result.headers.get('set-cookie');
    if (setCookie) res.setHeader('set-cookie', setCookie);
    res.redirect('/');
  }
};
export default ApiHandler;
