import { useState, useEffect } from 'react';

const NOCODB_URL = 'https://app.nocodb.com/api/v3/data/pzjm4srq27jcpe0/mrffav5xm8nkzt1/records?pageSize=25';
const API_TOKEN = 'nc_pat_tsceOXULFKx5bSNinIrlQUUCTskdbyox3taTnPMg';


export default function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(NOCODB_URL, {
      method: 'GET',
      headers: {
        'xc-token': API_TOKEN,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(datos => {
        setActividades(datos.records || datos.list || []);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error de conexión:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando datos desde la nube...</p>;

  return (
    <div>
      <h3>📋 Lista de Actividades</h3>
      <ul>
        {actividades.map((item, index) => {
          const campos = item.fields || item;
          return (
            <li key={item.id || index}>
              <strong>{campos.Titulo || 'Sin título'}</strong> — {campos.Duracion || 0} min
            </li>
          );
        })}
      </ul>
    </div>
  );
}
