import NoticeCard from "./NoticeCard";
import SearchIcon from "../Assets/Search.svg";   // <-- Your search icon
import FilterIcon from "../Assets/filter.svg";   // <-- Your filter icon

// import { Dropdown } from 'primereact/dropdown';


export default function MainContent() {
  return (
    <main className="main-wrapper d-flex flex-column flex-grow-1 overflow-hidden p-2">
      <div className="content-box bg-white shadow-sm d-flex flex-column">

        {/* 🔒 FIXED SEARCH BAR */}
        <div className="search-section p-2 ">
          <div className="d-flex align-items-center w-100">

            {/* Search Bar */}
            <div className="search-container flex-grow-1 me-3 position-relative">
              <img src={SearchIcon} alt="search-icon" className="search-left-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
              <img src={FilterIcon} alt="filter-icon" className="search-right-icon" />
            </div>

            {/* Create Button */}
            <button className="create-btn ms-2">
              Create <i className="pi pi-angle-down ms-1"></i>
            </button>
          </div>
        </div>

        {/* 🔒 FIXED FILTERS */}
        <div className="filter-section d-flex flex-wrap align-items-center justify-content-between py-2">

          <div className="left-filters d-flex flex-wrap align-items-center gap-2">
            <button className="filter-btn">All</button>
            <button className="filter-btn">Audience <span>▾</span></button>
            <button className="filter-btn">Category <span>▾</span></button>
            <button className="filter-btn">Language <span>▾</span></button>
            <button className="filter-btn">Organisation <span>▾</span></button>
            <button className="filter-btn">Time <span>▾</span></button>
            <button className="filter-btn">Type <span>▾</span></button>
          </div>

          {/* Right Side */}
          <div className="right-filters d-flex align-items-center gap-2">
            <div className="search-icon-wrapper">
              <i className="pi pi-search"></i>
            </div>
            <button className="filter-btn">Department <span>▾</span></button>
          </div>

        </div>

        {/* 🔽 SCROLLABLE NOTICE LIST */}
        <div className="scroll-area flex-grow-1 overflow-auto">
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
        </div>
      </div>
    </main>
  );
}
