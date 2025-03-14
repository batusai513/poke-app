import { Link, useSearchParams } from 'react-router';
import { parseQueryPaginationSchema } from '../modules/schemas/query-pagination.schema';

export function Pagination() {
  const [params] = useSearchParams();
  const p = parseQueryPaginationSchema(Object.fromEntries(params));
  const isFirstPage = p.page === 0;
  const prev = new URLSearchParams({
    page: (isFirstPage ? 1 : +p.page - 1).toString(),
  });
  const next = new URLSearchParams({
    page: (p.page + 1).toString(),
  });
  return (
    <div className="text-5xl flex gap-3 justify-center">
      <Link
        aria-disabled={isFirstPage}
        className={`${isFirstPage ? 'pointer-events-none' : ''}`}
        to={{
          search: `?${prev.toString()}`,
        }}
      >
        ⬅️
      </Link>
      <Link
        to={{
          search: `?${next.toString()}`,
        }}
      >
        ➡️
      </Link>
    </div>
  );
}
