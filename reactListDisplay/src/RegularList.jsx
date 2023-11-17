export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => {
        return <ItemComponent key={index} {...{ [resourceName]: item }} />;
      })}
    </>
  );
};
