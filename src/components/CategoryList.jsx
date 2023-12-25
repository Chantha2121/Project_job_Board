import { categories } from '../mocks/categories' ;
import "../styles/CategoryList.css";
export default function CategoryList(props) {
  const {
    toggleCategoryShow,
    category,
    handleActiveCategory,
    handleClearActiveCategory,
  } = props;

  return (
    <div>
      <div className="categoryListpadding">
        <div className="categoryListInner d-flex align-items-center justify-content-start">
          <ul className="categoryListcontainer shadow list-unstyled categoryListgroup overflow-y-scroll bg-success-subtle m-0">
            {categories.length > 0 &&
              categories.map((item, i) => (
                <li
                  onClick={handleActiveCategory}
                  key={item + i}
                  className="d-flex flex-row align-items-center justify-content-between p-2 border-bottom border-secondary"
                >
                  <span className="categoryListtext">{item.name}</span>
                  {category === item.name ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="categoryListicon text-primary w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="categoryListicon w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  )}
                </li>
              ))}
          </ul>
        </div>

        <div className="d-flex align-items-center justify-content-start">
          <div className="d-flex align-items-center justify-content-between gap-4 mt-4">
            <button
              onClick={handleClearActiveCategory}
              className="btn btn-dark"
            >
              Clear All
            </button>
            <button onClick={toggleCategoryShow} className="btn btn-success">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

