import Box from '../../components/Box';
import { FcFinePrint } from 'react-icons/fc';

const NotFoundPage = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' p={50}>
      <h1 style={{ marginBottom: '20px' }}>404 Sorry, page not found</h1>
      <FcFinePrint size='100px' />
    </Box>
  );
};

export default NotFoundPage;
