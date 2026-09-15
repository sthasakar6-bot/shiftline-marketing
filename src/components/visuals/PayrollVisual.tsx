export default function PayrollVisual() {
  return (
    <div className="mini-visual payroll-visual" aria-hidden="true">
      <div className="payroll-doc payroll-doc-1">
        <span className="payroll-doc-line" style={{ width: "70%" }} />
        <span className="payroll-doc-line" style={{ width: "45%" }} />
      </div>
      <div className="payroll-doc payroll-doc-2">
        <span className="payroll-doc-line" style={{ width: "60%" }} />
        <span className="payroll-doc-line" style={{ width: "38%" }} />
      </div>
      <div className="payroll-doc payroll-doc-3">
        <span className="payroll-doc-line" style={{ width: "65%" }} />
        <span className="payroll-doc-line" style={{ width: "50%" }} />
        <span className="payroll-doc-line" style={{ width: "30%" }} />
      </div>
      <span className="payroll-check">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}
