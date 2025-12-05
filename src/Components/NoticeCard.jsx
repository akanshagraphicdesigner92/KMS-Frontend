import PdfIcon from "../Assets/PdfImage.svg";
import ZipIcon from "../Assets/ZipImage.svg";
import ExcelIcon from "../Assets/ExcelImage.svg";
import FolderIcon from "../Assets/FolderImage.svg";

export default function NoticeCard({ fileType, name, image, title, desc }) {

  // Mapping fileType to icons
  const fileIcons = {
    pdf: PdfIcon,
    zip: ZipIcon,
    excel: ExcelIcon,
    folder: FolderIcon,
  };

  // Pick icon based on fileType, default pdf
  const fileIcon = fileIcons[fileType] || PdfIcon;

  return (
    <div className="notice-card ms-3 me-3">
      <div className="notice-left d-flex">

        {/* File Icon */}
        <div className="file-icon me-3">
          <img src={fileIcon} alt="file-icon" className="file-image" />
        </div>

        {/* Text Content */}
        <div>
          {/* === DYNAMIC TITLE === */}
          <h6 className="notice-title">{title}</h6>

          {/* === DYNAMIC DESCRIPTION === */}
          <p className="notice-desc">{desc}</p>

          <div className="tags">
            <span className="tag tag-blue">Type: Documents</span>
            <span className="tag tag-purple">Organisation: NIC</span>
            <span className="tag tag-yellow">Category: Allowances</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="notice-right pt-2">
        <small className="notice-date d-flex flex-column align-items-end">
          13 Apr 2025
        </small>

        <div className="ms-3 text-end d-flex">
          <span className="notice-name mt-2 p-2 small d-block">{name}</span>
          <img src={image} alt={name} className="notice-user" />
        </div>
      </div>
    </div>
  );
}
