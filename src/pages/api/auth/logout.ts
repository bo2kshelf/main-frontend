import {NextApiHandler} from 'next';
import {destroyCookie} from 'nookies';
import {SESSION_NAME} from '~/lib/env';

const ApiHandler: NextApiHandler = async (req, res) => {
  destroyCookie({res}, SESSION_NAME, {path: '/'});
  res.redirect('/');
};
export default ApiHandler;
