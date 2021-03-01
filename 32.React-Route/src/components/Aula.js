import { useParams } from 'react-router-dom';
import data from '../Data';

function  useAula() {
  const id = useParams().id;
  return data.filter(aula => aula.id === Number(id))[0]
}

function Aula(props) {
  const aula = useAula();

  return (
    <div className="page">
      <h1>{aula.title}</h1>
      <h3>{aula.desc}</h3>
    </div>
  );
}

export default Aula;