
import { Tile, DepartmentIcon, DepartmentName, DepartmentInfo } from './styles/Tiles.style';

const DepartmentTile = (props) => {
  return (
    <>
      <Tile>
        <DepartmentIcon src={props.img} />
        <DepartmentName>{props.DepartmentName}</DepartmentName>
        <DepartmentInfo>{props.DepartmentInfo}</DepartmentInfo>
      </Tile>
    </>
  );
};

export default DepartmentTile;