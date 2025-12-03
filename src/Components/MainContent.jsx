import NoticeCard from "./NoticeCard";
import SearchIcon from "../Assets/Search.svg";
import FilterIcon from "../Assets/filter.svg";
import Ruhanika from "../Assets/Ruhanika.svg";


export default function MainContent() {
  return (
    <main className="main-wrapper d-flex flex-column flex-grow-1 overflow-hidden p-2">
      <div className="content-box bg-white shadow-sm d-flex flex-column">

        {/* SEARCH BAR */}
        <div className="search-section p-2">
          <div className="d-flex align-items-center w-100">
            <div className="search-container flex-grow-1 me-3 position-relative">
              <img src={SearchIcon} alt="search-icon" className="search-left-icon" />
              <input type="text" className="search-input" placeholder="Search" />
              <img src={FilterIcon} alt="filter-icon" className="search-right-icon" />
            </div>

            <button className="create-btn ms-2">
              Create <i className="pi pi-angle-down ms-1"></i>
            </button>
          </div>
        </div>

        {/* FILTERS */}
        <div className="filter-section d-flex flex-wrap align-items-center justify-content-between py-2">
          <div className="left-filters d-flex flex-wrap align-items-center gap-2">
            <button className="filter-btn">All</button>
            <button className="filter-btn">Audience ▾</button>
            <button className="filter-btn">Category ▾</button>
            <button className="filter-btn">Language ▾</button>
            <button className="filter-btn">Organisation ▾</button>
            <button className="filter-btn">Time ▾</button>
            <button className="filter-btn">Type ▾</button>
          </div>

          <div className="right-filters d-flex align-items-center gap-2">
            <div className="search-icon-wrapper"><i className="pi pi-search"></i></div>
            <button className="filter-btn">Department ▾</button>
          </div>
        </div>

        {/* SCROLLABLE NOTICE LIST */}
        <div className="scroll-area flex-grow-1 overflow-auto" tabIndex="0">

          <NoticeCard fileType="pdf" name="Ruhanika Roy" image={Ruhanika} />
          <NoticeCard fileType="excel" name="Akansha Dhingan" image={Ruhanika} />
          <NoticeCard fileType="zip" name="Kashish Jindal" image={Ruhanika} />
          <NoticeCard fileType="pdf" name="Shivani Sharma" image={Ruhanika} />
          <NoticeCard fileType="folder" name="Eliena" image={Ruhanika} />

        </div>
      </div>
    </main>
  );
}
