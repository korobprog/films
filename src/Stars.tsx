import Star from './Star';

export type Count = {
  count?: number;
};

const Starts: React.FC<Count> = (props: Count) => {
  const { count } = props;

  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }
  return <Star />;
};

Starts.defaultProps = {
  count: 0,
};

export default Starts;
