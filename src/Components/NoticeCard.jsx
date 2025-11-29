import Ruhanika from "../Assets/Ruhanika.svg";

export default function NoticeCard() {
  return (
    <div className="notice-card ms-3 me-3">
      <div className="notice-left">
        {/* File Icon */}
        <div className="file-icon">
          <i className="pi pi-file"></i>
        </div>

        {/* Text Content */}
        <div>
          <h6 className="notice-title">
            Document for adv search with filters and...
          </h6>

          <p className="notice-desc">
            All of it has contributed to England's load. It's a rarity t.....
          </p>

          {/* Tags */}
          <div className="tags">
            <span className="tag tag-blue">Type: Documents</span>
            <span className="tag tag-purple">Organisation: NIC</span>
            <span className="tag tag-yellow">Category: Allowances</span>
          </div>
        </div>
      </div>

      {/* Right Section */}

      <div className="notice-right d-flex pt-2 ">
        <small className="notice-date">13 Apr 2025</small>
        <div>
          <span className="notice-name mt-2 p-2 small">Ruhanika Roy</span>
          <img src={Ruhanika} alt="Ruhanika" className="notice-user" />
        </div>
      </div>
    </div>
  );
}
