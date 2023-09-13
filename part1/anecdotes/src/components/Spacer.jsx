const Spacer = ({ height }) => {
  const verticalHeight = `${height}px`;
  return (
    <div
      style={{
        height: verticalHeight,
      }}
    ></div>
  );
};

export default Spacer;
