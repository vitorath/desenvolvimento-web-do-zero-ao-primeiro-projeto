import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Assistir(props) {
  const query = useQuery();

  return (
    <div className="page">
      <iframe 
        width="560" 
        height="315" 
        title="Youtube"
        src={`https://www.youtube.com/embed/${query.get('video')}`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </div>
  )
}

export default Assistir;