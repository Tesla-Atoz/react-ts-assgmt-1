import "./DetailCard.css";

interface DetailCardInterface {
  key: string;
  id: string;
  name: string;
  age: string;
  edit: boolean;
  onDelete: (id: string) => void;
  onEdit: (name: string, age: string, id: string, edit: boolean) => void;
}

function DetailCard(props: DetailCardInterface) {
  const { name, age, id, onDelete, onEdit, edit } = props;

  return (
    <div className="card">
      <div className="container">
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
        <button
          className="detail-card__button"
          onClick={() => onEdit(name, age, id, edit)}
        >
          edit
        </button>
        <button className="detail-card__button" onClick={() => onDelete(id)}>
          delete
        </button>
      </div>
    </div>
  );
}
export default DetailCard;
