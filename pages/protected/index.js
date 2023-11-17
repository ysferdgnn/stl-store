import withAuth from '../../components/withAuth';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>Helllllloooo</p>
    </div>
  );
};

export default withAuth(ProtectedPage);