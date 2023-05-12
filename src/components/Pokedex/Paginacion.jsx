import "./styles/paginacion.css";

const Paginacion = ({ProducForPag, PagAct, setPagAct ,totalProduct}) => {

  const pagNambers = []

  const num = (Math.ceil(totalProduct / ProducForPag))

  for(let i = 1; i <= num; i++ ){
    pagNambers.push(i)
  }

  const onPreviusPage = () => {
    setPagAct(PagAct - 1)
  }
  const onNextPage = () => {
    setPagAct(PagAct + 1)
  }

  const espePage = (n)=>{
    setPagAct(n)
  }

  return (
    <div>
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a className={`pagination-previous ${PagAct === 1 ? 'is-desabled': ""}`} onClick={onPreviusPage}>Previous</a>
        <a className={`pagination-next ${PagAct >= pagNambers.length ?'is-disabled':"" }`} onClick={onNextPage}>Next</a>
        <ul className="pagination-list">
          {pagNambers.map(noPage => (
            <li key={noPage}>
            <a className={`pagination-link ${ noPage === PagAct ? 'is-current':""}`} onClick={()=> espePage(noPage)}>{noPage}</a>
            </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginacion;
